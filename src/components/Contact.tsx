import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-3">
            Contact
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Let's build{" "}
            <span className="gradient-text">something great</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Open to senior backend roles, interesting distributed-systems
            problems, or just talking shop about Python, Kafka, and scaling
            production services.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
        >
          <a
            href="mailto:khanhamza124@gmail.com"
            className="group flex items-center gap-4 p-6 rounded-2xl border border-border/50 bg-muted/10 hover:border-primary/30 hover:bg-muted/30 transition-all"
          >
            <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
              <Mail size={22} />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-foreground">Email</p>
              <p className="text-xs text-muted-foreground">khanhamza124@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:+918439572325"
            className="group flex items-center gap-4 p-6 rounded-2xl border border-border/50 bg-muted/10 hover:border-primary/30 hover:bg-muted/30 transition-all"
          >
            <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
              <Phone size={22} />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-foreground">Phone</p>
              <p className="text-xs text-muted-foreground">+91-8439572325</p>
            </div>
          </a>

          <a
            href="https://github.com/Hamza000khan"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-6 rounded-2xl border border-border/50 bg-muted/10 hover:border-primary/30 hover:bg-muted/30 transition-all"
          >
            <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
              <Github size={22} />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-foreground">GitHub</p>
              <p className="text-xs text-muted-foreground">Hamza000khan</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/hamza-khan-05702417a/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-6 rounded-2xl border border-border/50 bg-muted/10 hover:border-primary/30 hover:bg-muted/30 transition-all"
          >
            <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
              <Linkedin size={22} />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-foreground">LinkedIn</p>
              <p className="text-xs text-muted-foreground">hamza-khan-05702417a</p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
