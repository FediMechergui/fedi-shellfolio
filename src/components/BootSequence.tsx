import { useEffect, useState } from "react";

const bootMessages = [
  "Initializing system...",
  "Loading kernel modules...",
  "Starting network services...",
  "Mounting file systems...",
  "Loading portfolio data...",
  "Configuring terminal interface...",
  "System ready.",
];

export const BootSequence = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [asciiArt, setAsciiArt] = useState(false);

  useEffect(() => {
    if (currentLine < bootMessages.length) {
      const timer = setTimeout(() => {
        setCurrentLine((prev) => prev + 1);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setAsciiArt(true);
    }
  }, [currentLine]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Boot Messages */}
        <div className="space-y-1 mb-8">
          {bootMessages.slice(0, currentLine).map((msg, idx) => (
            <div
              key={idx}
              className="text-primary font-mono text-sm md:text-base animate-fade-in-up"
            >
              [OK] {msg}
            </div>
          ))}
        </div>

        {/* ASCII Art */}
        {asciiArt && (
          <div className="text-primary font-mono text-xs md:text-sm leading-tight animate-fade-in">
            <pre className="whitespace-pre overflow-x-auto text-glow">
{`
███████╗███████╗██████╗ ██╗    ███╗   ███╗███████╗ ██████╗██╗  ██╗███████╗██████╗  ██████╗ ██╗   ██╗██╗
██╔════╝██╔════╝██╔══██╗██║    ████╗ ████║██╔════╝██╔════╝██║  ██║██╔════╝██╔══██╗██╔════╝ ██║   ██║██║
█████╗  █████╗  ██║  ██║██║    ██╔████╔██║█████╗  ██║     ███████║█████╗  ██████╔╝██║  ███╗██║   ██║██║
██╔══╝  ██╔══╝  ██║  ██║██║    ██║╚██╔╝██║██╔══╝  ██║     ██╔══██║██╔══╝  ██╔══██╗██║   ██║██║   ██║██║
██║     ███████╗██████╔╝██║    ██║ ╚═╝ ██║███████╗╚██████╗██║  ██║███████╗██║  ██║╚██████╔╝╚██████╔╝██║
╚═╝     ╚══════╝╚═════╝ ╚═╝    ╚═╝     ╚═╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ╚═╝
`}
            </pre>
            <div className="mt-4 text-center">
              <p className="text-lg md:text-xl text-secondary">
                Full Stack Developer & DevSecOps Specialist
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Building scalable solutions from Tunisia 🇹🇳
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
