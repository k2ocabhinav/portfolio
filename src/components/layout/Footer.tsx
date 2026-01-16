import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

const socialLinks = [
    { name: "GitHub", href: "https://github.com", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com", icon: Twitter },
    { name: "Email", href: "mailto:hello@example.com", icon: Mail },
];

export default function Footer() {
    return (
        <footer className="bg-[var(--bg-primary)] border-t border-[var(--border)] py-12">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Copyright */}
                <div className="text-[var(--text-secondary)] text-sm text-center md:text-left">
                    <p>&copy; {new Date().getFullYear()} Abhinav. All rights reserved.</p>
                    <p className="mt-1 text-xs">Built with Next.js 16, TypeScript & Tailwind</p>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-6">
                    {socialLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-transform hover:scale-110"
                            aria-label={link.name}
                        >
                            <link.icon size={20} />
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}
