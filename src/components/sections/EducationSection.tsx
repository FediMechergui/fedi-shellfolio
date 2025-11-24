import { GraduationCap, Award } from "lucide-react";

interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
}

interface Certificate {
  name: string;
  level: string;
  icon: string;
}

const education: Education[] = [
  {
    degree: "Master's Degree in Networking Expertise & Cyber Security",
    institution: "ISI Mahdia",
    period: "09/2023 - 10/2025",
    location: "Mahdia, Tunisia",
  },
  {
    degree: "License Degree in Embedded Systems & IoT",
    institution: "ISSAT Mateur",
    period: "09/2020 - 05/2023",
    location: "Mateur, Tunisia",
  },
  {
    degree: "Bachelor Degree in Experimental Sciences",
    institution: "Ali Douaji Marsa Saada Highschool",
    period: "07/2020",
    location: "La Marsa, Tunisia",
  },
];

const certificates: Certificate[] = [
  {
    name: "System Design & Architectures",
    level: "Level 2",
    icon: "🏗️",
  },
  {
    name: "CISCO Networks",
    level: "CCNA 1",
    icon: "🌐",
  },
  {
    name: "EF SET English Certificate",
    level: "C2",
    icon: "🇬🇧",
  },
];

export const EducationSection = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
          <GraduationCap className="w-5 h-5" />
          Education
        </h2>

        <div className="space-y-4">
          {education.map((edu, index) => (
            <div
              key={index}
              className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors"
            >
              <h3 className="font-semibold text-foreground">{edu.degree}</h3>
              <p className="text-sm text-secondary mt-1">{edu.institution}</p>
              <div className="flex flex-col md:flex-row md:justify-between mt-2 text-sm text-muted-foreground">
                <span>{edu.period}</span>
                <span>{edu.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
          <Award className="w-5 h-5" />
          Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="p-4 border border-secondary/30 rounded-lg bg-secondary/5 hover:bg-secondary/10 transition-colors"
            >
              <div className="text-2xl mb-2">{cert.icon}</div>
              <h4 className="font-semibold text-foreground text-sm">
                {cert.name}
              </h4>
              <p className="text-xs text-accent mt-1 font-semibold">
                {cert.level}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 border border-accent/30 rounded-lg bg-accent/5">
        <h3 className="text-sm font-semibold text-accent mb-2">
          🎓 Academic Excellence
        </h3>
        <p className="text-sm text-foreground">
          Specialized in networking, cybersecurity, and embedded systems with a
          strong focus on practical implementation and DevSecOps practices.
        </p>
      </div>
    </div>
  );
};
