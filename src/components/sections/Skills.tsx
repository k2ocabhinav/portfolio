"use client";

import { skills } from "@/data/skills";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, itemFadeIn } from "@/lib/animations";

export default function Skills() {
    const categories = Array.from(new Set(skills.map((s) => s.category)));

    return (
        <section id="skills" className="py-12 md:py-20 bg-[var(--bg-primary)]">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="text-center mb-10 md:mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-[var(--accent-primary)] mx-auto rounded-full mb-8" />
                    <p className="max-w-2xl mx-auto text-[var(--text-secondary)]">
                        A comprehensive overview of my technical stack and proficiency levels.
                        Always learning and adapting to new technologies.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((category) => (
                        <div key={category} className="space-y-6">
                            <h3 className="text-xl font-semibold text-[var(--accent-primary)] border-b border-[var(--border)] pb-2">
                                {category}
                            </h3>
                            <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="space-y-4"
                            >
                                {skills
                                    .filter((s) => s.category === category)
                                    .map((skill) => (
                                        <motion.div
                                            key={skill.name}
                                            variants={itemFadeIn}
                                            className="group"
                                        >
                                            <div className="flex justify-between mb-1">
                                                <span className="font-medium text-[var(--text-primary)]">{skill.name}</span>
                                                <span className="text-sm text-[var(--text-secondary)]">{skill.level}%</span>
                                            </div>
                                            <div className="w-full h-2 bg-[var(--bg-secondary)] rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full relative"
                                                    style={{ width: `${skill.level}%` }}
                                                >
                                                    <div className="absolute inset-0 bg-white/20 group-hover:bg-white/30 transition-colors" />
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
