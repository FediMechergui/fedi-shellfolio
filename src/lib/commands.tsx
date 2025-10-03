import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";

interface CommandResult {
  type: "output" | "error";
  content: string | React.ReactNode;
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
  hack       - Hacker mode activated`,
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
        content: `Downloading resume...
Note: Resume download feature coming soon!
For now, please use the contact form to request my CV.`,
      };

    case "coffee":
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
      return {
        type: "output",
        content: `Wake up, Neo...
The Matrix has you...
Follow the white rabbit.

🐰 Knock, knock, Neo.

Type 'clear' to exit the matrix.`,
      };

    case "hack":
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

    default:
      return {
        type: "error",
        content: `Command not found: ${mainCommand}
Type 'help' for available commands.`,
      };
  }
};
