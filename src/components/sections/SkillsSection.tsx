import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

interface SkillCategory {
  name: string;
  skills: string[];
  icon: string;
}

const skillCategories: SkillCategory[] = [
  {
    name: "Core Web & Backend",
    icon: "🌐",
    skills: [
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "HTML5",
      "CSS3",
      "Python",
      "FastAPI",
      "Django",
      "Flask",
      "NestJS",
      ".NET",
      "SpringBoot",
      "MySQL",
      "MongoDB",
      "Firebase",
      "Redis",
    ],
  },
  {
    name: "Programming Languages",
    icon: "💻",
    skills: ["Java", "C", "C++", "C#", "Python", "JavaScript", "Embedded C"],
  },
  {
    name: "DevOps & Cloud",
    icon: "☁️",
    skills: [
      "Docker",
      "Nginx",
      "Apache",
      "Azure",
      "GitHub Actions",
      "Jenkins",
      "Ansible",
      "Grafana",
      "Prometheus",
    ],
  },
  {
    name: "Security & Tools",
    icon: "🔒",
    skills: [
      "SonarQube",
      "OWASP ZAP",
      "Trivy",
      "Wireshark",
      "Nmap",
      "Metasploit",
      "OpenSSL",
      "Bash Scripting",
    ],
  },
  {
    name: "AI & Data Science",
    icon: "🤖",
    skills: ["TensorFlow", "PyTorch", "Jupyter", "Ollama", "AI APIs"],
  },
  {
    name: "IoT & Embedded",
    icon: "📡",
    skills: [
      "Arduino IDE",
      "ESP32",
      "Raspberry Pi",
      "Thinger.io",
      "Tinkercad",
    ],
  },
  {
    name: "Frontend Frameworks",
    icon: "🎨",
    skills: ["ReactJS", "NextJS", "Redux", "TailwindCSS", "Webpack"],
  },
  {
    name: "Mobile Development",
    icon: "📱",
    skills: ["Android Studio", "Kotlin", "Java", "Flutter"],
  },
  {
    name: "Certifications",
    icon: "🏆",
    skills: [
      "CISCO CCNA 1",
      "System Design Level 2",
      "EF SET English C2",
    ],
  },
];

export const SkillsSection = () => {
  const [expandedCategories, setExpandedCategories] = useState<number[]>([0]);

  const toggleCategory = (index: number) => {
    setExpandedCategories((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold text-primary mb-4">
        📚 Technical Skills & Expertise
      </h2>

      {skillCategories.map((category, index) => (
        <div key={index} className="border border-border rounded">
          <button
            onClick={() => toggleCategory(index)}
            className="w-full flex items-center gap-2 p-3 hover:bg-muted transition-colors text-left"
          >
            {expandedCategories.includes(index) ? (
              <ChevronDown className="w-4 h-4 text-secondary" />
            ) : (
              <ChevronRight className="w-4 h-4 text-secondary" />
            )}
            <span className="text-lg">{category.icon}</span>
            <span className="font-semibold text-foreground">
              {category.name}
            </span>
            <span className="ml-auto text-xs text-muted-foreground">
              {category.skills.length} skills
            </span>
          </button>

          {expandedCategories.includes(index) && (
            <div className="p-4 border-t border-border bg-muted/30">
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-background border border-primary/30 rounded text-sm text-foreground hover:bg-primary/10 hover:border-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}

      <div className="mt-6 p-4 border border-secondary/30 rounded bg-secondary/5">
        <h3 className="text-sm font-semibold text-secondary mb-2">
          🌍 Languages
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
          <div>
            <span className="text-foreground">Arabic:</span>{" "}
            <span className="text-muted-foreground">Native</span>
          </div>
          <div>
            <span className="text-foreground">English:</span>{" "}
            <span className="text-accent">C2</span>
          </div>
          <div>
            <span className="text-foreground">French:</span>{" "}
            <span className="text-muted-foreground">B1</span>
          </div>
          <div>
            <span className="text-foreground">German:</span>{" "}
            <span className="text-muted-foreground">A1</span>
          </div>
        </div>
      </div>
    </div>
  );
};
