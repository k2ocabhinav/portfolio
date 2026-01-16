"use client";

import { experiences } from "@/data/experience";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-[var(--bg-primary)]">
            <div className="max-w-4xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
                    <div className="w-20 h-1 bg-[var(--accent-primary)] mx-auto rounded-full" />
                </motion.div>

                <div className="relative border-l-2 border-[var(--border)] ml-3 md:ml-6 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--accent-primary)] shadow-[0_0_0_4px_var(--bg-primary)]" />

                            <div className="bg-[var(--bg-secondary)] p-6 rounded-xl border border-[var(--border)] hover:border-[var(--accent-primary)]/50 transition-colors">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                    <h3 className="text-xl font-bold text-[var(--text-primary)]">{exp.role}</h3>
                                    <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                                        <Calendar size={14} />
                                        <span>{exp.period}</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-[var(--accent-primary)] font-medium mb-4">
                                    <Briefcase size={16} />
                                    <span>{exp.company}</span>
                                    <span className="text-[var(--text-secondary)] mx-1">•</span>
                                    <MapPin size={16} />
                                    <span className="text-[var(--text-secondary)]">{exp.location}</span>
                                </div>

                                <ul className="space-y-2 mb-6 text-[var(--text-secondary)]">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex gap-2">
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] flex-shrink-0" />
                                            <span className="leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2">
                                    {exp.tech.map(tech => (
                                        <span key={tech} className="text-xs font-mono px-2 py-1 bg-[var(--bg-primary)] rounded border border-[var(--border)] text-[var(--text-secondary)]">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
