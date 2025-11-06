import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Github,
  Linkedin,
  MessageSquare,
  Phone,
  Send,
  Instagram,
  Twitter,
} from "lucide-react";
import { trackContactFormSubmit, trackSocialClick } from "@/lib/analytics";

const socialLinks = [
  {
    name: "GitHub",
    icon: <Github className="w-5 h-5" />,
    link: "https://github.com/FediMechergui",
    username: "@FediMechergui",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-5 h-5" />,
    link: "https://linkedin.com/in/fedi-mechergui-579054255",
    username: "fedi-mechergui",
  },
  {
    name: "Email",
    icon: <Mail className="w-5 h-5" />,
    link: "mailto:fedimechergui03@gmail.com",
    username: "fedimechergui03@gmail.com",
  },
  {
    name: "WhatsApp",
    icon: <Phone className="w-5 h-5" />,
    link: "https://wa.me/21620077179",
    username: "+216 20077179",
  },
  {
    name: "Discord",
    icon: <MessageSquare className="w-5 h-5" />,
    link: "#",
    username: "fedimechergui",
  },
  {
    name: "Instagram",
    icon: <Instagram className="w-5 h-5" />,
    link: "https://instagram.com/fedimechergui7",
    username: "@fedimechergui7",
  },
  {
    name: "Twitter",
    icon: <Twitter className="w-5 h-5" />,
    link: "https://twitter.com/fedi_mechergui",
    username: "@fedi_mechergui",
  },
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Check if EmailJS is configured
      if (!serviceId || !templateId || !publicKey) {
        console.warn(
          "EmailJS not configured. Add your credentials to .env file."
        );
        // Fallback to simulation for development
        setTimeout(() => {
          setIsSubmitting(false);
          setSubmitStatus("success");
          setFormData({ name: "", email: "", subject: "", message: "" });
          setTimeout(() => setSubmitStatus("idle"), 3000);
        }, 1500);
        return;
      }

      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: "Fedi Mechergui",
        },
        publicKey
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Track successful form submission
      trackContactFormSubmit(true);

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");

      // Track failed form submission
      trackContactFormSubmit(false);

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-primary mb-4">📬 Get In Touch</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Links */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-secondary mb-3">
            Connect with me
          </h3>
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackSocialClick(social.name, social.link)}
              className="flex items-center gap-3 p-3 border border-border rounded hover:border-primary hover:bg-primary/5 transition-all group"
            >
              <div className="text-primary group-hover:text-secondary transition-colors">
                {social.icon}
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-foreground">
                  {social.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {social.username}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-lg font-semibold text-secondary mb-3">
            Send me a message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="text-sm text-foreground block mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 bg-muted border border-border rounded text-foreground focus:border-primary focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="text-sm text-foreground block mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 bg-muted border border-border rounded text-foreground focus:border-primary focus:outline-none transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="text-sm text-foreground block mb-1">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-2 bg-muted border border-border rounded text-foreground focus:border-primary focus:outline-none transition-colors"
                placeholder="Freelance Project / Collaboration"
              />
            </div>

            <div>
              <label className="text-sm text-foreground block mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full p-2 bg-muted border border-border rounded text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 p-2 bg-primary text-primary-foreground rounded hover:bg-secondary hover:text-secondary-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>

            {submitStatus === "success" && (
              <div className="p-3 bg-primary/10 border border-primary rounded text-sm text-primary animate-fade-in">
                ✅ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="p-3 bg-red-500/10 border border-red-500 rounded text-sm text-red-500 animate-fade-in">
                ❌ Failed to send message. Please try again or contact me
                directly via email.
              </div>
            )}
          </form>
        </div>
      </div>

      <div className="mt-6 p-4 border border-accent/30 rounded bg-accent/5">
        <h3 className="text-sm font-semibold text-accent mb-2">
          💼 Available for Freelance Projects
        </h3>
        <p className="text-sm text-foreground">
          I'm open to freelance opportunities, consulting, and collaboration on
          exciting projects. Feel free to reach out via email or the contact
          form above!
        </p>
      </div>
    </div>
  );
};
