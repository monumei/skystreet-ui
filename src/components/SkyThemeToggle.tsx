import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export const SkyThemeToggle = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border-2 border-skystreet-ink dark:border-skystreet-neon bg-white dark:bg-skystreet-deep text-skystreet-ink dark:text-skystreet-neon transition-all hover:scale-110 shadow-manga dark:shadow-glow"
      aria-label="Toggle Theme"
    >
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
};
