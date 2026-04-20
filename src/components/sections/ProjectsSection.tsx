import { useState } from "react";
import {
  ExternalLink,
  Lock,
  Github,
  Database,
  Code2,
  Cloud,
  Shield,
  MessageSquare,
  Smartphone,
  Image,
  BrainCircuit,
  Palette,
  Key,
  Network,
  Globe,
  FolderOpen,
  FolderLock,
  Users,
} from "lucide-react";
import { trackProjectClick, trackProjectExpand } from "@/lib/analytics";

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

interface ProjectCategory {
  path: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  projects: Project[];
}

const getTechIcon = (tech: string) => {
  const techLower = tech.toLowerCase();
  if (
    techLower.includes("react") ||
    techLower.includes("node") ||
    techLower.includes("express") ||
    techLower.includes("nest") ||
    techLower.includes(".net") ||
    techLower.includes("spring") ||
    techLower.includes("flutter") ||
    techLower.includes("django") ||
    techLower.includes("flask")
  )
    return <Code2 className="w-3 h-3" />;
  if (
    techLower.includes("mongodb") ||
    techLower.includes("mysql") ||
    techLower.includes("sql") ||
    techLower.includes("firebase") ||
    techLower.includes("redis")
  )
    return <Database className="w-3 h-3" />;
  if (
    techLower.includes("docker") ||
    techLower.includes("azure") ||
    techLower.includes("vercel")
  )
    return <Cloud className="w-3 h-3" />;
  if (
    techLower.includes("security") ||
    techLower.includes("devsecops") ||
    techLower.includes("firewall") ||
    techLower.includes("encryption") ||
    techLower.includes("rsa") ||
    techLower.includes("aes")
  )
    return <Shield className="w-3 h-3" />;
  if (
    techLower.includes("websocket") ||
    techLower.includes("chat") ||
    techLower.includes("realtime")
  )
    return <MessageSquare className="w-3 h-3" />;
  if (techLower.includes("mobile") || techLower.includes("android"))
    return <Smartphone className="w-3 h-3" />;
  if (
    techLower.includes("pytorch") ||
    techLower.includes("opencv") ||
    techLower.includes("ocr") ||
    techLower.includes("image")
  )
    return <Image className="w-3 h-3" />;
  if (techLower.includes("ai") || techLower.includes("mern"))
    return <BrainCircuit className="w-3 h-3" />;
  if (techLower.includes("art") || techLower.includes("gallery"))
    return <Palette className="w-3 h-3" />;
  if (techLower.includes("e2e") || techLower.includes("crypto"))
    return <Key className="w-3 h-3" />;
  if (techLower.includes("network") || techLower.includes("linux"))
    return <Network className="w-3 h-3" />;
  if (
    techLower.includes("three") ||
    techLower.includes("cesium") ||
    techLower.includes("maplibre") ||
    techLower.includes("geomatics")
  )
    return <Globe className="w-3 h-3" />;
  if (techLower.includes("web") || techLower.includes("landing"))
    return <Globe className="w-3 h-3" />;
  return <Code2 className="w-3 h-3" />;
};

const categories: ProjectCategory[] = [
  {
    path: "~/work/",
    label: "Enterprise & Client Projects",
    description: "drwxr-x---  restricted  — production systems & client work",
    icon: <FolderLock className="w-4 h-4 text-accent" />,
    projects: [
      {
        title: "MedTour ERP - Travel Agency Management System",
        period: "2025",
        tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
        description:
          "Internal management system and public storefront for MedTours, a Tunisian travel agency specializing in Omra pilgrimages, organized voyages, and hotel bookings across 6 regional agencies. Built with Next.js 14 (App Router), MongoDB, and Tailwind CSS. Features agency-wide operations management, booking workflows, and a customer-facing storefront.",
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
        title: "Medianet Opportunities Platform",
        period: "05/2025 - 06/2025",
        tech: ["ReactJS", "Excel/CSV Export", "Data Visualization", "PowerBI"],
        description:
          "A ReactJS based interface for uploading files and financial opportunities, assigning them to company members. Features Excel/CSV export capabilities and multiple chart visualizations inspired by PowerBI.",
        status: "private",
      },
      {
        title: "AI Powered Smart Firewall",
        period: "06/2025 - 07/2025",
        tech: ["Docker", "Linux", "AI", "Cybersecurity", "Network Security"],
        description:
          "Docker-based Linux Firewall with AI model for threat analysis. Currently in development with ready MVP that predicts, analyzes and prevents network threats using trained dataset of latest cybersecurity threats. Features web interface for visualization and preventive actions.",
        status: "private",
      },
    ],
  },
  {
    path: "~/projects/",
    label: "Personal & Adventure Builds",
    description: "drwxr-xr-x  public     — hobby projects & experiments",
    icon: <FolderOpen className="w-4 h-4 text-primary" />,
    projects: [
      {
        title: "Quantum Banking System with Spec-Driven Development",
        period: "2025",
        tech: [
          "Qiskit",
          "TypeScript",
          "Node.js",
          "Spec-Driven Dev",
          "Prompt Engineering",
        ],
        description:
          "Experimental banking core that pairs quantum algorithms with classical services. Built using a prompt/spec workflow that keeps quantum circuit design, orchestration layers, and classical APIs in sync so complex flows can be iterated like regular software features.",
        status: "completed",
        link: "https://github.com/FediMechergui/quantum_bank",
      },
      {
        title: "GeoVista - 3D Geomatics Visualization Platform",
        period: "2025",
        tech: [
          "Next.js",
          "TypeScript",
          "Three.js",
          "CesiumJS",
          "MapLibre GL",
          "Zustand",
          "Tailwind CSS",
        ],
        description:
          "Professional 3D geomatics visualization platform for exploring terrain, buildings, geology and bathymetry in an interactive split-pane 2D/3D web app. Features SRTM elevation data with hypsometric coloring, 3D OSM buildings, subsurface geological layers via Macrostrat API, CesiumJS globe view, elevation profiles, geodesic measurements, and multi-format export (PNG/CSV/GeoJSON). Optimized with Web Workers, progressive tile loading, and 3-tier LOD.",
        status: "live",
        link: "https://geovista-eta.vercel.app",
      },
      {
        title: "PayrollHub - Tunisian Payroll & HR Management Platform",
        period: "2025",
        tech: [
          "React",
          "TypeScript",
          "Node.js",
          "Express",
          "MongoDB",
          "Vite",
          "Tailwind CSS",
        ],
        description:
          "Comprehensive full-stack payroll and HR management platform built for Tunisian enterprises with full compliance to 2025-2026 regulations (CNSS, IRPP, SMIG). Features automated payroll engine with accurate deductions, employee management with CDI/CDD/SIVP/Karama contracts, leave management with approval workflows, PDF payslip and document generation, self-service employee portal, RBAC with JWT auth, bank transfer orders (ordre de virement), and analytics dashboards.",
        status: "live",
        link: "https://tunisian-payroll-landing.vercel.app",
      },
      {
        title: "BeyGO - Tunisian Beylical History AR Explorer",
        period: "2025",
        tech: [
          "React Native",
          "Expo",
          "Node.js",
          "Express",
          "MongoDB",
          "Zustand",
          "Mobile",
        ],
        description:
          "Pokemon Go-style mobile app for exploring Tunisian Beylical history through augmented reality and interactive museum experiences. Features geolocation-based museum discovery, AR puzzle collection with 9 pieces per Bey, gamification with points and leaderboards, historical data on all 27 Beys from the Muradid and Husaynid dynasties (1593-1957), and a rewards system with discounts and merchandise redemption.",
        status: "completed",
        link: "https://github.com/FediMechergui/BeyGO",
      },
      {
        title: "Immobilier RAG Pipeline - AI Real Estate Assistant",
        period: "2025",
        tech: [
          "Python",
          "FastAPI",
          "React",
          "TypeScript",
          "PostgreSQL",
          "Docker",
          "AI",
        ],
        description:
          "Production-ready RAG (Retrieval-Augmented Generation) pipeline specialized for the French real estate domain. Upload PDF documents and ask questions in French, English, or Arabic with accurate AI-generated answers and source citations. Powered by Ollama (Llama 3.1/Mistral), ChromaDB vector store, HuggingFace embeddings, and PostgreSQL with pgvector. Features web search from trusted real estate sources, custom training examples, streaming responses, and full Docker Compose deployment.",
        status: "completed",
        link: "https://github.com/FediMechergui/rag-immobilier",
      },
      {
        title: "Qutrob - Arabic Roots Educational Game",
        period: "2025",
        tech: ["React Native", "Expo", "TypeScript", "SQLite", "Mobile"],
        description:
          "Educational mobile game for learning Arabic trilateral roots (جذور ثلاثية). Two game modes: identify valid roots from letter permutations with poetry examples, and Qutrab's Triangle matching words with meanings based on vowel marks (tashkeel). Features 33,500+ roots database, 580+ educational facts, 132 unlockable knowledge cards, RTL-optimized parchment UI, streak tracking, and persistent progress with SQLite.",
        status: "completed",
        link: "https://github.com/FediMechergui/Qutrob",
      },
      {
        title: "Dahdiha Petshop ERP - Pet Store Management System",
        period: "2025",
        tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui"],
        description:
          "Full-featured ERP system for pet shop management (Dahdiha Petshop). Includes dashboard with sales analytics and category charts, product catalog, stock & warehouse management with low-stock and expiry alerts, purchasing and supplier workflows, sales and order tracking, client management, logistics and delivery, lot-based traceability (traçabilité), accounting module, and configurable settings. Built with French-language UI for the Tunisian market.",
        status: "live",
        link: "https://dahdiha-petshop-erp.vercel.app",
      },
      {
        title: "MS Consulting – Docteur Projet",
        period: "2025",
        tech: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "shadcn/ui",
          "React Router",
        ],
        description:
          "Business consulting platform for Tunisian entrepreneurs, micro-enterprises and self-employed professionals. Features comprehensive financial advisory services, pricing plans, interactive cost calculator for business registration and taxes, client testimonials, and detailed FAQ. Includes market insights for the Tunisian entrepreneurial ecosystem with statistics and legal guidance.",
        status: "live",
        link: "https://conseil-futur-tpe.vercel.app",
      },
      {
        title: "GeoChic - Géomatique & Formation Tunisie",
        period: "2025",
        tech: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Vite"],
        description:
          "Professional website for GeoChic, a Tunisian geomatics consulting and training agency. Features comprehensive GIS services showcase, training catalog, team profiles, and contact forms. Includes modern responsive design with light/dark mode, SEO optimization, and smooth animations for enhanced user experience.",
        status: "live",
        link: "https://geo-wala-chic.vercel.app",
      },
      {
        title: "Mood Map Cinema",
        period: "2025",
        tech: ["ReactJS", "IMDB API", "Dynamic UI", "Day/Night Cycle"],
        description:
          "Interactive movie recommendation platform that adapts its interface based on day/night cycle. Users input their preferences and mood, and the app suggests personalized movie recommendations from IMDB's extensive database.",
        status: "live",
        link: "https://mood-map-cinema.vercel.app",
      },
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
        title: "Doctor Appointment System",
        period: "02/2023 - 05/2023",
        tech: ["MongoDB", "Express", "React", "Node.js", "MERN Stack"],
        description:
          "Appointment management system with patient and appointment CRUD operations. Developed as License Final Project (PFE) demonstrating full-stack capabilities.",
        status: "private",
      },
    ],
  },
  {
    path: "~/portfolios/",
    label: "Portfolios Crafted for Friends",
    description: "drwxr-xr-x  public     — custom-built developer portfolios",
    icon: <Users className="w-4 h-4 text-secondary" />,
    projects: [
      {
        title: "Douaa Zammit - IoT & Embedded Systems Portfolio",
        period: "2025",
        tech: [
          "React",
          "TypeScript",
          "Vite",
          "Tailwind CSS",
          "EmailJS",
          "shadcn/ui",
        ],
        description:
          "Interactive portfolio for IoT engineer with circuit-board aesthetic and dynamic mood-based theming. Features 5 customizable theme presets, bilingual support (EN/FR), animated particle background with neon effects, project showcase of IoT/embedded systems work, and EmailJS-powered contact form with custom circuit-themed email templates. Includes professional experience at Tunisie Télécom and IEEE WIE leadership.",
        status: "live",
        link: "https://circuit-douaa-unfold.vercel.app",
      },
      {
        title: "Raghed Saidani - Full Stack Developer Portfolio",
        period: "2025",
        tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui"],
        description:
          "Professional portfolio for a Full Stack Developer and Software Engineering student at the Faculty of Sciences of Bizerte. Features animated hero section, skills showcase with progress bars, education and work experience timeline, featured projects display, multilingual profile (Arabic, French, English, German), resume download, and a contact form. Clean modern design with smooth transitions.",
        status: "live",
        link: "https://raghed-s-digital-canvas.vercel.app",
      },
    ],
  },
];

export const ProjectsSection = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

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

  let globalIndex = 0;

  return (
    <div className="space-y-6">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-primary mb-2">
          💼 Featured Projects
        </h2>
        <pre className="text-xs text-muted-foreground font-mono">
          {`fedi@portfolio:~$ ls -la projects/
total ${categories.reduce((acc, c) => acc + c.projects.length, 0)}`}
        </pre>
      </div>

      {categories.map((category) => (
        <div key={category.path} className="space-y-3">
          <div className="border border-border/50 rounded-lg p-3 bg-muted/10">
            <div className="flex items-center gap-2 mb-1">
              {category.icon}
              <span className="font-bold text-foreground font-mono text-sm">
                {category.path}
              </span>
              <span className="text-muted-foreground text-xs">
                — {category.label}
              </span>
            </div>
            <pre className="text-xs text-muted-foreground/70 font-mono ml-6">
              {category.description} ({category.projects.length} items)
            </pre>
          </div>

          {category.projects.map((project) => {
            const key = `${category.path}${globalIndex}`;
            const currentIndex = globalIndex++;
            return (
              <div
                key={key}
                className="border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors ml-4"
              >
                <div
                  className="p-4 cursor-pointer hover:bg-muted/30"
                  onClick={() => {
                    const newKey = expandedProject === key ? null : key;
                    setExpandedProject(newKey);
                    if (newKey === key) {
                      trackProjectExpand(project.title);
                    }
                  }}
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

                  {expandedProject === key && (
                    <div className="mt-4 space-y-3 animate-fade-in-up">
                      <p className="text-sm text-foreground leading-relaxed">
                        {project.description}
                      </p>

                      {project.role && (
                        <div className="text-sm">
                          <span className="text-secondary font-semibold">
                            Role:
                          </span>{" "}
                          <span className="text-foreground">
                            {project.role}
                          </span>
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
                          onClick={() =>
                            trackProjectClick(project.title, project.link!)
                          }
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
            );
          })}
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
