"use client";

import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-[calc(100vh-70px)] flex items-center justify-center overflow-hidden bg-[var(--bg-primary)] px-4"
        >
            {/* Background Gradient/Mesh */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[var(--accent-primary)]/5 blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[var(--accent-secondary)]/5 blur-[100px]" />
            </div>

            <div className="relative max-w-6xl mx-auto px-4 text-center z-10">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                >
                    <motion.div variants={fadeInUp}>
                        <h2 className="text-[var(--accent-primary)] font-medium tracking-wide uppercase mb-4">
                            Hello, I&apos;m
                        </h2>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[var(--text-primary)] mb-6 tracking-tight">
                            Abhinav
                        </h1>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                        <h2 className="text-3xl md:text-5xl font-semibold text-[var(--text-secondary)] mb-8">
                            Backend <span className="text-[var(--text-primary)]">Engineer</span>
                        </h2>
                    </motion.div>


                    <motion.p
                        variants={fadeInUp}
                        className="max-w-2xl mx-auto text-lg md:text-xl text-[var(--text-secondary)] mb-10 leading-relaxed"
                    >
                        Building robust, scalable server-side systems and solving complex engineering problems.
                        Specialized in high-performance APIs and distributed architectures.
                    </motion.p>

                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            href="#projects"
                            aria-label="View My Projects"
                            className="group px-8 py-3.5 bg-[var(--accent-primary)] text-black font-semibold rounded-full flex items-center gap-2 hover:bg-[var(--accent-primary)]/90 transition-all hover:scale-105"
                        >
                            View My Work
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Download Resume PDF"
                            className="group px-8 py-3.5 border border-[var(--border)] text-[var(--text-primary)] font-medium rounded-full flex items-center gap-2 hover:bg-[var(--bg-secondary)] hover:border-[var(--accent-primary)] transition-all"
                        >
                            Download Resume
                            <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section >
    );
}
