'use client'
import Link from "next/link";
import { GitFork, Send, Link2, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const socials = [
  { icon: GitFork, label: "GitHub", href: "https://github.com/maoroch" },
  { icon: Send, label: "Telegram", href: "https://t.me/Ilyas_ones" },
  { icon: Link2, label: "LinkedIn", href: "https://www.linkedin.com/in/salimovilyass" },
  { icon: Mail, label: "Email", href: "mailto:salimovilas46@gmail.com" },
];

const navLinks = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Articles", href: "/articles" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: isMobile ? "40px 16px" : "48px 24px",
        marginTop: isMobile ? 60 : 80,
        backgroundColor: "var(--bg)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          flexWrap: "wrap",
          justifyContent: isMobile ? "flex-start" : "space-between",
          alignItems: isMobile ? "flex-start" : "center",
          gap: isMobile ? 32 : 24,
        }}
      >
        {/* Brand Section */}
        <div style={{ flex: isMobile ? "1 1 100%" : "0 0 auto" }}>
          <span
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: isMobile ? 16 : 18,
              color: "var(--text)",
              letterSpacing: "-0.02em",
              fontWeight: 600,
              transition: "all 0.3s ease",
            }}
          >
            Ilyas<span style={{ color: "var(--accent)" }}>.</span>dev
          </span>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: isMobile ? 11 : 12,
              marginTop: 8,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            Full Stack Developer · {new Date().getFullYear()}
          </p>
        </div>

        {/* Navigation Links - hidden on mobile, shown on desktop */}
        {!isMobile && (
          <nav style={{ display: "flex", gap: 24, alignItems: "center", flex: "1 1 auto", justifyContent: "center" }}>
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                style={{
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  fontSize: 11,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  transition: "all 0.3s ease",
                  fontWeight: 500,
                  position: "relative",
                  paddingBottom: 2,
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "var(--text-muted)";
                }}
              >
                {label}
              </Link>
            ))}
          </nav>
        )}

        {/* Social Links */}
        <div style={{ display: "flex", gap: isMobile ? 16 : 20, alignItems: "center" }}>
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              style={{
                color: "var(--text-muted)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 36,
                height: 36,
                borderRadius: 6,
                backgroundColor: "transparent",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget).style.backgroundColor = "rgba(255, 141, 120, 0.1)";
                (e.currentTarget).style.color = "var(--accent)";
                (e.currentTarget).style.transform = "scale(1.1) translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget).style.backgroundColor = "transparent";
                (e.currentTarget).style.color = "var(--text-muted)";
                (e.currentTarget).style.transform = "scale(1) translateY(0)";
              }}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Navigation - shown only on mobile */}
      {isMobile && (
        <nav style={{ 
          display: "flex", 
          gap: 16, 
          marginTop: 32, 
          paddingTop: 32,
          borderTop: "1px solid var(--border)",
          flexWrap: "wrap",
          justifyContent: "flex-start",
        }}>
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              style={{
                color: "var(--text-muted)",
                textDecoration: "none",
                fontSize: 11,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                transition: "all 0.3s ease",
                fontWeight: 500,
                padding: "6px 12px",
                borderRadius: 4,
                backgroundColor: "var(--bg-2)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget).style.backgroundColor = "var(--bg-3)";
                (e.currentTarget).style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget).style.backgroundColor = "var(--bg-2)";
                (e.currentTarget).style.color = "var(--text-muted)";
              }}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}

    </footer>
  );
}
