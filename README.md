# 🖥️ Fedi Shell-Folio - Interactive Terminal Portfolio

A modern, interactive portfolio website featuring a terminal-style interface that showcases professional experience, projects, and skills in a unique and engaging way.

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://your-portfolio-url.com)
[![Built with React](https://img.shields.io/badge/React-18.3.1-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-blue)](https://tailwindcss.com/)

---

## ✨ Features

### 🎮 Interactive Terminal Interface
- **Command-Line Navigation**: Navigate through different sections using terminal commands
- **Boot Sequence Animation**: Authentic terminal boot experience on page load
- **Auto-Complete Support**: Smart command suggestions as you type
- **Command History**: Access previous commands using arrow keys
- **Real-time Command Processing**: Instant feedback and section rendering

### 📋 Available Commands
```bash
help       # Show all available commands
about      # Learn about Fedi Mechergui
skills     # View technical skills and expertise
projects   # Browse featured projects portfolio
experience # View professional work experience
education  # See education & certifications
contact    # Get in touch via contact form
clear      # Clear the terminal screen
```

### 👤 About Section
- **Professional Profile**: Full-stack developer and DevSecOps specialist
- **Profile Image**: Professional photo with glowing border animation
- **Bio & Introduction**: Detailed background and expertise
- **Professional Summary**: Key skills and specializations
- **Location & Availability**: Current status and freelance availability

### 💻 Skills Section
Organized into categorized skill cards:
- **Frontend Development**: React, Next.js, Vue.js, Angular, Flutter, TailwindCSS
- **Backend Development**: Node.js, NestJS, Spring Boot, Django, Flask, .NET
- **Database Technologies**: MongoDB, MySQL, PostgreSQL, Redis, Firebase
- **Programming Languages**: Java, C, C++, C#, Python, JavaScript, Embedded C
- **DevOps & Cloud**: Docker, Nginx, Apache, Azure, GitHub Actions, Jenkins, Ansible, Grafana, Prometheus
- **Security & Tools**: SonarQube, OWASP ZAP, Trivy, Wireshark, Nmap, Metasploit
- **AI & Data Science**: PyTorch, TensorFlow, Scikit-learn, Pandas, NumPy

Each skill is displayed with relevant icons and organized into expandable categories.

### 🚀 Projects Section
Showcase of featured projects with:
- **Expandable Project Cards**: Click to view detailed information
- **Project Status Indicators**: 
  - 🟢 Live - Currently running and accessible
  - 🔒 Private - Confidential/proprietary projects
  - ✅ Completed - Finished projects
- **Technology Stack Tags**: Visual tags for each technology used
- **Project Details**: Description, role, collaboration info, and tech stack
- **Live Demo Links**: Direct links to live projects and GitHub repositories
- **Tech-Specific Icons**: Automatic icon assignment based on technology

Featured projects include:
- Modern web applications (React, Next.js)
- AI-powered platforms (Smart Firewall, SmartHire)
- Mobile applications (Flutter, React Native)
- Backend infrastructure (Microservices, CI/CD)
- Security & encryption projects
- Full-stack MERN applications

### 💼 Experience Section
Professional work history featuring:
- **Company Timeline**: Chronological work experience
- **Role & Responsibilities**: Detailed job descriptions
- **Technologies Used**: Tech stack for each position
- **Key Achievements**: Notable accomplishments and contributions
- **Duration**: Clear timeline for each role

### 🎓 Education Section
Academic background and certifications:
- **Degree Information**: University, major, graduation year
- **Certifications**: Professional certifications and courses
- **Academic Projects**: Notable academic work
- **Skills Acquired**: Learning outcomes and expertise gained

### 📬 Contact Section
Interactive contact form with:
- **Contact Form**: 
  - Name field
  - Email field
  - Subject line
  - Message textarea
  - Real-time validation
  - Submit button with loading state
- **EmailJS Integration**: Automatic email delivery to your inbox
- **Success/Error Feedback**: Clear status messages after submission
- **Social Media Links**: Direct links to:
  - GitHub
  - LinkedIn
  - Email
  - WhatsApp
  - Discord
  - Instagram
  - Twitter
- **Availability Status**: Freelance and collaboration availability notice
- **Professional HTML Emails**: Beautiful formatted emails with contact details

### 🎨 Design Features
- **Dark Theme**: Modern dark terminal aesthetic
- **Gradient Accents**: Purple-blue gradient highlights
- **Responsive Design**: Fully mobile-responsive layout
- **Smooth Animations**: Fade-in effects and transitions
- **Glowing Effects**: Animated glow effects on interactive elements
- **Custom Scrollbars**: Styled scrollbars matching the theme
- **Typography**: Fira Code monospace font for authentic terminal feel

### ⚡ Performance Optimizations
- **Fast Loading**: Optimized assets and code splitting
- **Lazy Loading**: Sections load on-demand
- **Efficient Rendering**: React optimization techniques
- **Minimal Dependencies**: Lean bundle size
- **SEO Optimized**: Meta tags and semantic HTML

---

## 🛠️ Technologies Used

### Frontend Framework
- **React 18.3.1**: Modern React with hooks and concurrent features
- **TypeScript 5.8.3**: Type-safe development
- **Vite 5.4.19**: Lightning-fast build tool and dev server

### UI & Styling
- **Tailwind CSS 3.4.17**: Utility-first CSS framework
- **shadcn-ui**: High-quality React component library
- **Radix UI**: Accessible component primitives
- **Lucide React**: Beautiful icon library
- **CSS Animations**: Custom keyframe animations

### Form Handling
- **EmailJS**: Email delivery service for contact form
- **React Hook Form**: Form state management
- **Zod**: Schema validation

### Routing & Navigation
- **React Router DOM**: Client-side routing

### Development Tools
- **ESLint**: Code linting and quality checks
- **TypeScript ESLint**: TypeScript-specific linting
- **PostCSS**: CSS processing
- **Autoprefixer**: Automatic vendor prefixing

---

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ or Bun 1.1+
- Git

### Clone the Repository
```bash
git clone https://github.com/FediMechergui/fedi-shell-folio.git
cd fedi-shell-folio
```

### Install Dependencies

Using Bun (recommended):
```bash
bun install
```

Using npm:
```bash
npm install
```

### Environment Configuration

1. Copy the environment template:
```bash
cp .env.template .env
```

2. Configure EmailJS (see `EMAILJS_SETUP.md` for detailed instructions):
```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

### Run Development Server

Using Bun:
```bash
bun run dev
```

Using npm:
```bash
npm run dev
```

Visit `http://localhost:8080` to view the application.

### Build for Production

```bash
bun run build
# or
npm run build
```

### Preview Production Build

```bash
bun run preview
# or
npm run preview
```

---

## 📧 Email Template Setup

The contact form uses EmailJS to send emails. A professional HTML email template is included:

1. See `email-template.html` for the complete HTML template
2. Read `EMAIL_TEMPLATE_INSTRUCTIONS.md` for setup instructions
3. Follow `EMAILJS_SETUP.md` for EmailJS configuration

The email template features:
- Modern gradient design
- Organized contact information card
- Formatted message display
- One-click reply button
- Mobile-responsive layout
- Compatible with all major email clients

---

## 📁 Project Structure

```
fedi-shell-folio/
├── public/
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── profile.png
│   │   ├── portfolio.png
│   │   └── terminal.png
│   ├── components/
│   │   ├── sections/
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── EducationSection.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   └── SkillsSection.tsx
│   │   ├── ui/
│   │   │   └── [shadcn components]
│   │   ├── BootSequence.tsx
│   │   ├── Terminal.tsx
│   │   ├── TerminalInput.tsx
│   │   └── TerminalOutput.tsx
│   ├── lib/
│   │   ├── commands.tsx
│   │   └── utils.ts
│   ├── pages/
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx
│   └── main.tsx
├── .env.template
├── email-template.html
├── EMAILJS_SETUP.md
├── EMAIL_TEMPLATE_INSTRUCTIONS.md
└── README.md
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

### Deploy to GitHub Pages

1. Update `vite.config.ts` with base path
2. Build the project
3. Deploy the `dist` folder to GitHub Pages

---

## 🎯 Customization

### Update Personal Information

1. **About Section**: Edit `src/components/sections/AboutSection.tsx`
2. **Skills**: Modify skill arrays in `src/components/sections/SkillsSection.tsx`
3. **Projects**: Update project list in `src/components/sections/ProjectsSection.tsx`
4. **Experience**: Edit work history in `src/components/sections/ExperienceSection.tsx`
5. **Education**: Modify education data in `src/components/sections/EducationSection.tsx`
6. **Contact Links**: Update social links in `src/components/sections/ContactSection.tsx`

### Change Theme Colors

Edit `tailwind.config.ts` to customize colors:
```typescript
theme: {
  extend: {
    colors: {
      primary: "your-color",
      secondary: "your-color",
      // ... more colors
    }
  }
}
```

### Add New Commands

Edit `src/lib/commands.tsx` to add custom terminal commands.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Fedi Mechergui**
- GitHub: [@FediMechergui](https://github.com/FediMechergui)
- LinkedIn: [fedi-mechergui](https://linkedin.com/in/fedi-mechergui-579054255)
- Email: fedimechergui03@gmail.com

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

## ⭐ Show Your Support

If you like this project, please give it a ⭐ on GitHub!

---

## 📝 Additional Documentation

- [EmailJS Setup Guide](EMAILJS_SETUP.md)
- [Email Template Instructions](EMAIL_TEMPLATE_INSTRUCTIONS.md)

---

**Built with ❤️ by Fedi Mechergui**
