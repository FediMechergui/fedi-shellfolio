import { useState, useRef, useEffect } from "react";

interface TerminalInputProps {
  onExecute: (command: string) => void;
  commandHistory: string[];
  historyIndex: number;
  onHistoryIndexChange: (index: number) => void;
}

export const TerminalInput = ({
  onExecute,
  commandHistory,
  historyIndex,
  onHistoryIndexChange,
}: TerminalInputProps) => {
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Auto-focus input
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle up arrow - previous command
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex =
          historyIndex === -1
            ? commandHistory.length - 1
            : Math.max(0, historyIndex - 1);
        onHistoryIndexChange(newIndex);
        setInput(commandHistory[newIndex]);
      }
    }

    // Handle down arrow - next command
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex =
          historyIndex < commandHistory.length - 1 ? historyIndex + 1 : -1;
        onHistoryIndexChange(newIndex);
        setInput(newIndex === -1 ? "" : commandHistory[newIndex]);
      }
    }

    // Handle enter - execute command
    if (e.key === "Enter") {
      e.preventDefault();
      onExecute(input);
      setInput("");
      onHistoryIndexChange(-1);
    }

    // Handle tab - autocomplete (basic)
    if (e.key === "Tab") {
      e.preventDefault();
      const commands = [
        "help",
        "about",
        "skills",
        "projects",
        "experience",
        "education",
        "contact",
        "clear",
        "theme",
        "resume",
        "hack",
        "matrix",
        "coffee",
      ];
      const matches = commands.filter((cmd) =>
        cmd.startsWith(input.toLowerCase())
      );
      if (matches.length === 1) {
        setInput(matches[0]);
      }
    }
  };

  return (
    <div className="flex items-center gap-2 mt-2">
      <span className="text-primary text-glow">$</span>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 bg-transparent border-none outline-none text-foreground font-mono"
        placeholder="Type a command..."
        autoFocus
      />
      <span className="text-primary cursor-blink">▊</span>
    </div>
  );
};
