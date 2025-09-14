// src/hooks/useTheme.js
import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement; // Pega o elemento <html>

    root.classList.remove('light', 'dark');
    root.classList.add(theme); // Adiciona a classe 'dark' ou 'light'

    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return [theme, toggleTheme];
}