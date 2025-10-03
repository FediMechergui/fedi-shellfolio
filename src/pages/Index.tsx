import { useState } from "react";
import { Terminal } from "@/components/Terminal";

const Index = () => {
  const [theme, setTheme] = useState("default");

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    
    // Remove existing theme classes
    document.body.classList.remove(
      "theme-dracula",
      "theme-matrix",
      "theme-monokai"
    );
    
    // Add new theme class if not default
    if (newTheme !== "default") {
      document.body.classList.add(`theme-${newTheme}`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Terminal theme={theme} onThemeChange={handleThemeChange} />
    </div>
  );
};

export default Index;
