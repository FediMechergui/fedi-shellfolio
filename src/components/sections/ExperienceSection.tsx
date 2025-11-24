import { Briefcase, MapPin } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  current?: boolean;
}

const experiences: Experience[] = [
  {
    title: "Head of Web Development Department",
    company: "Medtour",
    period: "11/2025 - Present",
    location: "Tunis, Tunisia",
    current: true,
    description: [
      "Own all web development roadmaps for Medtour's travel products",
      "Coordinate cross-team delivery for every digital project and task",
      "Build standards that keep design, frontend, and backend squads aligned",
    ],
  },
  {
    title: "Lead Developer / SCRUM Master",
    company: "Omnilink",
    period: "07/2024 - Present",
    location: "Ariana, Tunisia",
    current: true,
    description: [
      "System Designer & Backend Developer for core products",
      "Mentored 10+ interns across various projects",
      "Led 5+ projects with full SCRUM cycle implementation",
      "Wrote CDC (Cahier des Charges) and distributed tasks",
      "Architected microservices backend with Redis caching and hybrid database",
    ],
  },
  {
    title: "Formateur / Teacher",
    company: "Format Bac (centre de formation)",
    period: "08/2025 - 09/2025",
    location: "Tunis, Tunisia",
    description: [
      "Teaching Python Intermediary Level",
      "Full Stack Web Development courses",
      "Age group: 13-17 years old",
      "Curriculum development and hands-on projects",
    ],
  },
  {
    title: "Formateur / Bootcamp Leader",
    company: "TRY-IT Club ISIMA",
    period: "10/2024 - 01/2025",
    location: "Mahdia, Tunisia",
    description: [
      "Full Stack Web Development Crash Courses",
      "Club events and university workshops",
      "Practical hands-on training sessions",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-primary mb-4">
        💼 Professional Experience
      </h2>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-primary">
            {/* Timeline dot */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-2 border-background"></div>

            <div className="space-y-2">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-foreground flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-secondary" />
                    {exp.title}
                  </h3>
                  <p className="text-sm text-secondary">{exp.company}</p>
                </div>
                <div className="flex flex-col items-start md:items-end">
                  <span className="text-sm text-muted-foreground">
                    {exp.period}
                  </span>
                  {exp.current && (
                    <span className="text-xs text-primary font-semibold">
                      Current Position
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin className="w-3 h-3" />
                {exp.location}
              </div>

              <ul className="list-disc list-inside space-y-1 text-sm text-foreground">
                {exp.description.map((item, i) => (
                  <li key={i} className="ml-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
