"use client";

import { Project } from "@/data/projects";
import { Folder, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="group relative bg-[var(--bg-primary)] p-6 rounded-xl border border-[var(--border)] hover:border-[var(--accent-primary)] transition-colors h-full flex flex-col"
        >
            {/* Header Icons */}
            <div className="flex justify-between items-start mb-6">
                <Folder className="text-[var(--accent-primary)]" size={40} />
                <div className="flex gap-4">
                    {project.github && (
                        <Link
                            href={project.github}
                            target="_blank"
                            className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
                            aria-label="GitHub Repository"
                        >
                            <Github size={20} />
                        </Link>
                    )}
                    {project.link && (
                        <Link
                            href={project.link}
                            target="_blank"
                            className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
                            aria-label="Live Demo"
                        >
                            <ExternalLink size={20} />
                        </Link>
                    )}
                </div>
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                {project.title}
            </h3>

            <p className="text-[var(--text-secondary)] mb-6 flex-grow leading-relaxed">
                {project.description}
            </p>

            {/* Tech Sact */}
            <div className="flex flex-wrap gap-2 text-sm text-[var(--text-secondary)] mt-auto font-mono">
                {project.tags.map(tag => (
                    <span key={tag} className="bg-[var(--bg-secondary)] px-2 py-1 rounded">
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}
