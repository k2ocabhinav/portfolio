import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeState {
    theme: 'dark' | 'light';
    toggleTheme: () => void;
    setTheme: (theme: 'dark' | 'light') => void;
}

export const useTheme = create<ThemeState>()(
    persist(
        (set) => ({
            theme: 'dark', // Default to dark as per spec
            toggleTheme: () => set((state) => {
                const newTheme = state.theme === 'dark' ? 'light' : 'dark';
                if (typeof window !== 'undefined') {
                    document.documentElement.setAttribute('data-theme', newTheme);
                }
                return { theme: newTheme };
            }),
            setTheme: (theme) => {
                if (typeof window !== 'undefined') {
                    document.documentElement.setAttribute('data-theme', theme);
                }
                return { theme };
            },
        }),
        {
            name: 'theme-storage',
            onRehydrateStorage: () => (state) => {
                if (state && typeof window !== 'undefined') {
                    document.documentElement.setAttribute('data-theme', state.theme);
                }
            },
        }
    )
);
