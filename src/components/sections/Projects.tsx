"use client";

import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-[var(--bg-secondary)]">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-[var(--accent-primary)] mx-auto rounded-full mb-8" />
                    <p className="max-w-2xl mx-auto text-[var(--text-secondary)]">
                        A selection of projects that demonstrate my ability to solve complex problems
                        and build scalable solutions.
                    </p>
                </motion.div>

                {projects.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-[var(--bg-primary)] rounded-xl border border-dashed border-[var(--border)]">
                        <p className="text-xl text-[var(--text-secondary)]">Projects coming soon...</p>
                    </div>
                )}
            </div>
        </section>
    );
}
