import { NextResponse } from 'next/server';

// Simple in-memory rate limiting (resets on cold start)
// For production, use Redis or Vercel KV
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5; // Max 5 requests
const RATE_WINDOW = 60 * 1000; // Per minute

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const record = rateLimitMap.get(ip);

    if (!record || now > record.resetTime) {
        rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
        return false;
    }

    record.count++;
    return record.count > RATE_LIMIT;
}

// Email validation regex (RFC 5322 simplified)
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Input sanitization - removes potential script tags and trims
function sanitize(input: string): string {
    return input
        .trim()
        .replace(/<[^>]*>/g, '') // Remove HTML tags
        .slice(0, 5000); // Max length safety
}

export async function POST(request: Request) {
    try {
        // Rate limiting
        const ip = request.headers.get('x-forwarded-for') || 'unknown';
        if (isRateLimited(ip)) {
            return NextResponse.json(
                { error: 'Too many requests. Please try again later.' },
                { status: 429 }
            );
        }

        // Content-Type validation
        const contentType = request.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            return NextResponse.json(
                { error: 'Invalid content type' },
                { status: 400 }
            );
        }

        const body = await request.json();
        const { name, email, message } = body;

        // Required field validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Type validation
        if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
            return NextResponse.json(
                { error: 'Invalid field types' },
                { status: 400 }
            );
        }

        // Length validation
        if (name.length > 100) {
            return NextResponse.json(
                { error: 'Name must be 100 characters or less' },
                { status: 400 }
            );
        }
        if (email.length > 254) {
            return NextResponse.json(
                { error: 'Email must be 254 characters or less' },
                { status: 400 }
            );
        }
        if (message.length > 5000) {
            return NextResponse.json(
                { error: 'Message must be 5000 characters or less' },
                { status: 400 }
            );
        }

        // Email format validation
        if (!EMAIL_REGEX.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Sanitize inputs
        const sanitizedData = {
            name: sanitize(name),
            email: sanitize(email),
            message: sanitize(message),
            submittedAt: new Date().toISOString(),
        };

        // TODO: Integrate with SendGrid/Resend/Nodemailer
        // For now, log to console (remove in production)
        console.log('Contact Submission:', sanitizedData);

        return NextResponse.json(
            { message: 'Message sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        // Don't expose error details in production
        console.error('Contact API Error:', error);
        return NextResponse.json(
            { error: 'Something went wrong. Please try again.' },
            { status: 500 }
        );
    }
}
