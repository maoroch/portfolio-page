"use client";

import { useState, useEffect } from "react";
import { getProjects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";

const categories = [
  { value: "all", label: "All" },
  { value: "crm", label: "CRM" },
  { value: "ai", label: "AI" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "fullstack", label: "Full Stack" },
];

export default function PortfolioPage() {
  const allProjects = getProjects();
  const [active, setActive] = useState("all");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filtered = active === "all" ? allProjects : allProjects.filter((p) => p.category === active);

  return (
    <div style={{ paddingTop: 70 }}>
      <section style={{ 
        maxWidth: 1100, 
        margin: "0 auto", 
        padding: isMobile ? "60px 16px 32px" : "80px 24px 48px",
      }}>
        <p style={{ 
          fontFamily: "'DM Mono', monospace", 
          fontSize: 11, 
          letterSpacing: "0.12em", 
          textTransform: "uppercase", 
          color: "var(--text-muted)", 
          marginBottom: 16 
        }}>
          Work
        </p>
        <h1 style={{ 
          fontFamily: "'DM Serif Display', serif", 
          fontSize: isMobile ? "clamp(28px, 6vw, 48px)" : "clamp(36px, 5vw, 60px)", 
          color: "var(--text)", 
          letterSpacing: "-0.02em", 
          marginBottom: 20,
          lineHeight: 1.1,
        }}>
          Portfolio
        </h1>
        <p style={{ 
          color: "var(--text-muted)", 
          fontSize: isMobile ? 14 : 16, 
          maxWidth: 480, 
          lineHeight: 1.7,
          marginBottom: 0,
        }}>
          Selected projects across CRM systems, AI products, frontend architecture, and full-stack applications.
        </p>
      </section>

      {/* Filter - horizontally scrollable on mobile */}
      <div style={{ 
        borderTop: "1px solid var(--border)", 
        borderBottom: "1px solid var(--border)", 
        backgroundColor: "var(--bg-2)",
        position: "sticky",
        top: 70,
        zIndex: 50,
      }}>
        <div style={{ 
          maxWidth: 1100, 
          margin: "0 auto", 
          padding: isMobile ? "0 16px" : "0 24px", 
          display: "flex", 
          gap: 0, 
          overflowX: "auto",
          overflowY: "hidden",
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
        }}>
          {categories.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setActive(value)}
              style={{
                padding: isMobile ? "12px 14px" : "14px 20px",
                background: "none",
                border: "none",
                borderBottom: active === value ? "2px solid var(--accent)" : "2px solid transparent",
                color: active === value ? "var(--accent)" : "var(--text-muted)",
                fontFamily: "'DM Mono', monospace",
                fontSize: isMobile ? 10 : 11,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "color 0.2s",
                whiteSpace: "nowrap",
                fontWeight: active === value ? 600 : 400,
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <section style={{ 
        maxWidth: 1100, 
        margin: "0 auto", 
        padding: isMobile ? "32px 16px 60px" : "48px 24px 80px",
      }}>
        {filtered.length === 0 ? (
          <p style={{ 
            color: "var(--text-muted)", 
            padding: isMobile ? "40px 0" : "40px 0",
            textAlign: "center",
          }}>
            No projects in this category yet.
          </p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {filtered.map((project) => <ProjectCard key={project.id} project={project} isMobile={isMobile} />)}
          </div>
        )}
      </section>
    </div>
  );
}
