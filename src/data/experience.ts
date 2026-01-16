export interface Experience {
    id: string;
    role: string;
    company: string;
    period: string;
    location: string;
    description: string[];
    tech: string[];
}

export const experiences: Experience[] = [
    {
        id: "1",
        role: "Backend Engineer",
        company: "Tech Startup Inc.",
        period: "2024 - Present",
        location: "Bengaluru, India",
        description: [
            "Architected and implemented a microservices-based backend handling 1M+ daily requests.",
            "Optimized database queries reducing average latency by 40%.",
            "Led the migration from monolithic architecture to distributed services."
        ],
        tech: ["Go", "PostgreSQL", "Kafka", "AWS"]
    },
    {
        id: "2",
        role: "Software Engineer Intern",
        company: "Global Systems Ltd.",
        period: "2023 - 2024",
        location: "Remote",
        description: [
            "Developed RESTful APIs for internal tooling using Node.js.",
            "implemented automated testing pipeline with 90% code coverage.",
            "Collaborated with frontend team to integrate APIs and fix bugs."
        ],
        tech: ["Node.js", "Express", "Docker", "Jest"]
    }
];
