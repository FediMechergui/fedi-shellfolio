import profileImg from "@/assets/profile.png";

export const AboutSection = () => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden border-2 border-primary shadow-lg animate-glow-pulse">
          <img
            src={profileImg}
            alt="Fedi Mechergui"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-glow">
            Fedi Mechergui
          </h2>
          <p className="text-lg text-secondary">
            Full Stack Developer & DevSecOps Specialist
          </p>
          <p className="text-sm text-muted-foreground">
            📍 Tunisia 🇹🇳 | 🎓 Master's in Networking & Cyber Security
          </p>
        </div>
      </div>

      <div className="border-l-2 border-primary pl-4 space-y-2">
        <p className="text-foreground leading-relaxed">
          I am a highly motivated professional with a deep-seated interest in{" "}
          <span className="text-secondary">Full Stack Web Development</span>,{" "}
          <span className="text-secondary">System Design & Architectures</span>,
          and with a specialized expertise in{" "}
          <span className="text-secondary">DevSecOps</span>,{" "}
          <span className="text-secondary">Networking</span> and{" "}
          <span className="text-secondary">IoT Development</span>.
        </p>
        
        <p className="text-foreground leading-relaxed">
          As a key member and the principal developer of the pioneering{" "}
          <span className="text-accent">Omnilink</span> startup, I infuse
          creativity and technical proficiency into each project I engage in.
        </p>
        
        <p className="text-foreground leading-relaxed">
          Driven by a continuous desire for innovation and an unquenchable
          thirst for knowledge, I consistently aim to expand the horizons of
          technology and provide meaningful solutions.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <div className="bg-muted p-3 rounded border border-border">
          <div className="text-2xl font-bold text-primary">10+</div>
          <div className="text-xs text-muted-foreground">Mentored Interns</div>
        </div>
        <div className="bg-muted p-3 rounded border border-border">
          <div className="text-2xl font-bold text-secondary">5+</div>
          <div className="text-xs text-muted-foreground">Projects Led</div>
        </div>
        <div className="bg-muted p-3 rounded border border-border">
          <div className="text-2xl font-bold text-accent">3+</div>
          <div className="text-xs text-muted-foreground">Years Experience</div>
        </div>
        <div className="bg-muted p-3 rounded border border-border">
          <div className="text-2xl font-bold text-primary">C2</div>
          <div className="text-xs text-muted-foreground">English Level</div>
        </div>
      </div>
    </div>
  );
};
