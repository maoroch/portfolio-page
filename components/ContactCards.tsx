"use client";

import { GitFork, Send, Link2, Mail, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const contacts = [
  { icon: Send, label: "Telegram", value: "@Ilyas_ones", href: "https://t.me/Ilyas_ones", desc: "Best for quick messages. Usually respond within a few hours." },
  { icon: Link2, label: "LinkedIn", value: "salimovilyass", href: "https://www.linkedin.com/in/salimovilyass", desc: "Professional background, work history, and recommendations." },
  { icon: GitFork, label: "GitHub", value: "maoroch", href: "https://github.com/maoroch", desc: "Open source projects, contributions, and code style." },
  { icon: Mail, label: "Email", value: "salimovilas46@gmail.com", href: "mailto:salimovilas46@gmail.com", desc: "For detailed proposals, NDA discussions, and formal inquiries." },
];

function ContactCard({ icon: Icon, label, value, href, desc }: (typeof contacts)[0]) {
  const [hovered, setHovered] = useState(false);
  return (
    <a href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer" style={{ textDecoration: "none" }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          backgroundColor: hovered ? "var(--bg-3)" : "var(--bg-2)",
          padding: "28px 24px",
          height: "100%",
          transition: "background-color 0.2s",
          cursor: "pointer",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
          <div style={{ width: 36, height: 36, borderRadius: 2, backgroundColor: "var(--accent-bg)", border: "1px solid var(--accent-dim)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon size={16} color="var(--accent)" />
          </div>
          <ArrowUpRight size={14} color={hovered ? "var(--accent)" : "var(--text-subtle)"} style={{ transition: "color 0.2s" }} />
        </div>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 4 }}>{label}</p>
        <p style={{ color: "var(--accent)", fontSize: 14, fontFamily: "'DM Mono', monospace", marginBottom: 12 }}>{value}</p>
        <p style={{ color: "var(--text-muted)", fontSize: 12, lineHeight: 1.6 }}>{desc}</p>
      </div>
    </a>
  );
}

export default function ContactCards() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 2, backgroundColor: "var(--border)", border: "1px solid var(--border)" }}>
      {contacts.map((c) => <ContactCard key={c.label} {...c} />)}
    </div>
  );
}
