import ReactGA from "react-ga4";

// Initialize GA4
export const initGA = () => {
  ReactGA.initialize("G-YD9SES7N8Q");
};

// Track page views
export const trackPageView = (path: string) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

// Track terminal commands
export const trackCommand = (command: string) => {
  ReactGA.event({
    category: "Terminal",
    action: "Command Executed",
    label: command,
  });
};

// Track theme changes
export const trackThemeChange = (theme: string) => {
  ReactGA.event({
    category: "UI",
    action: "Theme Changed",
    label: theme,
  });
};

// Track resume downloads
export const trackResumeDownload = () => {
  ReactGA.event({
    category: "Download",
    action: "Resume Downloaded",
    label: "Fedi-Mechergui-Resume.pdf",
  });
};

// Track contact form submissions
export const trackContactFormSubmit = (success: boolean) => {
  ReactGA.event({
    category: "Contact",
    action: success ? "Form Submitted Successfully" : "Form Submission Failed",
    label: "Contact Form",
  });
};

// Track project link clicks
export const trackProjectClick = (projectName: string, url: string) => {
  ReactGA.event({
    category: "Projects",
    action: "Project Link Clicked",
    label: `${projectName} - ${url}`,
  });
};

// Track social link clicks
export const trackSocialClick = (platform: string, url: string) => {
  ReactGA.event({
    category: "Social",
    action: "Social Link Clicked",
    label: `${platform} - ${url}`,
  });
};

// Track easter egg discoveries
export const trackEasterEgg = (easterEgg: string) => {
  ReactGA.event({
    category: "Easter Egg",
    action: "Easter Egg Discovered",
    label: easterEgg,
  });
};

// Track section expansions in projects
export const trackProjectExpand = (projectName: string) => {
  ReactGA.event({
    category: "Projects",
    action: "Project Expanded",
    label: projectName,
  });
};

// Track command history usage
export const trackCommandHistory = (direction: "up" | "down") => {
  ReactGA.event({
    category: "Terminal",
    action: "Command History Navigation",
    label: direction,
  });
};

// Track session start
export const trackSessionStart = () => {
  ReactGA.event({
    category: "Session",
    action: "Session Started",
    label: new Date().toISOString(),
  });
};

// Track session end (called on page unload)
export const trackSessionEnd = (duration: number) => {
  ReactGA.event({
    category: "Session",
    action: "Session Ended",
    label: `Duration: ${Math.round(duration / 1000)}s`,
    value: Math.round(duration / 1000), // duration in seconds
  });
};

// Track time spent on page
export const trackTimeOnPage = (seconds: number) => {
  ReactGA.event({
    category: "Engagement",
    action: "Time Spent",
    label: `${seconds} seconds`,
    value: seconds,
  });
};
