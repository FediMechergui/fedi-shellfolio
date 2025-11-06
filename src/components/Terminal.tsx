import { useState, useEffect, useRef } from "react";
import { TerminalInput } from "./TerminalInput";
import { TerminalOutput } from "./TerminalOutput";
import { BootSequence } from "./BootSequence";
import { handleCommand } from "@/lib/commands";
import {
  trackCommand,
  trackPageView,
  trackSessionStart,
  trackSessionEnd,
  trackTimeOnPage,
} from "@/lib/analytics";

export interface OutputLine {
  type: "command" | "output" | "error";
  content: string | React.ReactNode;
  timestamp?: Date;
}

interface TerminalProps {
  theme: string;
  onThemeChange: (theme: string) => void;
}

export const Terminal = ({ theme, onThemeChange }: TerminalProps) => {
  const [isBooting, setIsBooting] = useState(true);
  const [output, setOutput] = useState<OutputLine[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const outputEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBooting(false);
      // Show initial welcome message
      setOutput([
        {
          type: "output",
          content: `Welcome to Fedi Mechergui's Terminal Portfolio v1.0.0
Type 'help' to see available commands.`,
          timestamp: new Date(),
        },
      ]);
      // Track initial page view
      trackPageView("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Track session start, end, and time on page
  useEffect(() => {
    const startTime = Date.now();
    let timeSpent = 0;

    // Track session start
    trackSessionStart();

    // Track time on page every 30 seconds
    const timeInterval = setInterval(() => {
      timeSpent += 30;
      trackTimeOnPage(timeSpent);
    }, 30000); // Every 30 seconds

    // Track session end on page unload
    const handleBeforeUnload = () => {
      const duration = Date.now() - startTime;
      trackSessionEnd(duration);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      clearInterval(timeInterval);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      // Also track session end when component unmounts
      const duration = Date.now() - startTime;
      trackSessionEnd(duration);
    };
  }, []);

  useEffect(() => {
    outputEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [output]);

  const executeCommand = (input: string) => {
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    // Add to history
    setCommandHistory((prev) => [...prev, trimmedInput]);
    setHistoryIndex(-1);

    // Add command to output
    setOutput((prev) => [
      ...prev,
      { type: "command", content: `$ ${trimmedInput}`, timestamp: new Date() },
    ]);

    // Handle special commands
    if (trimmedInput.toLowerCase() === "clear") {
      setOutput([]);
      return;
    }

    if (trimmedInput.toLowerCase().startsWith("theme ")) {
      const newTheme = trimmedInput.toLowerCase().replace("theme ", "");
      const validThemes = ["default", "dracula", "matrix", "monokai"];
      if (validThemes.includes(newTheme)) {
        onThemeChange(newTheme);
        setOutput((prev) => [
          ...prev,
          {
            type: "output",
            content: `Theme changed to ${newTheme}`,
            timestamp: new Date(),
          },
        ]);
      } else {
        setOutput((prev) => [
          ...prev,
          {
            type: "error",
            content: `Invalid theme. Available: ${validThemes.join(", ")}`,
            timestamp: new Date(),
          },
        ]);
      }
      return;
    }

    // Handle other commands
    const result = handleCommand(trimmedInput);
    setOutput((prev) => [
      ...prev,
      { type: result.type, content: result.content, timestamp: new Date() },
    ]);

    // Track command execution
    trackCommand(trimmedInput);

    result.action?.();
  };

  if (isBooting) {
    return <BootSequence />;
  }

  return (
    <div className="min-h-screen w-full p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-card border border-border rounded-lg shadow-2xl overflow-hidden">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-2 bg-muted border-b border-border">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive"></div>
              <div className="w-3 h-3 rounded-full bg-[hsl(var(--terminal-yellow))]"></div>
              <div className="w-3 h-3 rounded-full bg-primary"></div>
            </div>
            <span className="ml-4 text-sm text-muted-foreground">
              fedi@portfolio:~$
            </span>
          </div>

          {/* Terminal Body */}
          <div className="p-4 md:p-6 min-h-[70vh] max-h-[80vh] overflow-y-auto">
            <TerminalOutput output={output} />
            <div ref={outputEndRef} />
            <TerminalInput
              onExecute={executeCommand}
              commandHistory={commandHistory}
              historyIndex={historyIndex}
              onHistoryIndexChange={setHistoryIndex}
            />
          </div>
        </div>

        {/* Quick Command Buttons (Mobile Friendly) */}
        <div className="mt-4 flex flex-wrap gap-2 justify-center">
          {["help", "about", "skills", "projects", "experience", "contact"].map(
            (cmd) => (
              <button
                key={cmd}
                onClick={() => executeCommand(cmd)}
                className="px-3 py-1 text-sm bg-muted hover:bg-primary hover:text-primary-foreground transition-colors rounded border border-border"
              >
                {cmd}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};
