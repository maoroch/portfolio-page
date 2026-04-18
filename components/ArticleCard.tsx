"use client";

import Link from "next/link";
import { Clock, ArrowUpRight } from "lucide-react";
import { Article } from "@/types";
import { useState } from "react";

export default function ArticleCard({ article }: { article: Article }) {
  const [hovered, setHovered] = useState(false);

  const date = new Date(article.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link
      href={`/articles/${article.slug}`}
      style={{ textDecoration: "none" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <article
        style={{
          backgroundColor: hovered ? "var(--bg-3)" : "var(--bg-2)",
          padding: "32px 28px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          transition: "background-color 0.2s",
          cursor: "pointer",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
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
          <ArrowUpRight size={14} color={hovered ? "var(--accent)" : "var(--text-subtle)"} style={{ transition: "color 0.2s", flexShrink: 0 }} />
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

        <p style={{ color: "var(--text-muted)", fontSize: 13, lineHeight: 1.65, marginBottom: 24 }}>
          {article.excerpt}
        </p>

        <div style={{ display: "flex", gap: 16, alignItems: "center", marginTop: "auto" }}>
          <span style={{ color: "var(--text-muted)", fontSize: 12 }}>{date}</span>
          <span style={{ display: "flex", alignItems: "center", gap: 4, color: "var(--text-subtle)", fontSize: 12 }}>
            <Clock size={11} />
            {article.readingTime} min read
          </span>
        </div>

        <div style={{ display: "flex", gap: 6, marginTop: 16, flexWrap: "wrap" }}>
          {article.tags.slice(0, 3).map((tag) => (
            <span key={tag} style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "var(--text-subtle)", border: "1px solid var(--border)", padding: "1px 6px", borderRadius: 2 }}>
              {tag}
            </span>
          ))}
        </div>
      </article>
    </Link>
  );
}
