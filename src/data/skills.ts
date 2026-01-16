export interface Skill {
    name: string;
    category: "Backend" | "Database" | "DevOps" | "Tools";
    level?: number; // Optional 1-100 for progress bars
}

export const skills: Skill[] = [
    // Backend
    { name: "Node.js", category: "Backend", level: 90 },
    { name: "TypeScript", category: "Backend", level: 85 },
    { name: "Python", category: "Backend", level: 80 },
    { name: "Go", category: "Backend", level: 75 },
    { name: "Java", category: "Backend", level: 70 },

    // Database
    { name: "PostgreSQL", category: "Database", level: 90 },
    { name: "MongoDB", category: "Database", level: 85 },
    { name: "Redis", category: "Database", level: 80 },

    // DevOps
    { name: "Docker", category: "DevOps", level: 85 },
    { name: "Kubernetes", category: "DevOps", level: 75 },
    { name: "AWS", category: "DevOps", level: 80 },
    { name: "CI/CD", category: "DevOps", level: 85 },

    // Tools
    { name: "Git", category: "Tools", level: 95 },
    { name: "Linux", category: "Tools", level: 85 },
    { name: "System Design", category: "Tools", level: 80 }
];
