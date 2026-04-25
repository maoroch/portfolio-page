"use client";

import Link from "next/link";
import { Clock, ArrowUpRight } from "lucide-react";
import { Article } from "@/types";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function ArticleCard({ article }: { article: Article }) {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const date = new Date(article.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  // На мобильных: сначала изображение, потом текст.
  // На десктопе: слева текст, справа изображение.
  return (
    <Link
      href={`/articles/${article.slug}`}
      style={{ textDecoration: "none", display: "block" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <article
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "stretch",
          backgroundColor: hovered ? "var(--bg-3)" : "var(--bg-2)",
          transition: "background-color 0.2s",
          cursor: "pointer",
          minHeight: isMobile ? "auto" : 280,
        }}
      >
        {isMobile ? (
          // Мобильная версия: сначала изображение, потом текст
          <>
            {/* Изображение сверху */}
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                backgroundColor: "#E8DFD5",
                minHeight: 200,
                width: "100%",
              }}
            >
              {article.image && (
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                    transform: hovered ? "scale(1.03)" : "scale(1)",
                  }}
                />
              )}
            </div>

            {/* Текстовый блок снизу */}
            <div
              style={{
                padding: "28px 20px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 16,
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
                    padding: "2px 8px",
                    borderRadius: 2,
                  }}
                >
                  {article.category}
                </span>
                <ArrowUpRight
                  size={14}
                  color={hovered ? "var(--accent)" : "var(--text-subtle)"}
                  style={{ transition: "color 0.2s", flexShrink: 0 }}
                />
              </div>

              <h3
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: 20,
                  color: "var(--text)",
                  marginBottom: 12,
                  lineHeight: 1.3,
                  letterSpacing: "-0.01em",
                  flex: 1,
                }}
              >
                {article.title}
              </h3>

              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: 13,
                  lineHeight: 1.65,
                  marginBottom: 24,
                }}
              >
                {article.excerpt}
              </p>

              <div style={{ display: "flex", gap: 16, alignItems: "center", marginTop: "auto" }}>
                <span style={{ color: "var(--text-muted)", fontSize: 12 }}>{date}</span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    color: "var(--text-subtle)",
                    fontSize: 12,
                  }}
                >
                  <Clock size={11} />
                  {article.readingTime} min read
                </span>
              </div>

              <div style={{ display: "flex", gap: 6, marginTop: 16, flexWrap: "wrap" }}>
                {article.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 10,
                      color: "var(--text-subtle)",
                      border: "1px solid var(--border)",
                      padding: "1px 6px",
                      borderRadius: 2,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </>
        ) : (
          // Десктопная версия: текст слева (1/3), изображение справа (2/3)
          <>
            {/* Текст — левая колонка */}
            <div
              style={{
                flex: 1,
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 16,
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
                    padding: "2px 8px",
                    borderRadius: 2,
                  }}
                >
                  {article.category}
                </span>
                <ArrowUpRight
                  size={14}
                  color={hovered ? "var(--accent)" : "var(--text-subtle)"}
                  style={{ transition: "color 0.2s", flexShrink: 0 }}
                />
              </div>

              <h3
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: 20,
                  color: "var(--text)",
                  marginBottom: 12,
                  lineHeight: 1.3,
                  letterSpacing: "-0.01em",
                  flex: 1,
                }}
              >
                {article.title}
              </h3>

              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: 13,
                  lineHeight: 1.65,
                  marginBottom: 24,
                }}
              >
                {article.excerpt}
              </p>

              <div style={{ display: "flex", gap: 16, alignItems: "center", marginTop: "auto" }}>
                <span style={{ color: "var(--text-muted)", fontSize: 12 }}>{date}</span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    color: "var(--text-subtle)",
                    fontSize: 12,
                  }}
                >
                  <Clock size={11} />
                  {article.readingTime} min read
                </span>
              </div>

              <div style={{ display: "flex", gap: 6, marginTop: 16, flexWrap: "wrap" }}>
                {article.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 10,
                      color: "var(--text-subtle)",
                      border: "1px solid var(--border)",
                      padding: "1px 6px",
                      borderRadius: 2,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Изображение — правая колонка */}
            <div
              style={{
                flex: 2,
                position: "relative",
                overflow: "hidden",
                backgroundColor: "#E8DFD5",
              }}
            >
              {article.image && (
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="66vw"
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                    transform: hovered ? "scale(1.03)" : "scale(1)",
                  }}
                />
              )}
            </div>
          </>
        )}
      </article>
    </Link>
  );
}