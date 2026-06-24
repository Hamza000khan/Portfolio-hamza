import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { GraduationCap, Calendar, Award } from "lucide-react";

const EDUCATION = [
  {
    degree: "Bachelor in Computer Application",
    school: "Integral University, Lucknow",
    period: "2020 – 2023",
    detail: "CGPA: 8.9 / 10",
  },
];

const ACHIEVEMENTS = [
  "30% reduction in database response time through systematic query optimisation and index tuning.",
  "40% improvement in peak-traffic throughput via queue-based architecture; zero SLA breaches during 3x traffic spikes.",
  "70% decrease in manual processing overhead for AI document ingestion pipeline, scaling to 10K+ documents/month.",
  "$80K/year infrastructure cost saving from pipeline efficiency improvements at Xempla.",
  "Built kynstro.com, an AI interview platform, end-to-end as a solo backend engineer.",
];

export default function Education() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" ref={ref} className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-3">
            Education &amp; Achievements
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Foundation &amp; <span className="gradient-text">impact</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 md:p-8 rounded-2xl border border-border/50 bg-muted/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-lg font-bold text-foreground">Education</h3>
            </div>

            {EDUCATION.map((ed) => (
              <div key={ed.degree}>
                <h4 className="text-base font-semibold text-foreground mb-1">
                  {ed.degree}
                </h4>
                <p className="text-sm text-muted-foreground mb-3">{ed.school}</p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {ed.period}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {ed.detail}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Key Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-6 md:p-8 rounded-2xl border border-border/50 bg-muted/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <Award size={20} />
              </div>
              <h3 className="text-lg font-bold text-foreground">Key Achievements</h3>
            </div>

            <ul className="space-y-3">
              {ACHIEVEMENTS.map((a, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
