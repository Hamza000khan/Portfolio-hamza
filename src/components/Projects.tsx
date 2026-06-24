import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ExternalLink, Bot, FileSearch, Activity, Database, Zap, Github } from "lucide-react";

const PROJECTS = [
  {
    icon: Bot,
    title: "Kynstro — AI Interview Platform",
    subtitle: "Python · FastAPI · LLM · Solo backend engineer",
    description:
      "Designed and shipped an end-to-end AI interview platform as the sole backend engineer, from system design to deployment.",
    bullets: [
      "Built async LLM-powered interview pipelines, real-time scoring logic, and a multi-tenant API layer on FastAPI.",
      "Owned the full stack: schema design, queueing, LLM orchestration, observability, and AWS deployment.",
    ],
    url: "https://kynstro.com",
    gradient: "from-violet-500/20 to-purple-500/20",
    accentColor: "text-violet-400",
  },
  {
    icon: FileSearch,
    title: "AI Document Ingestion Pipeline",
    subtitle: "Python · Celery · Redis · Multi-Agent LLM",
    description:
      "Engineered an AI-powered document ingestion pipeline at Techolution that onboards 10K+ documents/month with a multi-agent LLM workflow.",
    bullets: [
      "Reduced manual processing time by ~70% by orchestrating Celery workers and Redis-backed task state across multi-agent LLM stages.",
      "Built failure-tracking for LLM API workflows that cut undetected task failures by 90% and reduced on-call alerts by ~30%.",
    ],
    gradient: "from-emerald-500/20 to-green-500/20",
    accentColor: "text-emerald-400",
  },
  {
    icon: Zap,
    title: "Real-Time Audio Streaming Pipelines",
    subtitle: "Kafka · Python · Distributed Systems",
    description:
      "Designed and maintained Kafka streaming pipelines for a podcast platform serving 50M+ MAUs across 850+ radio stations.",
    bullets: [
      "Processed 100K+ real-time audio events per hour with sub-second end-to-end latency.",
      "Resolved async context-propagation bugs that had caused ~15% metadata inconsistency, bringing error rate to <1%.",
    ],
    gradient: "from-cyan-500/20 to-blue-500/20",
    accentColor: "text-cyan-400",
  },
  {
    icon: Database,
    title: "Enterprise Analytics Pipeline Redesign",
    subtitle: "Python · Cloud · 200+ client sites",
    description:
      "Redesigned the data pipeline architecture at Xempla to support enterprise analytics workloads across 200+ client sites globally.",
    bullets: [
      "Cut infrastructure load by 35% — an estimated $80K/year reduction in cloud compute costs.",
      "Delivered analytics systems and API integrations that accelerated a new product-line launch by 3 months and onboarded 15+ enterprise customers in year one.",
    ],
    gradient: "from-indigo-500/20 to-purple-500/20",
    accentColor: "text-indigo-400",
  },
  {
    icon: Activity,
    title: "Observability Toolkit for Incident Detection",
    subtitle: "Python · Metrics · Alerts · Dashboards",
    description:
      "Implemented observability tooling at WatchMyDC Analytics — metrics, alerts, and dashboards across critical system paths.",
    bullets: [
      "Improved mean time to detection (MTTD) for incidents from ~45 min to <10 min.",
      "Paired with Django REST APIs supporting 5K+ DAU at <200 ms p95 response time.",
    ],
    gradient: "from-rose-500/20 to-pink-500/20",
    accentColor: "text-rose-400",
  },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-3">
            Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Things I've <span className="gradient-text">built</span>
          </h2>
        </motion.div>

        {/* Project cards */}
        <div className="grid gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="group relative overflow-hidden rounded-3xl border border-border/50 bg-muted/10 hover:border-primary/20 transition-all duration-500"
            >
              {/* Gradient background glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative p-8 md:p-10">
                {/* Top row: icon + title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-2xl bg-muted/50 ${project.accentColor}`}>
                    <project.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-muted-foreground tracking-wide">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Bullet points */}
                <ul className="space-y-2 mb-6">
                  {project.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                    >
                      <span
                        className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${project.accentColor} opacity-60`}
                        style={{ backgroundColor: "currentColor" }}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* External link */}
                {"url" in project && project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink size={14} />
                    Visit site
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
