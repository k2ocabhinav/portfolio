"use client";

import { motion } from "framer-motion";
import { User, Code, Server, Database } from "lucide-react";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";

export default function About() {
    return (
        <section id="about" className="py-12 md:py-20 bg-[var(--bg-secondary)]">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-[var(--accent-primary)] mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Photo Placeholder */}
                    <motion.div
                        variants={fadeInLeft}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="relative justify-self-center md:justify-self-end"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden bg-[var(--bg-primary)] border-2 border-[var(--border)] flex items-center justify-center group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10 group-hover:opacity-100 transition-opacity" />
                            <User size={64} className="text-[var(--text-secondary)]" />
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[var(--bg-primary)] rounded-xl shadow-lg flex items-center justify-center border border-[var(--border)] z-10">
                            <Server size={32} className="text-[var(--accent-primary)]" />
                        </div>
                    </motion.div>

                    {/* Bio Content */}
                    <motion.div
                        variants={fadeInRight}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-semibold mb-6 text-[var(--text-primary)]">
                            Backend Engineer & System Architect
                        </h3>

                        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                            I am a passionate backend engineer with a focus on building scalable, high-performance systems.
                            My journey involves designing distributed architectures, optimizing database performance, and ensuring reliable API integrations.
                        </p>

                        <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
                            Currently enabling companies to handle massive scale through efficient code and robust infrastructure.
                            I believe in clean architecture, test-driven development, and the power of open source.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-[var(--bg-primary)] rounded-lg border border-[var(--border)] flex items-center gap-3">
                                <Code className="text-[var(--accent-primary)]" />
                                <span className="font-medium">Clean Code</span>
                            </div>
                            <div className="p-4 bg-[var(--bg-primary)] rounded-lg border border-[var(--border)] flex items-center gap-3">
                                <Database className="text-[var(--accent-secondary)]" />
                                <span className="font-medium">Scalable DBs</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
