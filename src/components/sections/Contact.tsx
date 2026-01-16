"use client";

import { useState } from "react";
import { Send, Mail, Github, Linkedin, Twitter, Download } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Failed to send");

            setStatus("success");
            setFormData({ name: "", email: "", message: "" });

            // Reset status after a few seconds
            setTimeout(() => setStatus("idle"), 5000);
        } catch {
            setStatus("error");
            // Reset error status after 5 seconds
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    const [errorMessage, setErrorMessage] = useState("");

    return (
        <section id="contact" className="py-20 bg-[var(--bg-secondary)]">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-[var(--accent-primary)] mx-auto rounded-full mb-8" />
                    <p className="max-w-2xl mx-auto text-[var(--text-secondary)]">
                        Interested in working together? Have a question? Send me a message
                        and I&apos;ll get back to you as soon as possible.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="bg-[var(--bg-primary)] p-8 rounded-2xl border border-[var(--border)]">
                            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                <a
                                    href="mailto:hello@example.com"
                                    className="flex items-center gap-4 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors group"
                                >
                                    <div className="w-12 h-12 bg-[var(--bg-secondary)] rounded-full flex items-center justify-center group-hover:bg-[var(--accent-primary)]/10 transition-colors">
                                        <Mail size={24} />
                                    </div>
                                    <span className="text-lg">hello@example.com</span>
                                </a>

                                <div className="flex gap-4 pt-4">
                                    <Link href="https://github.com" target="_blank" className="p-3 bg-[var(--bg-secondary)] rounded-full hover:text-[var(--accent-primary)] hover:scale-110 transition-all">
                                        <Github size={20} />
                                    </Link>
                                    <Link href="https://linkedin.com" target="_blank" className="p-3 bg-[var(--bg-secondary)] rounded-full hover:text-[var(--accent-primary)] hover:scale-110 transition-all">
                                        <Linkedin size={20} />
                                    </Link>
                                    <Link href="https://twitter.com" target="_blank" className="p-3 bg-[var(--bg-secondary)] rounded-full hover:text-[var(--accent-primary)] hover:scale-110 transition-all">
                                        <Twitter size={20} />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 bg-gradient-to-br from-[var(--accent-primary)]/10 to-transparent rounded-2xl border border-[var(--accent-primary)]/20">
                            <h4 className="text-xl font-semibold mb-2">Looking for my resume?</h4>
                            <p className="text-[var(--text-secondary)] mb-6">
                                Download my refined resume to get a detailed overview of my experience.
                            </p>
                            <Link
                                href="/resume.pdf"
                                target="_blank"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--text-primary)] text-[var(--bg-primary)] font-semibold rounded-full hover:opacity-90 transition-opacity"
                            >
                                <Download size={18} />
                                Download Resume
                            </Link>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-[var(--bg-primary)] p-8 rounded-2xl border border-[var(--border)]"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2 text-[var(--text-secondary)]">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                    className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] transition-shadow"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2 text-[var(--text-secondary)]">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                    className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] transition-shadow"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2 text-[var(--text-secondary)]">Message</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                                    className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] transition-shadow resize-none"
                                    placeholder="Your message..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "loading" || status === "success"}
                                className={`w-full py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${status === "success"
                                    ? "bg-[var(--success)] text-white"
                                    : "bg-[var(--accent-primary)] text-black hover:bg-[var(--accent-primary)]/90"
                                    } disabled:opacity-70 disabled:cursor-not-allowed`}
                            >
                                {status === "loading" ? (
                                    <span className="animate-pulse">Sending...</span>
                                ) : status === "success" ? (
                                    "Message Sent!"
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={18} />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
