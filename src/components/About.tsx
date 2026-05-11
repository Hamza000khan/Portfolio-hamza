import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-3">
            About
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Building backend systems that{" "}
            <span className="gradient-text">scale</span>{" "}
            in production.
          </h2>
        </motion.div>

        {/* Summary + highlight grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: prose summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              I'm a backend engineer with 5 years of experience shipping
              production Python services at scale — FastAPI microservices,
              Kafka streaming pipelines, and AI-powered systems serving
              millions of users.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              At <span className="text-foreground font-semibold">Techolution</span>,
              I architect Python microservices for a high-scale audio streaming
              platform with 50M+ MAUs, and build AI-powered document ingestion
              pipelines that cut manual processing time by ~70%.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              My focus:{" "}
              <span className="text-foreground font-semibold">
                translating complex distributed-systems problems into measurable
                reliability and cost wins
              </span>
              .
            </p>
          </motion.div>

          {/* Right: JSON code block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="rounded-2xl border border-border/50 bg-muted/20 overflow-hidden"
          >
            {/* Code block header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-muted/30">
              <span className="w-3 h-3 rounded-full bg-red-500/60" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <span className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="ml-2 text-xs font-mono text-muted-foreground">expertise.json</span>
            </div>
            <pre className="p-5 text-xs sm:text-sm font-mono leading-relaxed overflow-x-auto">
              <code>
{`{
  `}<span className="text-primary">"expertise"</span>{`: [`}
{`
    {`}
{`
      `}<span className="text-primary">"category"</span>{`: `}<span className="text-green-400">"Backend Services"</span>{`,`}
{`
      `}<span className="text-primary">"stack"</span>{`: `}<span className="text-green-400">"Python · FastAPI · Django"</span>{`,`}
{`
      `}<span className="text-primary">"focus"</span>{`: `}<span className="text-green-400">"Microservices &amp; async APIs"</span>
{`
    },`}
{`
    {`}
{`
      `}<span className="text-primary">"category"</span>{`: `}<span className="text-green-400">"Streaming &amp; Data"</span>{`,`}
{`
      `}<span className="text-primary">"stack"</span>{`: `}<span className="text-green-400">"Kafka · Redis · Celery"</span>{`,`}
{`
      `}<span className="text-primary">"focus"</span>{`: `}<span className="text-green-400">"100K+ events/hr, sub-second latency"</span>
{`
    },`}
{`
    {`}
{`
      `}<span className="text-primary">"category"</span>{`: `}<span className="text-green-400">"Cloud"</span>{`,`}
{`
      `}<span className="text-primary">"stack"</span>{`: [`}<span className="text-green-400">"AWS"</span>{`, `}<span className="text-green-400">"GCP"</span>{`, `}<span className="text-green-400">"Docker"</span>{`]`}
{`
    },`}
{`
    {`}
{`
      `}<span className="text-primary">"category"</span>{`: `}<span className="text-green-400">"Impact"</span>{`,`}
{`
      `}<span className="text-primary">"focus"</span>{`: `}<span className="text-green-400">"30% faster DB, 40% queue latency cut, $80K/yr saved"</span>
{`
    }`}
{`
  ]`}
{`}`}
              </code>
            </pre>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
