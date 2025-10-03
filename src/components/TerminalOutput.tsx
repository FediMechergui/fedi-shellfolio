import { OutputLine } from "./Terminal";

interface TerminalOutputProps {
  output: OutputLine[];
}

export const TerminalOutput = ({ output }: TerminalOutputProps) => {
  return (
    <div className="space-y-2">
      {output.map((line, idx) => (
        <div
          key={idx}
          className={`animate-fade-in-up ${
            line.type === "command"
              ? "text-secondary"
              : line.type === "error"
              ? "text-destructive"
              : "text-foreground"
          }`}
        >
          {typeof line.content === "string" ? (
            <pre className="whitespace-pre-wrap font-mono text-sm md:text-base">
              {line.content}
            </pre>
          ) : (
            line.content
          )}
        </div>
      ))}
    </div>
  );
};
