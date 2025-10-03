import { useState } from "react";
import { ExternalLink, Lock, Github, Database, Code2, Cloud, Shield, MessageSquare, Smartphone, Image, BrainCircuit, Palette, Key, Network, Globe } from "lucide-react";

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

const getTechIcon = (tech: string) => {
  const techLower = tech.toLowerCase();
  if (techLower.includes("react") || techLower.includes("node") || techLower.includes("express") || techLower.includes("nest") || techLower.includes(".net") || techLower.includes("spring") || techLower.includes("flutter") || techLower.includes("django") || techLower.includes("flask")) return <Code2 className="w-3 h-3" />;
  if (techLower.includes("mongodb") || techLower.includes("mysql") || techLower.includes("sql") || techLower.includes("firebase") || techLower.includes("redis")) return <Database className="w-3 h-3" />;
  if (techLower.includes("docker") || techLower.includes("azure") || techLower.includes("vercel")) return <Cloud className="w-3 h-3" />;
  if (techLower.includes("security") || techLower.includes("devsecops") || techLower.includes("firewall") || techLower.includes("encryption") || techLower.includes("rsa") || techLower.includes("aes")) return <Shield className="w-3 h-3" />;
  if (techLower.includes("websocket") || techLower.includes("chat") || techLower.includes("realtime")) return <MessageSquare className="w-3 h-3" />;
  if (techLower.includes("mobile") || techLower.includes("android")) return <Smartphone className="w-3 h-3" />;
  if (techLower.includes("pytorch") || techLower.includes("opencv") || techLower.includes("ocr") || techLower.includes("image")) return <Image className="w-3 h-3" />;
  if (techLower.includes("ai") || techLower.includes("mern")) return <BrainCircuit className="w-3 h-3" />;
  if (techLower.includes("art") || techLower.includes("gallery")) return <Palette className="w-3 h-3" />;
  if (techLower.includes("e2e") || techLower.includes("crypto")) return <Key className="w-3 h-3" />;
  if (techLower.includes("network") || techLower.includes("linux")) return <Network className="w-3 h-3" />;
  if (techLower.includes("web") || techLower.includes("landing")) return <Globe className="w-3 h-3" />;
  return <Code2 className="w-3 h-3" />;
};

const projects: Project[] = [
  {
    title: "Fondation Bien-Être",
    period: "2025",
    tech: ["ReactJS", "TailwindCSS", "Web Design"],
    description:
      "A modern, responsive website for Fondation Bien-Être, a wellness and healthcare foundation. Features elegant design, smooth animations, and comprehensive information architecture.",
    status: "live",
    link: "https://fondation-bien-etre-theta.vercel.app",
  },
  {
    title: "Manel's Metal Sanctuary",
    period: "2025",
    tech: ["ReactJS", "Music Player", "Interactive UI"],
    description:
      "A personalized music sanctuary featuring a beautiful, interactive interface for exploring metal music. Built as a special gift with custom playlists and mood-based navigation.",
    status: "live",
    link: "https://mood-metal-mindscape.vercel.app",
  },
  {
    title: "FWA Launchpad",
    period: "2025",
    tech: ["ReactJS", "Landing Page", "Web Design"],
    description:
      "Modern landing page for FWA startup, showcasing services and products with clean design and engaging user experience.",
    status: "live",
    link: "https://fwa-launchpad.vercel.app",
  },
  {
    title: "Omnilink Website",
    period: "2025",
    tech: ["ReactJS", "Corporate Site", "Web Design"],
    description:
      "Professional corporate website for Omnilink, featuring company information, services, and contact capabilities.",
    status: "live",
    link: "https://omnilink-website-try.vercel.app",
  },
  {
    title: "AI Powered Smart Firewall",
    period: "06/2025 - 07/2025",
    tech: ["Docker", "Linux", "AI", "Cybersecurity", "Network Security"],
    description:
      "Docker-based Linux Firewall with AI model for threat analysis. Currently in development with ready MVP that predicts, analyzes and prevents network threats using trained dataset of latest cybersecurity threats. Features web interface for visualization and preventive actions.",
    status: "private",
  },
  {
    title: "SmartHire - AI Hiring Platform",
    period: "06/2025 - 07/2025",
    tech: ["MongoDB", "Express", "React", "Node.js", "AI", "MERN Stack"],
    description:
      "MERN Stack hiring platform powered by AI. Features tailored job offers for candidates based on profile analysis, and AI-powered candidate ranking for HRs based on profiles and CVs.",
    status: "private",
  },
  {
    title: "STEG Lockout Note Mobile App",
    period: "04/2025 - 06/2025",
    tech: ["Flutter", "SpringBoot", "SQL Server", "Mobile"],
    description:
      "Mobile app for STEG to track lockout notes for electric failures. Features role-based access control, real-time communication, and security measures for smooth workflow between personnel.",
    status: "private",
  },
  {
    title: "AmalAPI - Image Recognition API",
    period: "05/2025 - 05/2025",
    tech: ["PyTorch", "OpenCV", "OCR", "Image Recognition"],
    description:
      "Free DIY API for image recognition utilizing PyTorch and OpenCV for OCR and basic image recognition. Provides accessible interface for image processing tasks.",
    status: "private",
  },
  {
    title: "Secure Messaging - E2E Encryption",
    period: "04/2025 - 04/2025",
    tech: ["WebSockets", "E2E Encryption", "RSA", "AES", "Realtime Chat"],
    description:
      "Practice project for WebSockets and end-to-end encryption. Features real-time chat communications with message encryption/decryption using RSA, AES algorithms. Users can view both encrypted and plain text versions.",
    status: "private",
  },
  {
    title: "ArtGallery - .NET Fullstack",
    period: "03/2025 - 04/2025",
    tech: [".NET", "C#", "SQL Server", "Web"],
    description:
      "Simple fullstack online art exhibition project built with .NET and SQL Server to explore and test new technology stack.",
    status: "private",
  },
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
    status: "private",
  },
  {
    title: "Doctor Appointment System",
    period: "02/2023 - 05/2023",
    tech: ["MongoDB", "Express", "React", "Node.js", "MERN Stack"],
    description:
      "Appointment management system with patient and appointment CRUD operations. Developed as License Final Project (PFE) demonstrating full-stack capabilities.",
    status: "private",
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
                      className="px-2 py-1 bg-primary/10 border border-primary/30 rounded text-xs text-primary flex items-center gap-1"
                    >
                      {getTechIcon(tech)}
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
