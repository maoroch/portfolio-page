import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "80px 24px 64px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "start",
        }}
      >
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
          <h1
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(36px, 5vw, 60px)",
              color: "var(--text)",
              letterSpacing: "-0.02em",
              marginBottom: 28,
              lineHeight: 1.1,
            }}
          >
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
        <div style={{ paddingTop: 8 }}>
          <div
            style={{
              border: "1px solid var(--border)",
              padding: "28px",
              marginBottom: 2,
              backgroundColor: "var(--bg-2)",
            }}
          >
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
                <li
                  key={item}
                  style={{
                    display: "flex",
                    gap: 10,
                    alignItems: "flex-start",
                    color: "var(--text-muted)",
                    fontSize: 13,
                    lineHeight: 1.6,
                  }}
                >
                  <span style={{ color: "var(--accent)", marginTop: 2, flexShrink: 0 }}>→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{
              border: "1px solid var(--border)",
              padding: "28px",
              backgroundColor: "var(--bg-2)",
            }}
          >
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
                <li
                  key={item}
                  style={{
                    display: "flex",
                    gap: 10,
                    alignItems: "flex-start",
                    color: "var(--text-muted)",
                    fontSize: 13,
                    lineHeight: 1.6,
                  }}
                >
                  <span style={{ color: "var(--accent)", marginTop: 2, flexShrink: 0 }}>→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        style={{
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          backgroundColor: "var(--bg-2)",
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: 48,
            }}
          >
            Journey
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {timeline.map(({ year, event }, i) => (
              <div
                key={year}
                style={{
                  display: "grid",
                  gridTemplateColumns: "100px 1fr",
                  gap: 32,
                  paddingBottom: i < timeline.length - 1 ? 28 : 0,
                  marginBottom: i < timeline.length - 1 ? 28 : 0,
                  borderBottom: i < timeline.length - 1 ? "1px solid var(--border)" : "none",
                  alignItems: "start",
                }}
              >
                <span
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: 22,
                    color: year === "Now" ? "var(--accent)" : "var(--text-subtle)",
                    lineHeight: 1.3,
                  }}
                >
                  {year}
                </span>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: 14,
                    lineHeight: 1.75,
                  }}
                >
                  {event}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 11,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            marginBottom: 48,
          }}
        >
          Tech Stack
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 2,
            backgroundColor: "var(--border)",
            border: "1px solid var(--border)",
          }}
        >
          {Object.entries(techStack).map(([category, techs]) => (
            <div key={category} style={{ backgroundColor: "var(--bg)", padding: "28px 24px" }}>
              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: 16,
                }}
              >
                {category}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {techs.map((tech) => (
                  <span key={tech} style={{ color: "var(--text-muted)", fontSize: 13 }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div
        style={{
          borderTop: "1px solid var(--border)",
          padding: "48px 24px",
          textAlign: "center",
        }}
      >
        <p style={{ color: "var(--text-muted)", fontSize: 15, marginBottom: 24 }}>
          Want to work together or just talk shop?
        </p>
        <Link
          href="/contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "12px 28px",
            backgroundColor: "var(--accent)",
            color: "var(--bg)",
            textDecoration: "none",
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            borderRadius: 2,
          }}
        >
          Get in Touch <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
