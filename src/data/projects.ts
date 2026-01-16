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
    // Placeholder Project 1
    {
        id: "1",
        title: "E-Commerce Microservices",
        description: "A scalable e-commerce backend built with Node.js and gRPC. Features include high-concurrency order processing, inventory management, and real-time analytics.",
        tags: ["Node.js", "Microservices", "gRPC", "Redis"],
        github: "https://github.com",
        // image: "/projects/project1.png" // Uncomment when image exists
    },
    // Placeholder Project 2
    {
        id: "2",
        title: "Real-time Chat System",
        description: "Distributed chat application supporting thousands of concurrent users. Implemented using WebSocket, Redis Pub/Sub, and Cassandra for message history.",
        tags: ["Go", "WebSocket", "Cassandra", "Docker"],
        github: "https://github.com",
    },
    // Placeholder Project 3
    {
        id: "3",
        title: "AI Content Generator",
        description: "SaaS platform leveraging LLMs to generate marketing content. Built with Python/FastAPI and integrated with OpenAI API.",
        tags: ["Python", "FastAPI", "OpenAI", "React"],
        github: "https://github.com",
    }
];
