import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Quote, Star, ArrowRight } from 'lucide-react';
import type { Solution, Testimonial, Tool, Differential, Module, Benefit } from '@/lib/index';
import { useRef } from 'react';
import * as LucideIcons from 'lucide-react';

type LucideIconName = keyof typeof LucideIcons;

function DynIcon({ name, className, style }: { name: string; className?: string; style?: React.CSSProperties }) {
  const Comp = LucideIcons[name as LucideIconName] as React.ComponentType<{ className?: string; style?: React.CSSProperties }> | undefined;
  if (!Comp) return null;
  return <Comp className={className} style={style} />;
}

/* ─── Solution Card ─────────────────────────────── */
export function SolutionCard({ solution }: { solution: Solution }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: 'spring', stiffness: 260, damping: 30 }}
      className="glass-card-hover h-full flex flex-col p-8"
    >
      <div className="icon-box-lg mb-6">
        <DynIcon name={solution.icon} className="w-7 h-7" style={{ color: 'oklch(0.72 0.20 250)' } as React.CSSProperties} />
      </div>
      <h3 className="text-lg font-bold mb-3 leading-snug" style={{ fontFamily: 'var(--font-heading)', color: 'oklch(0.93 0.006 250)' }}>
        {solution.title}
      </h3>
      <p className="text-sm leading-relaxed mb-6" style={{ color: 'oklch(0.58 0.012 250)' }}>
        {solution.description}
      </p>
      <ul className="space-y-2.5 mb-8 flex-1">
        {solution.features.map((feat, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm">
            <div className="icon-box-sm mt-0.5">
              <Check className="w-3.5 h-3.5" style={{ color: 'oklch(0.74 0.18 195)' }} />
            </div>
            <span style={{ color: 'oklch(0.65 0.012 250)' }}>{feat}</span>
          </li>
        ))}
      </ul>
      <Link
        to={solution.path}
        className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 group"
        style={{ color: 'oklch(0.72 0.20 250)' }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'oklch(0.80 0.16 195)')}
        onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'oklch(0.72 0.20 250)')}
      >
        Saiba mais
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
}

/* ─── Testimonial Card ──────────────────────────── */
export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ type: 'spring', stiffness: 260, damping: 30 }}
      className="glass-card h-full p-8 flex flex-col"
    >
      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-current star-rating" />
        ))}
      </div>
      {/* Quote */}
      <div className="relative flex-1 mb-6">
        <Quote className="absolute -top-1 -left-1 w-7 h-7 opacity-20" style={{ color: 'oklch(0.72 0.20 250)' }} />
        <p className="text-sm leading-relaxed pl-5" style={{ color: 'oklch(0.65 0.012 250)' }}>
          "{testimonial.text}"
        </p>
      </div>
      {/* Author */}
      <div className="flex items-center gap-3 pt-5" style={{ borderTop: '1px solid oklch(0.22 0.030 250 / 0.50)' }}>
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
          style={{
            background: 'linear-gradient(135deg, oklch(0.56 0.23 250 / 0.30) 0%, oklch(0.74 0.18 195 / 0.20) 100%)',
            border: '1px solid oklch(0.56 0.23 250 / 0.35)',
            color: 'oklch(0.78 0.18 250)',
            fontFamily: 'var(--font-heading)',
          }}
        >
          {testimonial.initials}
        </div>
        <div>
          <p className="text-sm font-semibold" style={{ color: 'oklch(0.88 0.006 250)' }}>{testimonial.name}</p>
          <p className="text-xs mt-0.5" style={{ color: 'oklch(0.52 0.010 250)' }}>{testimonial.course}</p>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Stat Card ─────────────────────────────────── */
export function StatCard({ label, value, delay = 0, icon }: { label: string; value: string; delay?: number; icon?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: 'spring', stiffness: 280, damping: 28, delay }}
      className="text-center"
    >
      {icon && (
        <div className="icon-box mx-auto mb-4">
          <DynIcon name={icon} className="w-5 h-5" style={{ color: 'oklch(0.72 0.20 250)' } as React.CSSProperties} />
        </div>
      )}
      <div className="stat-number mb-1.5">
        {value}
      </div>
      <div className="text-sm font-medium" style={{ color: 'oklch(0.55 0.012 250)' }}>{label}</div>
    </motion.div>
  );
}

/* ─── Tool Card ─────────────────────────────────── */
export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -4, scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 340, damping: 28 }}
      className="feature-card p-5 flex flex-col items-center gap-3 cursor-default"
    >
      <div className="icon-box">
        <DynIcon name={tool.icon} className="w-5 h-5" style={{ color: 'oklch(0.72 0.20 250)' } as React.CSSProperties} />
      </div>
      <p className="text-xs font-semibold text-center" style={{ color: 'oklch(0.72 0.010 250)', letterSpacing: '0.02em' }}>{tool.name}</p>
    </motion.div>
  );
}

/* ─── Differential Card ─────────────────────────── */
export function DifferentialCard({ differential }: { differential: Differential }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: 'spring', stiffness: 260, damping: 30 }}
      className="feature-card p-7 h-full"
    >
      <div className="icon-box mb-5">
        <DynIcon name={differential.icon} className="w-5 h-5" style={{ color: 'oklch(0.72 0.20 250)' } as React.CSSProperties} />
      </div>
      <h3 className="font-bold mb-2.5 text-base" style={{ fontFamily: 'var(--font-heading)', color: 'oklch(0.90 0.006 250)' }}>
        {differential.title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: 'oklch(0.56 0.010 250)' }}>
        {differential.description}
      </p>
    </motion.div>
  );
}

/* ─── Module Card ───────────────────────────────── */
export function ModuleCard({ module }: { module: Module }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 260, damping: 30 }}
      className="glass-card-hover p-5 flex items-start gap-4"
    >
      <div
        className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold"
        style={{
          background: 'linear-gradient(135deg, oklch(0.56 0.23 250 / 0.20) 0%, oklch(0.74 0.18 195 / 0.12) 100%)',
          border: '1px solid oklch(0.56 0.23 250 / 0.30)',
          color: 'oklch(0.72 0.20 250)',
          fontFamily: 'var(--font-heading)',
        }}
      >
        {module.number.toString().padStart(2, '0')}
      </div>
      <div>
        <h4 className="text-sm font-semibold mb-1" style={{ color: 'oklch(0.88 0.006 250)' }}>{module.title}</h4>
        <p className="text-xs leading-relaxed" style={{ color: 'oklch(0.52 0.010 250)' }}>{module.description}</p>
      </div>
    </motion.div>
  );
}

/* ─── Benefit Card ──────────────────────────────── */
export function BenefitCard({ benefit }: { benefit: Benefit }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 280, damping: 28 }}
      className="flex items-start gap-4"
    >
      <div className="icon-box-sm mt-0.5 flex-shrink-0">
        <Check className="w-3.5 h-3.5" style={{ color: 'oklch(0.74 0.18 195)' }} />
      </div>
      <div>
        <h4 className="text-sm font-semibold mb-1" style={{ color: 'oklch(0.88 0.006 250)' }}>{benefit.title}</h4>
        <p className="text-sm leading-relaxed" style={{ color: 'oklch(0.52 0.010 250)' }}>{benefit.description}</p>
      </div>
    </motion.div>
  );
}
