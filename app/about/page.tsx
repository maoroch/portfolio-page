import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About",
  description: "Full Stack Developer focused on CRM systems, AI products, and performance.",
};

const timeline = [
  { year: "2020", event: "Started freelancing — first React projects, UI work, small business sites." },
  { year: "2021", event: "First serious full-stack project: internal tool for a logistics company. Fell in love with system design." },
  { year: "2022", event: "Dug deep into Node.js, PostgreSQL, API architecture. Built first CRM from scratch." },
  { year: "2023", event: "Frontend performance became an obsession. Studied SSR/ISR, caching strategies, Core Web Vitals. First hackathon win." },
  { year: "2024", event: "Integrated LLMs into production products. Built AI content pipelines, structured output systems, agentic workflows." },
  { year: "Now", event: "Focused on product architecture: systems that scale, teams that ship, products that last." },
];

const techStack = {
  "Frontend": ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  "Backend": ["Node.js", "Express", "Fastify", "PostgreSQL", "Redis", "Prisma"],
  "AI / LLM": ["OpenAI API", "LangChain", "Vercel AI SDK", "Structured outputs"],
  "Infrastructure": ["Vercel", "Railway", "Docker", "Nginx", "GitHub Actions"],
};

export default function AboutPage() {
  return (
    <div style={{ paddingTop: 60 }}>
      {/* Hero */}
      <section className={styles.heroSection}>
        <div>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: 16,
            }}
          >
            About
          </p>
          <h1 className={styles.heroTitle}>
            I build things
            <br />
            <span style={{ color: "var(--text-muted)", fontStyle: "italic" }}>that work.</span>
          </h1>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: 16,
              lineHeight: 1.8,
              marginBottom: 20,
            }}
          >
            I&apos;m a Full Stack Developer with 4+ years of experience building web products — from small tools to enterprise CRM systems. My focus is on the intersection of product thinking and engineering craft.
          </p>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: 16,
              lineHeight: 1.8,
              marginBottom: 20,
            }}
          >
            I care about performance, clean data models, thoughtful API design, and user interfaces that feel obvious. I don&apos;t build features — I build systems.
          </p>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: 16,
              lineHeight: 1.8,
            }}
          >
            Currently exploring the product side of AI: how LLMs can be integrated into real workflows without adding complexity for users.
          </p>
        </div>

        {/* Right column: current focus */}
        <div className={styles.sideboxesContainer}>
          <div className={styles.sidebox}>
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 10,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: 16,
              }}
            >
              Current Focus
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                "Product architecture for early-stage startups",
                "CRM & automation systems",
                "LLM integration in production products",
                "Frontend performance engineering",
                "Technical writing & knowledge sharing",
              ].map((item) => (
                <li key={item} className={styles.sideboxItem}>
                  <span className={styles.sideboxIcon}>→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.sidebox}>
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 10,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: 16,
              }}
            >
              Long-term Goals
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                "Build and ship a SaaS product",
                "Become a known voice in the tech community",
                "Work with a high-calibre product team",
                "Lead architecture on a meaningful platform",
              ].map((item) => (
                <li key={item} className={styles.sideboxItem}>
                  <span className={styles.sideboxIcon}>→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={styles.timelineSection}>
        <div className={styles.timelineContainer}>
          <p className={styles.timelineLabel}>
            Journey
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {timeline.map(({ year, event }, i) => (
              <div key={year} className={styles.timelineItem}>
                <span className={`${styles.timelineYear} ${year === "Now" ? styles.timelineYearNow : styles.timelineYearPast}`}>
                  {year}
                </span>
                <p className={styles.timelineEvent}>
                  {event}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className={styles.techStackSection}>
        <p className={styles.techStackLabel}>
          Tech Stack
        </p>
        <div className={styles.techStackGrid}>
          {Object.entries(techStack).map(([category, techs]) => (
            <div key={category} className={styles.techStackItem}>
              <p className={styles.techStackItemLabel}>
                {category}
              </p>
              <div className={styles.techStackItemTech}>
                {techs.map((tech) => (
                  <span key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className={styles.ctaSection}>
        <p className={styles.ctaText}>
          Want to work together or just talk shop?
        </p>
        <Link
          href="/contact"
          className={styles.ctaButton}
        >
          Get in Touch <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
