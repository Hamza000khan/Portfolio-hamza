import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Building2, Calendar, MapPin } from "lucide-react";

const EXPERIENCE = [
  {
    company: "Techolution",
    role: "Senior Software Engineer",
    location: "Hyderabad, India",
    period: "Jun 2025 – Present",
    bullets: [
      "Architected Python microservices for a high-scale audio streaming and podcast platform handling 50M+ monthly active users across 850+ radio stations.",
      "Engineered an AI-powered document ingestion pipeline (Python, Celery, Redis, multi-agent LLM) that reduced manual processing time by ~70%, onboarding 10K+ documents/month.",
      "Resolved asynchronous context-propagation bugs that had caused ~15% metadata inconsistency across real-time podcast pipelines, bringing error rate to <1%.",
      "Built Redis-backed failure-tracking for LLM API workflows, cutting undetected task failures by 90% and reducing on-call alerts by ~30%.",
      "Optimised critical SQL queries and backend workflows, contributing to a 30% reduction in average database response time across core services.",
      "Designed and maintained Kafka streaming pipelines processing 100K+ real-time audio events per hour with sub-second end-to-end latency.",
    ],
    tags: ["Python", "FastAPI", "Kafka", "Redis", "Celery", "Multi-Agent LLM"],
  },
  {
    company: "Xempla — Enterprise Asset Management Platform",
    role: "Software Engineer",
    location: "Remote (Australia)",
    period: "Nov 2021 – Jun 2025",
    bullets: [
      "Built and scaled backend services and large data pipelines for enterprise analytics workloads across 200+ client sites globally.",
      "Redesigned pipeline architecture to reduce infrastructure load by 35%, directly lowering cloud compute costs by an estimated $80K/year.",
      "Delivered analytics systems and API integrations that accelerated new product-line launch by 3 months and onboarded 15+ enterprise customers in year one.",
      "Diagnosed and resolved 30+ complex production incidents, achieving a 99.7% service uptime SLA across all managed pipelines.",
      "Mentored 3 junior engineers; introduced code-review standards that cut post-deployment bug reports by ~25%.",
    ],
    tags: ["Python", "Data Pipelines", "AWS", "PostgreSQL", "Microservices"],
  },
  {
    company: "WatchMyDC Analytics",
    role: "Backend Developer Intern",
    location: "Remote (Finland)",
    period: "Mar 2021 – Nov 2021",
    bullets: [
      "Implemented application monitoring across the software lifecycle to ensure overall system performance and reliability.",
      "Wrote scalable REST APIs in Python (Django) for a CRM platform serving 5K+ daily active users, and built internal features contributing to product success.",
      "Owned the full deployment cycle for the company's production website.",
      "Integrated a payment gateway into the CRM software, enabling end-to-end transaction handling.",
    ],
    tags: ["Django", "REST APIs", "Python", "Payment Integration"],
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-3">
            Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Where I've <span className="gradient-text">shipped</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent" />

          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="relative pl-8 md:pl-20 pb-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-primary bg-background shadow-lg shadow-primary/30" />

              {/* Card */}
              <div className="p-6 md:p-8 rounded-2xl border border-border/50 bg-muted/10 hover:border-primary/20 transition-colors">
                {/* Header row */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Building2 size={16} className="text-primary" />
                      <span className="text-sm font-semibold text-primary">{exp.company}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                  </div>
                  <div className="flex flex-col items-end gap-1 text-xs text-muted-foreground font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-3 mb-6">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
