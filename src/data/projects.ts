export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    link?: string;
    github?: string;
    image?: string; // Path to image in public folder
    featured?: boolean;
}

export const projects: Project[] = [
    {
        id: "1",
        title: "Portfolio Website",
        description: "A modern, responsive portfolio built with Next.js 16 App Router, featuring SSG, Framer Motion animations, dark/light theme, and a serverless contact API with rate limiting.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
        link: "https://portfolio-fr2nianky-abhinavs-projects-bbd83794.vercel.app/",
        github: "https://github.com/k2ocabhinav/portfolio",
        featured: true
    },
    {
        id: "2",
        title: "E-Commerce Microservices",
        description: "A scalable e-commerce backend built with Node.js and gRPC. Features include high-concurrency order processing, inventory management, and real-time analytics.",
        tags: ["Node.js", "Microservices", "gRPC", "Redis"],
        github: "https://github.com/k2ocabhinav",
    },
    {
        id: "3",
        title: "Real-time Chat System",
        description: "Distributed chat application supporting thousands of concurrent users. Implemented using WebSocket, Redis Pub/Sub, and Cassandra for message history.",
        tags: ["Go", "WebSocket", "Cassandra", "Docker"],
        github: "https://github.com/k2ocabhinav",
    }
];
