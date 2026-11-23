import profileImg from "@/assets/profile.png";
import projects from "@/data/projects.json";

export const AboutSection = () => (
  <div className="space-y-4">
    <div className="flex flex-col md:flex-row gap-6 items-start">
      <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-lg overflow-hidden border-2 border-primary shadow-lg">
        <img src={profileImg} alt="Fedi Mechergui" className="w-full h-full object-cover" width="160" height="160" />
      </div>
      <div className="flex-1 space-y-3">
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-glow">Fedi Mechergui</h2>
        <p className="text-lg text-secondary">Full-stack developer · Backend, mobile & business software</p>
        <p className="text-sm text-muted-foreground">Tunisia · Master’s in networking · IoT & embedded systems background</p>
      </div>
    </div>
    <div className="border-l-2 border-primary pl-4 space-y-3">
      <p className="leading-relaxed">I build web applications, APIs and tools that help teams manage their work. My experience includes ERP and travel operations at MedTours, backend development and intern mentoring at Omnilink, and independent products for education, reading and business management.</p>
      <p className="leading-relaxed">Recent public work includes <span className="text-secondary">Zenlo</span> for car-rental operations, <span className="text-secondary">NetForge</span> for network simulation, and <span className="text-secondary">MLibrary</span> for multilingual reading on web and Android. I also explore local computer vision with THE VAULT and offline mobile experiences with FitCoach and Mémora.</p>
      <p className="leading-relaxed">Available for freelance development, API integrations and product maintenance. Share your workflow, users and constraints, and we can define a practical first release.</p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
      {[
        [String(projects.length), "Public repositories"],
        ["Web + mobile", "Product development"],
        ["APIs & ERP", "Business workflows"],
        ["Tunisia", "Remote collaboration"],
      ].map(([value, label]) => <div key={label} className="bg-muted p-3 rounded border border-border"><div className="text-lg font-bold text-primary">{value}</div><div className="text-xs text-muted-foreground mt-1">{label}</div></div>)}
    </div>
    <a href="https://workwebsite-fm.netlify.app" target="_blank" rel="noopener noreferrer" className="inline-block text-sm text-secondary hover:underline">Explore my work & services →</a>
  </div>
);
