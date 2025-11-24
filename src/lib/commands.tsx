import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { saveAs } from "file-saver";
import resumePdf from "@/assets/Fedi-Mechergui-FlowCV-Resume-20251124 (1).pdf";
import meBtwImage from "@/assets/mebtw.png";
import { trackResumeDownload, trackEasterEgg } from "./analytics";

interface CommandResult {
  type: "output" | "error";
  content: string | React.ReactNode;
  action?: () => void;
}

export const handleCommand = (input: string): CommandResult => {
  const command = input.toLowerCase().trim();
  const args = command.split(" ");
  const mainCommand = args[0];

  switch (mainCommand) {
    case "help":
      return {
        type: "output",
        content: `Available commands:
  help       - Show this help message
  about      - Learn about me
  skills     - View my technical skills
  projects   - See my projects
  experience - View my work experience
  education  - See my education & certificates
  contact    - Get in touch
  clear      - Clear the terminal
  theme      - Change theme (theme <name>)
              Available: default, dracula, matrix, monokai
  resume     - Download my resume
  
Easter eggs:
  coffee     - ☕
  matrix     - Enter the matrix
  hack       - Hacker mode activated
  surprise   - 🎁 Something special...
  dance      - 💃 Let's dance!
  quote      - 💭 Random dev quote
  more       - 🔍 Want to know more?`,
      };

    case "about":
      return {
        type: "output",
        content: <AboutSection />,
      };

    case "skills":
      return {
        type: "output",
        content: <SkillsSection />,
      };

    case "projects":
      return {
        type: "output",
        content: <ProjectsSection />,
      };

    case "experience":
      return {
        type: "output",
        content: <ExperienceSection />,
      };

    case "education":
      return {
        type: "output",
        content: <EducationSection />,
      };

    case "contact":
      return {
        type: "output",
        content: <ContactSection />,
      };

    case "resume":
      return {
        type: "output",
        content: `Resume download initiated! If the download doesn't start automatically, please try again or reach out via the contact form.`,
        action: () => {
          trackResumeDownload();
          saveAs(resumePdf, "Fedi-Mechergui-Resume.pdf");
        },
      };

    case "coffee":
      trackEasterEgg("coffee");
      return {
        type: "output",
        content: `
        (  )   (   )  )
         ) (   )  (  (
         ( )  (    ) )
         _____________
        <_____________> ___
        |             |/ _ \\
        |   COFFEE    | | | |
        |   FOR       |_| |_|
        |   DEVS      |     
        |_____________|
         
"Debugging is just the art of removing the semicolons you added at 3 AM." - Unknown`,
      };

    case "matrix":
      trackEasterEgg("matrix");
      return {
        type: "output",
        content: `Wake up, Neo...
The Matrix has you...
Follow the white rabbit.

🐰 Knock, knock, Neo.

Type 'clear' to exit the matrix.`,
      };

    case "hack":
      trackEasterEgg("hack");
      return {
        type: "output",
        content: `[INITIALIZING HACKING SEQUENCE]
> Connecting to mainframe...
> Bypassing firewall...
> Decrypting database...
> Access granted!

Just kidding! I'm a developer, not a hacker 😄
(But I do know some DevSecOps tricks)`,
      };

    case "whoami":
      return {
        type: "output",
        content: "fedi@mechergui ~ Full Stack Developer & DevSecOps Specialist",
      };

    case "sudo":
      return {
        type: "error",
        content: "Nice try! But you don't have sudo privileges here 😉",
      };

    case "ls":
      return {
        type: "output",
        content: `about.txt  skills.txt  projects/  experience.txt  education.txt  contact.txt`,
      };

    case "pwd":
      return {
        type: "output",
        content: "/home/fedi/portfolio",
      };

    case "surprise":
      trackEasterEgg("surprise");
      return {
        type: "output",
        content: `🎁 Surprise! Opening something special...
Get ready for an epic experience! 🚀`,
        action: () =>
          window.open(
            "https://www.youtube.com/watch?v=xvFZjo5PgG0&list=RDxvFZjo5PgG0&start_radio=1",
            "_blank"
          ),
      };

    case "dance":
      trackEasterEgg("dance");
      return {
        type: "output",
        content: `
    💃    🕺    💃    🕺
      ♪┏(･o･)┛♪
    🕺    💃    🕺    💃
    
"When your code compiles on the first try!"
Time to celebrate! 🎉`,
      };

    case "quote": {
      const quotes = [
        '"Talk is cheap. Show me the code." - Linus Torvalds',
        '"First, solve the problem. Then, write the code." - John Johnson',
        '"Code is like humor. When you have to explain it, it\'s bad." - Cory House',
        '"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." - Martin Fowler',
        '"Experience is the name everyone gives to their mistakes." - Oscar Wilde',
        '"The best error message is the one that never shows up." - Thomas Fuchs',
        '"Simplicity is the soul of efficiency." - Austin Freeman',
        '"Make it work, make it right, make it fast." - Kent Beck',
      ];
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      return {
        type: "output",
        content: `💭 ${randomQuote}`,
      };
    }

    case "fortune":
      return {
        type: "output",
        content: `🔮 Your fortune: "You will soon encounter a challenging bug...
but you will solve it with coffee and determination!" ☕`,
      };

    case "joke":
      return {
        type: "output",
        content: `😄 Why do programmers prefer dark mode?

Because light attracts bugs! 🐛`,
      };

    case "ping":
      return {
        type: "output",
        content: `PING fedi.portfolio (127.0.0.1): 56 data bytes
64 bytes from 127.0.0.1: icmp_seq=0 ttl=64 time=0.042 ms
64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.037 ms
64 bytes from 127.0.0.1: icmp_seq=2 ttl=64 time=0.035 ms

--- fedi.portfolio ping statistics ---
3 packets transmitted, 3 packets received, 0.0% packet loss
Portfolio is online! ✅`,
      };

    case "more":
      trackEasterEgg("more");
      return {
        type: "output",
        content: (
          <div className="space-y-3">
            <img
              src={meBtwImage}
              alt="This is me btw"
              className="max-w-sm w-full rounded-lg border-2 border-primary shadow-lg"
            />
            <p className="text-foreground text-sm italic">
              This is me btw. Nothing more. Try other sections to find something
              useful. 😎
            </p>
          </div>
        ),
      };

    case "raghed":
      trackEasterEgg("raghed");
      return {
        type: "output",
        content: (
          <div className="space-y-4 my-4">
            <div className="text-center">
              <div className="text-4xl mb-2 animate-pulse">💌</div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
                A Message for Raghed
              </h3>
            </div>
            <div className="border-l-4 border-primary pl-4 py-2 bg-gradient-to-r from-primary/5 to-transparent">
              <p className="text-foreground leading-relaxed mb-3">
                <span className="text-primary font-semibold">Hey,</span> I just wanna say thanks for being a good experience. 
                You're the best ex I got — not the most evil or someone I wronged, you're just the most 
                experience that taught me more.
              </p>
              <p className="text-foreground leading-relaxed mb-3">
                In case you're wondering, I don't have feelings anymore, and I hope both of us end up 
                with someone better in the future.
              </p>
              <p className="text-foreground leading-relaxed mb-3">
                I wish you all the best despite everything, whether we talked or didn't...
              </p>
              <p className="text-secondary font-semibold text-lg mt-4">
                Stay cool, stay safe, and stay happy. ✨
              </p>
            </div>
            <div className="text-center text-xs text-muted-foreground italic">
              — Fedi
            </div>
          </div>
        ),
      };

    case "exit":
    case "quit":
      return {
        type: "output",
        content: `You can't leave me that easily! 😄
Try 'clear' to start fresh, or just keep exploring! 🚀`,
      };

    default:
      return {
        type: "error",
        content: `Command not found: ${mainCommand}
Type 'help' for available commands.`,
      };
  }
};
