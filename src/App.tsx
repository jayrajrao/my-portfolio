import {
  ArrowUpRight,
  Circle,
  Download,
  Mail,
  Phone,
} from "lucide-react";
import { useEffect, useState } from "react";

/* ---------------------------------------------------------
   Content — edit here, not in the JSX below
--------------------------------------------------------- */

const PROFILE = {
  name: "Jayraj Rao",
  role: "Backend Engineer",
 
  tagline:
    "I build scalable REST APIs, authentication systems, and payment integrations with Node.js, Express, MongoDB, and AWS.",
  email: "jayrajrao15@gmail.com",
  phone: "+91 8269543853",
  github: "https://github.com/jayrajrao",
  linkedin: "https://linkedin.com/in/jayraj-rao-b452b4273",
  resumeHref: "/Jayraj-Rao-Resume.pdf",
};

const SKILLS = [
  { group: "Runtime", items: ["Node.js", "Express.js"] },
  { group: "Data", items: ["MongoDB"] },
  { group: "Cloud / DevOps", items: ["AWS (EC2, S3)", "Docker"] },
  { group: "Auth & Payments", items: ["JWT", "RBAC", "Razorpay", "Stripe"] },
];

const EXPERIENCE = [
  {
    role: "Software Development Engineer (Backend)",
    company: "TimeDiginitor Build Pvt. Ltd.",
    location: "Pune",
    period: "Sep 2024 — Apr 2025",
    points: [
      "Developed 15+ REST APIs for authentication, subscriptions, and business services",
      "Implemented JWT authentication with refresh tokens and RBAC authorization",
      "Integrated Razorpay payments with secure webhook handling",
      "Deployed Dockerized backend services on AWS EC2 with CI/CD pipelines",
      "Optimized MongoDB queries, improving API performance by ~40%",
    ],
  },
  {
    role: "MERN Stack Intern",
    company: "PN Infosys",
    location: "Gwalior",
    period: "Jan 2023 — Jan 2024",
    points: [
      "Built backend services using Node.js and MongoDB",
      "Developed REST APIs for e-commerce and real-time applications",
      "Integrated Stripe payments with secure checkout workflows",
      "Implemented real-time chat using Socket.io and JWT authentication",
    ],
  },
];

const PROJECTS = [
  {
    method: "GET",
    route: "/projects/blog-platform",
    name: "Blog Platform",
    description:
      "Full-stack blog app with authentication and content management.",
    status: "live",
    live: "https://blog-p1v6.onrender.com/",
    code: "https://github.com/jayrajrao",
  },
  {
    method: "GET",
    route: "/projects/ecommerce-frontend",
    name: "E-commerce Frontend",
    description: "MERN-based e-commerce UI with cart and product system.",
    status: "live",
    live: "https://ecommerce-frontend-kappa-navy.vercel.app/",
    code: "https://github.com/jayrajrao",
  },
  {
    method: "GET",
    route: "/projects/course-platform",
    name: "Course Platform",
    description: "Backend system for course management and user access.",
    status: "live",
    live: "https://portal-nsms.onrender.com",
    code: "https://github.com/jayrajrao",
  },
  {
    method: "POST",
    route: "/projects/ecommerce-api",
    name: "E-commerce Backend API",
    description:
      "Scalable REST API with authentication and Razorpay integration.",
    status: "live",
    live: "https://ecom-api-fjf3.onrender.com",
    code: "https://github.com/jayrajrao",
  },
  {
    method: "GET",
    route: "/projects/production-app",
    name: "Production Application",
    description:
      "Backend APIs, authentication, and core features for a live production system. Worked on performance improvements and real-world deployment.",
    status: "team project",
    tags: ["Node.js", "Express.js", "MongoDB"],
  },
];

/* ---------------------------------------------------------
   Small building blocks
--------------------------------------------------------- */
function GithubIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.94c.58.1.79-.25.79-.56v-2.15c-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}
function LinkedinIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45C23.2 24 24 23.22 24 22.25V1.75C24 .78 23.2 0 22.22 0Z" />
    </svg>
  );
}
function MethodBadge({ method }: { method: string }) {
  return <span className={`method method-${method.toLowerCase()}`}>{method}</span>;
}

function StatusDot({ label = "online" }: { label?: string }) {
  return (
    <span className="status-dot">
      <Circle size={7} fill="currentColor" strokeWidth={0} />
      {label}
    </span>
  );
}

function SectionHeading({
  method,
  route,
  title,
}: {
  method: string;
  route: string;
  title: string;
}) {
  return (
    <div className="section-heading">
      <MethodBadge method={method} />
      <span className="route">{route}</span>
      <span className="dim">→ 200 OK</span>
      <h2>{title}</h2>
    </div>
  );
}

/* ---------------------------------------------------------
   Hero — typed terminal line + JSON response card
--------------------------------------------------------- */

function Hero() {
  const command = "curl https://jayraj.dev/api/me";
  const [typed, setTyped] = useState("");
  const [showResponse, setShowResponse] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setTyped(command);
      setShowResponse(true);
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(command.slice(0, i));
      if (i >= command.length) {
        clearInterval(id);
        setTimeout(() => setShowResponse(true), 300);
      }
    }, 38);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <StatusDot label="open to work" />
          <h1>
            {PROFILE.name}
            <span className="cursor-blink">_</span>
          </h1>
          <p className="role">{PROFILE.role}</p>
          <p className="tagline">{PROFILE.tagline}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-solid">
              View projects
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="btn btn-outline"
            >
              <Mail size={15} /> Contact me
            </a>
            <a href={PROFILE.resumeHref} download className="btn btn-ghost">
              <Download size={15} /> Resume
            </a>
          </div>
        </div>

        <div className="hero-console" aria-hidden="true">
          <div className="console-chrome">
            <span className="dot dot-red" />
            <span className="dot dot-amber" />
            <span className="dot dot-green" />
            <span className="console-title">zsh — jayraj.dev</span>
          </div>
          <div className="console-body">
            <div className="console-line">
              <span className="prompt">$</span> {typed}
              {!showResponse && <span className="cursor-blink">▌</span>}
            </div>
            {showResponse && (
              <pre className="console-json">
{`{
  "name": "Jayraj Rao",
  "role": "Backend Engineer",
  "stack": ["Node.js", "Express", "MongoDB", "AWS"],
  "focus": ["REST APIs", "Auth", "Payments"],
  "status": "open_to_work"
}`}
              </pre>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------
   Sections
--------------------------------------------------------- */

function Skills() {
  return (
    <section className="section">
      <SectionHeading method="GET" route="/skills" title="Skills" />
      <div className="skills-grid">
        {SKILLS.map((group) => (
          <div className="skill-group" key={group.group}>
            <p className="skill-group-label">{group.group}</p>
            <div className="chip-row">
              {group.items.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section">
      <SectionHeading method="GET" route="/experience" title="Experience" />
      <div className="timeline">
        {EXPERIENCE.map((job) => (
          <div className="timeline-item" key={job.role + job.company}>
            <div className="timeline-marker" />
            <div className="timeline-card">
              <div className="timeline-head">
                <h3>{job.role}</h3>
                <span className="period">{job.period}</span>
              </div>
              <p className="company">
                {job.company} · {job.location}
              </p>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section" id="projects">
      <SectionHeading method="GET" route="/projects" title="Projects" />
      <div className="project-grid">
        {PROJECTS.map((p) => (
          <div className="project-card" key={p.route}>
            <div className="project-top">
              <MethodBadge method={p.method} />
              <span className="route small">{p.route}</span>
            </div>
            <h3>{p.name}</h3>
            <p className="project-desc">{p.description}</p>

            {p.tags && (
              <div className="chip-row">
                {p.tags.map((t) => (
                  <span className="chip chip-sm" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            )}

            <div className="project-foot">
              <span className={`status-pill status-${p.status.replace(/\s/g, "-")}`}>
                {p.status}
              </span>
              <div className="project-links">
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer">
                    Live <ArrowUpRight size={13} />
                  </a>
                )}
                {p.code && (
                  <a href={p.code} target="_blank" rel="noreferrer">
                    Code <ArrowUpRight size={13} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section">
      <SectionHeading method="POST" route="/contact" title="Contact" />
      <div className="contact-card">
        <p className="contact-intro">
          Open to backend developer roles and interesting opportunities.
        </p>
        <div className="contact-grid">
          <a href={`mailto:${PROFILE.email}`} className="contact-row">
            <Mail size={16} />
            {PROFILE.email}
          </a>
          <a href={`tel:${PROFILE.phone.replace(/\s/g, "")}`} className="contact-row">
            <Phone size={16} />
            {PROFILE.phone}
          </a>
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="contact-row">
  <GithubIcon size={16} />
  GitHub
</a>
<a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="contact-row">
  <LinkedinIcon size={16} />
  LinkedIn
</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} {PROFILE.name}</span>
      <span className="dim">status: 200 · uptime: always learning</span>
    </footer>
  );
}

/* ---------------------------------------------------------
   App
--------------------------------------------------------- */

export default function App() {
  return (
    <div className="page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@400;500;600;700&display=swap');

        :root {
          --bg: #0a0c10;
          --surface: #11141b;
          --surface-2: #161a23;
          --border: #232936;
          --text: #e7e9ee;
          --text-dim: #8a93a6;
          --accent: #4fd1c5;
          --accent-soft: rgba(79, 209, 197, 0.12);
          --amber: #f5a623;
          --green: #34d399;
        }

        * { box-sizing: border-box; }

        .page {
          background: var(--bg);
          color: var(--text);
          font-family: 'Inter', system-ui, sans-serif;
          min-height: 100vh;
          line-height: 1.5;
        }

        .page :focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 3px;
        }

        a { color: inherit; text-decoration: none; }

        .dim { color: var(--text-dim); }

        .cursor-blink {
          display: inline-block;
          animation: blink 1s steps(1) infinite;
          color: var(--accent);
        }
        @keyframes blink { 50% { opacity: 0; } }
        @media (prefers-reduced-motion: reduce) {
          .cursor-blink { animation: none; }
        }

        .status-dot {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12px;
          color: var(--green);
          background: rgba(52, 211, 153, 0.1);
          border: 1px solid rgba(52, 211, 153, 0.3);
          padding: 4px 10px;
          border-radius: 999px;
          margin-bottom: 20px;
        }

        /* Hero */
        .hero {
          padding: 96px 24px 64px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .hero-inner {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 56px;
          align-items: center;
        }
        @media (max-width: 860px) {
          .hero-inner { grid-template-columns: 1fr; gap: 40px; }
          .hero { padding-top: 64px; }
        }

        .hero-copy h1 {
          font-family: 'IBM Plex Mono', monospace;
          font-size: clamp(32px, 5vw, 48px);
          font-weight: 600;
          margin: 0 0 8px;
          letter-spacing: -0.02em;
        }
        .hero-copy .role {
          font-family: 'IBM Plex Mono', monospace;
          color: var(--accent);
          font-size: 16px;
          margin: 0 0 16px;
        }
        .hero-copy .tagline {
          color: var(--text-dim);
          font-size: 16px;
          max-width: 46ch;
          margin: 0 0 32px;
        }

        .hero-actions { display: flex; flex-wrap: wrap; gap: 12px; }
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          transition: transform 0.15s ease, border-color 0.15s ease, background 0.15s ease;
        }
        .btn:hover { transform: translateY(-1px); }
        .btn-solid { background: var(--accent); color: #06110f; }
        .btn-solid:hover { background: #6be0d5; }
        .btn-outline { border: 1px solid var(--border); }
        .btn-outline:hover { border-color: var(--accent); color: var(--accent); }
        .btn-ghost { color: var(--text-dim); }
        .btn-ghost:hover { color: var(--text); }

        /* Console card */
        .hero-console {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 60px -20px rgba(0,0,0,0.6);
        }
        .console-chrome {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          background: var(--surface-2);
          border-bottom: 1px solid var(--border);
        }
        .dot { width: 10px; height: 10px; border-radius: 50%; }
        .dot-red { background: #ff5f57; }
        .dot-amber { background: #febc2e; }
        .dot-green { background: #28c840; }
        .console-title {
          margin-left: 8px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12px;
          color: var(--text-dim);
        }
        .console-body {
          padding: 20px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 13px;
          min-height: 180px;
        }
        .console-line { color: var(--text); margin-bottom: 12px; }
        .prompt { color: var(--accent); }
        .console-json {
          margin: 0;
          color: var(--text-dim);
          white-space: pre-wrap;
          animation: fadeIn 0.4s ease;
        }
        .console-json { color: #b7c0d1; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }

        /* Sections */
        .section {
          max-width: 1100px;
          margin: 0 auto;
          padding: 56px 24px;
          border-top: 1px solid var(--border);
        }
        .section-heading {
          display: flex;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 32px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 13px;
        }
        .section-heading h2 {
          font-family: 'Inter', sans-serif;
          font-size: 22px;
          font-weight: 700;
          margin: 0 0 0 4px;
          width: 100%;
          order: 4;
          margin-top: 6px;
        }
        .route { color: var(--text); }
        .route.small { font-size: 12px; }

        .method {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          font-weight: 600;
          padding: 3px 8px;
          border-radius: 4px;
        }
        .method-get { background: rgba(79, 209, 197, 0.15); color: var(--accent); }
        .method-post { background: rgba(245, 166, 35, 0.15); color: var(--amber); }

        /* Skills */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px;
        }
        .skill-group-label {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12px;
          color: var(--text-dim);
          margin: 0 0 10px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .chip-row { display: flex; flex-wrap: wrap; gap: 8px; }
        .chip {
          background: var(--surface);
          border: 1px solid var(--border);
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 13px;
          transition: border-color 0.15s ease;
        }
        .chip:hover { border-color: var(--accent); }
        .chip-sm { font-size: 11px; padding: 4px 8px; }

        /* Timeline */
        .timeline { display: flex; flex-direction: column; gap: 28px; }
        .timeline-item { display: flex; gap: 18px; }
        .timeline-marker {
          width: 10px; height: 10px; border-radius: 50%;
          background: var(--accent);
          margin-top: 8px;
          flex-shrink: 0;
          box-shadow: 0 0 0 4px var(--accent-soft);
        }
        .timeline-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 20px 24px;
          flex: 1;
        }
        .timeline-head {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px;
        }
        .timeline-head h3 { margin: 0; font-size: 17px; }
        .period {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12px;
          color: var(--text-dim);
        }
        .company { color: var(--accent); font-size: 13px; margin: 4px 0 14px; }
        .timeline-card ul { margin: 0; padding-left: 18px; color: var(--text-dim); font-size: 14px; }
        .timeline-card li { margin-bottom: 6px; }

        /* Projects */
        .project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 18px;
        }
        .project-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 18px;
          display: flex;
          flex-direction: column;
          transition: border-color 0.15s ease, transform 0.15s ease;
        }
        .project-card:hover { border-color: var(--accent); transform: translateY(-2px); }
        .project-top { display: flex; align-items: center; gap: 8px; margin-bottom: 12px; }
        .project-card h3 { margin: 0 0 8px; font-size: 16px; }
        .project-desc { color: var(--text-dim); font-size: 13px; flex: 1; margin: 0 0 14px; }
        .project-foot {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid var(--border);
        }
        .status-pill {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          padding: 3px 8px;
          border-radius: 999px;
          border: 1px solid var(--border);
          color: var(--text-dim);
        }
        .status-live { color: var(--green); border-color: rgba(52, 211, 153, 0.3); }
        .project-links { display: flex; gap: 12px; }
        .project-links a {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 13px;
          color: var(--text-dim);
        }
        .project-links a:hover { color: var(--accent); }

        /* Contact */
        .contact-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 32px;
        }
        .contact-intro { color: var(--text-dim); margin: 0 0 24px; }
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 12px;
        }
        .contact-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 14px;
          border: 1px solid var(--border);
          border-radius: 8px;
          font-size: 14px;
          transition: border-color 0.15s ease, color 0.15s ease;
        }
        .contact-row:hover { border-color: var(--accent); color: var(--accent); }

        /* Footer */
        .footer {
          max-width: 1100px;
          margin: 0 auto;
          padding: 28px 24px 48px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12px;
          color: var(--text-dim);
        }
      `}</style>

      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
