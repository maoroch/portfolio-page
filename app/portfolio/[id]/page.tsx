import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, GitFork } from "lucide-react";
import { getProjectById, getProjects } from "@/lib/data";

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return {};
  return { title: project.title, description: project.subtitle };
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) notFound();

  const p = project as any;
  const rawSections = [
    { label: "Problem", content: p.problem },
    { label: "Solution", content: p.solution },
    { label: "Architecture", content: p.architecture },
    { label: "Result", content: p.result },
    { label: "Video demo", content: p.video ?? null, type: p.video ? "media" : undefined },
  ];

  const sections = rawSections.filter((section) => {
    if (!section.content) return false;
    if (section.label === "Video demo" && section.type !== "media") return false;
    if (section.label === "GitHub" && section.type !== "link") return false;
    return true;
  });

  return (
    <div style={{ paddingTop: 70 }}>
      <style>{`
        .project-grid-container {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 280px);
          gap: clamp(40px, 8vw, 64px);
          align-items: start;
          max-width: 1100px;
          margin: 0 auto;
          padding: clamp(40px, 8vw, 64px) 16px 60px;
        }
        .project-sidebar {
          position: sticky;
          top: clamp(90px, 10vw, 120px);
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        /* На мобильных: сайдбар идёт ПЕРВЫМ (order), затем контент */
        @media (max-width: 768px) {
          .project-grid-container {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .project-sidebar {
            position: static;
            top: auto;
            order: -1;
          }
          .project-header-inner {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          .project-title {
            font-size: clamp(24px, 7vw, 40px) !important;
          }
          .project-actions {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .project-actions a {
            width: 100%;
            justify-content: center;
          }
        }
        @media (max-width: 480px) {
          .project-grid-container {
            padding-left: 12px;
            padding-right: 12px;
          }
        }
      `}</style>

      {/* Header */}
      <section
        style={{
          borderBottom: "1px solid var(--border)",
          backgroundColor: "var(--bg-2)",
          padding: "clamp(48px, 10vw, 64px) 0 32px",
        }}
      >
        <div
          className="project-header-inner"
          style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px" }}
        >
          <Link
            href="/portfolio"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              color: "var(--text-muted)",
              textDecoration: "none",
              fontSize: 12,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              fontFamily: "'DM Mono', monospace",
              marginBottom: 32,
            }}
          >
            <ArrowLeft size={13} /> Back to Portfolio
          </Link>

          <div
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              marginBottom: 20,
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 10,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--accent)",
                border: "1px solid var(--accent-dim)",
                backgroundColor: "var(--accent-bg)",
                padding: "3px 10px",
                borderRadius: 2,
              }}
            >
              {project.category}
            </span>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 11,
                color: "var(--text-subtle)",
              }}
            >
              {project.year}
            </span>
          </div>

          <h1
            className="project-title"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(28px, 6vw, 56px)",
              color: "var(--text)",
              letterSpacing: "-0.02em",
              marginBottom: 16,
              maxWidth: 720,
              lineHeight: 1.1,
            }}
          >
            {project.title}
          </h1>

          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "clamp(14px, 4vw, 17px)",
              maxWidth: 560,
              lineHeight: 1.7,
              marginBottom: 28,
            }}
          >
            {project.subtitle}
          </p>

          <div
            className="project-actions"
            style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
          >
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                  padding: "10px 18px",
                  backgroundColor: "var(--accent)",
                  color: "var(--bg)",
                  textDecoration: "none",
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  borderRadius: 2,
                  minHeight: 44,
                }}
              >
                Live Demo <ExternalLink size={12} />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                  padding: "10px 18px",
                  border: "1px solid var(--border-light)",
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  fontSize: 12,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  borderRadius: 2,
                  minHeight: 44,
                }}
              >
                GitHub <GitFork size={12} />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Content grid */}
      <div className="project-grid-container">
        {/* Main content */}
        <div>
          {sections.map(({ label, content, type }, i) => (
            <div
              key={label}
              style={{
                paddingBottom: "clamp(32px, 5vw, 40px)",
                marginBottom: "clamp(32px, 5vw, 40px)",
                borderBottom:
                  i < sections.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: 12,
                }}
              >
                {label}
              </p>

              {type === "media" ? (
                <video
                  controls
                  style={{ width: "100%", borderRadius: 8 }}
                >
                  <source src={content as string} type="video/mp4" />
                </video>
              ) : type === "link" ? (
                <a
                  href={content as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    color: "var(--accent)",
                  }}
                >
                  <GitFork size={14} /> {content}
                </a>
              ) : (
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "clamp(13px, 3vw, 15px)",
                    lineHeight: 1.8,
                  }}
                  dangerouslySetInnerHTML={{ __html: content as string }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="project-sidebar">
          {/* Stack */}
          <div
            style={{
              border: "1px solid var(--border)",
              padding: "clamp(16px, 4vw, 24px)",
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
                marginBottom: 12,
              }}
            >
              Tech Stack
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 10,
                    color: "var(--text-muted)",
                    border: "1px solid var(--border-light)",
                    padding: "4px 8px",
                    borderRadius: 2,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div
            style={{
              border: "1px solid var(--border)",
              padding: "clamp(16px, 4vw, 24px)",
              backgroundColor: "var(--bg-2)",
              marginTop: 2,
            }}
          >
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 10,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: 12,
              }}
            >
              Tags
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 11,
                    color: "var(--accent)",
                    border: "1px solid var(--accent-dim)",
                    backgroundColor: "var(--accent-bg)",
                    padding: "4px 10px",
                    borderRadius: 2,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Back link */}
      <div
        style={{
          borderTop: "1px solid var(--border)",
          padding: "clamp(24px, 5vw, 32px) 16px",
          textAlign: "center",
        }}
      >
        <Link
          href="/portfolio"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            color: "var(--text-muted)",
            textDecoration: "none",
            fontSize: 12,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            fontFamily: "'DM Mono', monospace",
          }}
        >
          <ArrowLeft size={13} /> All Projects
        </Link>
      </div>
    </div>
  );
}