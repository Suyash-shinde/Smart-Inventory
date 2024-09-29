'use client'
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Toggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Ensure component is mounted for proper client-side rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent rendering until the component is mounted
  if (!mounted) return null;

  // Toggle function to switch themes
  const handleThemeChange = (isDarkMode) => {
    setTheme(isDarkMode ? "dark" : "light");
  };

  return (
    <Switch
      checked={theme === "dark"}  // Set checked state based on the current theme
      onChange={(e) => handleThemeChange(e.target.checked)}  // Change theme based on the switch state
      size="lg"
      color="success"
      startContent={<SunIcon />}  // Sun icon for light mode
      endContent={<MoonIcon />}   // Moon icon for dark mode
    >
      Dark mode
    </Switch>
  );
}
