import { useState } from "react";
import { ExternalLink, Lock, Github } from "lucide-react";

interface Project {
  title: string;
  period: string;
  tech: string[];
  description: string;
  role?: string;
  collaboration?: string;
  status: "live" | "completed" | "private";
  link?: string;
}

const projects: Project[] = [
  {
    title: "Omnilink CI/CD Backend Infrastructure",
    period: "03/2025 - 10/2025",
    tech: [
      "Microservices",
      "Node.js",
      "Python",
      "Redis",
      "MySQL",
      "Firebase",
      "DevSecOps",
    ],
    description:
      "Enterprise backend with DevSecOps pipeline for Omnilink's product suite. Architected and developed using Microservice Architecture with hybrid database utilizing MySQL and Firebase mix, implementing Redis caching for optimal performance.",
    role: "Lead Developer & System Architect",
    collaboration: "Team of 10+ interns, SCRUM Master role",
    status: "private",
  },
  {
    title: "Medianet Opportunities Platform",
    period: "05/2025 - 06/2025",
    tech: ["ReactJS", "Excel/CSV Export", "Data Visualization", "PowerBI"],
    description:
      "A ReactJS based interface for uploading files and financial opportunities, assigning them to company members. Features Excel/CSV export capabilities and multiple chart visualizations inspired by PowerBI.",
    status: "live",
    link: "https://github.com/FediMechergui",
  },
  {
    title: "Doctor Appointment System",
    period: "02/2023 - 05/2023",
    tech: ["MongoDB", "Express", "React", "Node.js", "MERN Stack"],
    description:
      "Appointment management system with patient and appointment CRUD operations. Developed as License Final Project (PFE) demonstrating full-stack capabilities.",
    status: "completed",
    link: "https://github.com/FediMechergui",
  },
];

export const ProjectsSection = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "live":
        return <span className="text-primary">🟢 Live</span>;
      case "completed":
        return <span className="text-secondary">✅ Completed</span>;
      case "private":
        return <span className="text-accent">🔒 Private</span>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-primary mb-4">
        💼 Featured Projects
      </h2>

      {projects.map((project, index) => (
        <div
          key={index}
          className="border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
        >
          <div
            className="p-4 cursor-pointer hover:bg-muted/30"
            onClick={() =>
              setExpandedProject(expandedProject === index ? null : index)
            }
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  {project.title}
                  {project.status === "private" && (
                    <Lock className="w-4 h-4 text-accent" />
                  )}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {project.period}
                </p>
              </div>
              <div>{getStatusIcon(project.status)}</div>
            </div>

            {expandedProject === index && (
              <div className="mt-4 space-y-3 animate-fade-in-up">
                <p className="text-sm text-foreground leading-relaxed">
                  {project.description}
                </p>

                {project.role && (
                  <div className="text-sm">
                    <span className="text-secondary font-semibold">Role:</span>{" "}
                    <span className="text-foreground">{project.role}</span>
                  </div>
                )}

                {project.collaboration && (
                  <div className="text-sm">
                    <span className="text-secondary font-semibold">
                      Collaboration:
                    </span>{" "}
                    <span className="text-foreground">
                      {project.collaboration}
                    </span>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 border border-primary/30 rounded text-xs text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors"
                  >
                    {project.status === "live" ? (
                      <>
                        <ExternalLink className="w-4 h-4" />
                        Visit Project
                      </>
                    ) : (
                      <>
                        <Github className="w-4 h-4" />
                        View on GitHub
                      </>
                    )}
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      ))}

      <div className="mt-6 p-4 border border-secondary/30 rounded bg-secondary/5">
        <p className="text-sm text-foreground">
          💡 <span className="text-secondary font-semibold">Note:</span> Click
          on each project to expand and view full details. More projects
          available on{" "}
          <a
            href="https://github.com/FediMechergui"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </div>
  );
};
