"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = window.localStorage.getItem("gpost-theme") as Theme | null;
    const initial = saved === "light" || saved === "dark" ? saved : "dark";
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("gpost-theme", next);
  };

  return (
    <button className="theme-toggle" onClick={toggle} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
      <span className={`theme-track ${theme}`} aria-hidden="true"><i /></span>
      <span>{theme === "dark" ? "Strategy" : "GPOST"}</span>
    </button>
  );
}
