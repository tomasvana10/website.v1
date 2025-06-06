"use client";

import { useTheme } from "next-themes";
import { KeyboardEvent, ChangeEvent, useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "../misc/SVG";
import Loading from "../misc/Loading";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    if (!localStorage.getItem("theme") && resolvedTheme) {
      localStorage.setItem("theme", resolvedTheme);
      setTheme(resolvedTheme);
    }
    const currentTheme = theme === "system" ? resolvedTheme : theme;
    currentTheme && document.documentElement.classList.add(currentTheme!);
  }, [theme, resolvedTheme, setTheme]);

  if (!mounted) return <Loading />;

  const toggleTheme = () => {
    const currentTheme = theme === "system" ? resolvedTheme : theme;
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.remove(currentTheme!);
    document.documentElement.classList.add(newTheme);
  };

  const handleThemeToggle = (event: KeyboardEvent<HTMLInputElement> | ChangeEvent<HTMLInputElement>) => {
    if ((event as KeyboardEvent<HTMLInputElement>).key === "Enter" || event.type === "change") toggleTheme();
  };

  return (
    <div>
      <label className="grid cursor-pointer place-items-center">
        <input
          type="checkbox"
          value={theme === "system" ? resolvedTheme : theme}
          onKeyDown={handleThemeToggle}
          checked={resolvedTheme === "light"}
          onChange={handleThemeToggle}
          className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
        />
        <SunIcon className="stroke-base-100 fill-base-100 col-start-2 row-start-1" />
        <MoonIcon className="stroke-base-100 fill-base-100 col-start-1 row-start-1" />
      </label>
    </div>
  );
}
