"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import { motion } from "framer-motion";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    // Mount state to avoid hydration mismatch
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-10 h-10" />; // Placeholder
    }

    return (
        <button
            onClick={toggleTheme}
            className="relative p-2 rounded-full hover:bg-[var(--bg-secondary)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]"
            aria-label="Toggle theme"
        >
            <div className="relative w-6 h-6">
                <motion.div
                    initial={false}
                    animate={{
                        scale: theme === "dark" ? 1 : 0,
                        opacity: theme === "dark" ? 1 : 0,
                        rotate: theme === "dark" ? 0 : 90,
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center text-[var(--accent-primary)]"
                >
                    <Moon size={20} />
                </motion.div>

                <motion.div
                    initial={false}
                    animate={{
                        scale: theme === "light" ? 1 : 0,
                        opacity: theme === "light" ? 1 : 0,
                        rotate: theme === "light" ? 0 : -90,
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center text-[var(--accent-primary)]"
                >
                    <Sun size={20} />
                </motion.div>
            </div>
        </button>
    );
}
