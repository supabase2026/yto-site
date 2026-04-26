import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, ChevronDown, CheckCircle2, Star, Quote } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { SolutionCard, TestimonialCard, StatCard, DifferentialCard } from '@/components/Cards';
import { ROUTE_PATHS, WHATSAPP_LINK } from '@/lib/index';
import { SOLUTIONS, TESTIMONIALS, DIFFERENTIALS } from '@/data/index';
import { IMAGES } from '@/assets/images';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 260, damping: 28 } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.10 } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { type: 'spring' as const, stiffness: 220, damping: 28, delay: 0.25 } },
};

const STATS = [
  { value: '+100.000', label: 'Alunos Formados', icon: 'Users' },
  { value: '+200', label: 'Empresas Atendidas', icon: 'Building2' },
  { value: '+50', label: 'Países Presentes', icon: 'Globe' },
  { value: '26+', label: 'Anos de Experiência', icon: 'Award' },
];

const TECH_PILLS = ['Excel', 'Power BI', 'SQL Server', 'Python', 'IA Generativa', 'Databricks'];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <Layout>
      {/* ══════════════════════════════════════════════
          HERO — Premium com fundo real + instrutor
      ══════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: 'oklch(0.07 0.022 250)' }}
      >
        {/* ── Fundo: foto de turma real com overlay escuro ── */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.CAPTURA_DE_TELA5836_66}
            alt=""
            aria-hidden
            className="w-full h-full object-cover object-top"
            style={{ filter: 'brightness(0.35) saturate(0.65)' }}
          />
          {/* Overlay gradiente: escuro à esquerda (texto) → mais aberto à direita (foto do instrutor) */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(105deg, oklch(0.07 0.022 250 / 0.97) 0%, oklch(0.07 0.022 250 / 0.82) 45%, oklch(0.07 0.022 250 / 0.50) 72%, oklch(0.07 0.022 250 / 0.20) 100%)',
            }}
          />
          {/* Fade bottom para a próxima seção */}
          <div
            className="absolute bottom-0 left-0 right-0 h-36 z-10"
            style={{ background: 'linear-gradient(to top, oklch(0.07 0.022 250), transparent)' }}
          />
        </div>

        {/* Orb decorativo sutil à esquerda */}
        <div
          className="absolute top-1/4 -left-24 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
          style={{
            background: 'radial-gradient(circle, oklch(0.56 0.23 250 / 0.12) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        {/* ── Layout split: texto | foto instrutor ── */}
        <div className="relative z-10 container-xl w-full">
          <div className="grid lg:grid-cols-[1fr_420px] gap-12 xl:gap-20 items-center py-24 lg:py-32">

            {/* ── COLUNA ESQUERDA: Copy + CTAs ── */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="flex flex-col items-start"
            >
              {/* Selo de autoridade */}
              <motion.div variants={fadeUp} className="mb-7">
                <span
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase"
                  style={{
                    background: 'oklch(0.56 0.23 250 / 0.14)',
                    border: '1px solid oklch(0.56 0.23 250 / 0.35)',
                    color: 'oklch(0.75 0.18 250)',
                    letterSpacing: '0.07em',
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ background: 'oklch(0.72 0.20 250)' }}
                  />
                  Referência em educação de dados no Brasil
                </span>
              </motion.div>

              {/* Headline principal */}
              <motion.h1
                variants={fadeUp}
                className="font-bold leading-[1.08] mb-6"
                style={{
                  fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
                  color: 'oklch(0.97 0.004 250)',
                  letterSpacing: '-0.02em',
                }}
              >
                Transforme dados em{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, oklch(0.72 0.20 250), oklch(0.60 0.22 250))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  oportunidades reais
                </span>{' '}
                de carreira
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                variants={fadeUp}
                className="mb-8 leading-relaxed"
                style={{
                  fontSize: 'clamp(1rem, 1.8vw, 1.13rem)',
                  color: 'oklch(0.68 0.016 250)',
                  maxWidth: '560px',
                }}
              >
                Aprenda na prática com especialistas do mercado e desenvolva habilidades em Excel, Power BI, SQL, Python e IA — com mais de 26 anos formando profissionais.
              </motion.p>

              {/* Pills de tecnologias */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-10">
                {TECH_PILLS.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: 'oklch(0.14 0.028 250)',
                      border: '1px solid oklch(0.26 0.038 250 / 0.60)',
                      color: 'oklch(0.65 0.018 250)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 mb-10">
                <Link
                  to={ROUTE_PATHS.SOLUCOES}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200"
                  style={{
                    background: 'oklch(0.56 0.23 250)',
                    color: 'oklch(0.97 0.004 250)',
                    boxShadow: '0 4px 24px oklch(0.56 0.23 250 / 0.35)',
                    letterSpacing: '0.01em',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 6px 32px oklch(0.56 0.23 250 / 0.55)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 24px oklch(0.56 0.23 250 / 0.35)'; }}
                >
                  Conhecer programas
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200"
                  style={{
                    background: 'rgba(37,211,102,0.12)',
                    border: '1.5px solid rgba(37,211,102,0.38)',
                    color: '#25D366',
                    letterSpacing: '0.01em',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(37,211,102,0.20)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(37,211,102,0.12)'; }}
                >
                  <MessageCircle className="w-4 h-4" />
                  Falar no WhatsApp
                </a>
              </motion.div>

              {/* Prova social em linha */}
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: 'oklch(0.60 0.22 250)' }} />
                  <span className="text-sm" style={{ color: 'oklch(0.58 0.014 250)' }}>
                    Mais de <strong style={{ color: 'oklch(0.82 0.010 250)' }}>100.000 alunos</strong> formados
                  </span>
                </div>
                <span className="hidden sm:block w-px h-4" style={{ background: 'oklch(0.28 0.030 250)' }} />
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: 'oklch(0.60 0.22 250)' }} />
                  <span className="text-sm" style={{ color: 'oklch(0.58 0.014 250)' }}>
                    Mais de <strong style={{ color: 'oklch(0.82 0.010 250)' }}>200 empresas</strong> atendidas
                  </span>
                </div>
              </motion.div>

              {/* Micro copy */}
              <motion.p
                variants={fadeUp}
                className="mt-5 text-xs italic"
                style={{ color: 'oklch(0.42 0.010 250)' }}
              >
                Saia do zero ou acelere sua carreira em dados com aprendizado prático.
              </motion.p>
            </motion.div>

            {/* ── COLUNA DIREITA: Foto do instrutor ── */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              animate="show"
              className="relative hidden lg:flex items-end justify-center"
              style={{ minHeight: '520px' }}
            >
              {/* Card glassmorphism de fundo */}
              <div
                className="absolute inset-x-4 bottom-0 top-12 rounded-3xl"
                style={{
                  background: 'oklch(0.56 0.23 250 / 0.06)',
                  border: '1px solid oklch(0.56 0.23 250 / 0.18)',
                  backdropFilter: 'blur(2px)',
                  boxShadow: 'inset 0 1px 0 oklch(0.56 0.23 250 / 0.12)',
                }}
              />

              {/* Foto: professor ensinando turma — recortada com foco na cena de aula */}
              <div
                className="relative z-10 w-full overflow-hidden rounded-2xl"
                style={{
                  aspectRatio: '3 / 4',
                  maxWidth: '400px',
                  boxShadow: '0 32px 80px oklch(0.04 0.010 250 / 0.85)',
                  border: '1px solid oklch(0.56 0.23 250 / 0.20)',
                }}
              >
                <img
                  src={IMAGES.CAPTURA_DE_TELA5836_66}
                  alt="Aula presencial do Grupo Yto Nihon — professor ensinando turma com laptops"
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: '15% center',
                    filter: 'brightness(0.92) contrast(1.06) saturate(0.95)',
                  }}
                />
                {/* Overlay sutil nas bordas para integrar com o fundo escuro */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, oklch(0.07 0.022 250 / 0.25) 0%, transparent 20%, transparent 75%, oklch(0.07 0.022 250 / 0.55) 100%)',
                    borderRadius: 'inherit',
                  }}
                />
              </div>

              {/* Badge flutuante: Google ⭐ */}
              <motion.div
                className="absolute top-8 right-2 z-20"
                initial={{ opacity: 0, scale: 0.85, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.7, type: 'spring', stiffness: 220 }}
              >
                <div
                  className="flex items-center gap-2 px-3.5 py-2.5 rounded-2xl"
                  style={{
                    background: 'oklch(0.11 0.024 250 / 0.95)',
                    border: '1px solid oklch(0.28 0.036 250 / 0.55)',
                    backdropFilter: 'blur(16px)',
                    boxShadow: '0 8px 32px oklch(0.04 0.010 250 / 0.60)',
                  }}
                >
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" style={{ color: '#F59E0B' }} />
                    ))}
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="text-[11px] font-semibold" style={{ color: 'oklch(0.92 0.006 250)' }}>+200 avaliações</span>
                    <span className="text-[10px]" style={{ color: 'oklch(0.52 0.012 250)' }}>5★ no Google</span>
                  </div>
                </div>
              </motion.div>

              {/* Badge flutuante: 26 anos */}
              <motion.div
                className="absolute bottom-24 -left-4 z-20"
                initial={{ opacity: 0, scale: 0.85, x: -10 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.9, type: 'spring', stiffness: 220 }}
              >
                <div
                  className="px-4 py-3 rounded-2xl"
                  style={{
                    background: 'oklch(0.11 0.024 250 / 0.95)',
                    border: '1px solid oklch(0.28 0.036 250 / 0.55)',
                    backdropFilter: 'blur(16px)',
                    boxShadow: '0 8px 32px oklch(0.04 0.010 250 / 0.60)',
                  }}
                >
                  <p className="text-xl font-bold leading-none" style={{ color: 'oklch(0.72 0.20 250)' }}>26+</p>
                  <p className="text-[11px] mt-0.5" style={{ color: 'oklch(0.52 0.012 250)' }}>anos de experiência</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span
            className="text-[10px] tracking-widest uppercase"
            style={{ color: 'oklch(0.38 0.008 250)', letterSpacing: '0.14em' }}
          >
            Explorar
          </span>
          <ChevronDown className="w-4 h-4" style={{ color: 'oklch(0.38 0.008 250)' }} />
        </motion.div>
      </section>
{/* BLOCO DE URGÊNCIA */}
<section className="py-6" style={{ background: 'oklch(0.09 0.022 250)' }}>
  <div className="container-xl">
    <div
      className="rounded-2xl px-6 py-5 text-center"
      style={{
        background: 'oklch(0.56 0.23 250 / 0.10)',
        border: '1px solid oklch(0.56 0.23 250 / 0.28)',
      }}
    >
      <p className="text-sm md:text-base font-semibold" style={{ color: 'oklch(0.90 0.006 250)' }}>
        ⚡ Atenção: as turmas, mentorias e vagas para acompanhamento são limitadas.
      </p>
      <p className="text-sm mt-1" style={{ color: 'oklch(0.58 0.010 250)' }}>
        Se você quer entrar na área de dados ou acelerar sua carreira, adiar isso pode custar caro.
      </p>
    </div>
  </div>
</section>
      {/* ══════════════════════════════════════════════
          STATS
      ══════════════════════════════════════════════ */}
      <section className="relative py-16" style={{ background: 'oklch(0.12 0.028 250)' }}>
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="container-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {STATS.map(({ value, label, icon }, i) => (
              <StatCard key={label} value={value} label={label} delay={i * 0.08} icon={icon} />
            ))}
          </div>
        </div>
        <div className="section-divider absolute bottom-0 left-0 right-0" />
      </section>

      {/* ══════════════════════════════════════════════
          SOLUTIONS
      ══════════════════════════════════════════════ */}
      <section className="section-pad" style={{ background: 'var(--brand-navy)' }}>
        <div className="container-xl">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
          >
            <span className="section-tag">Nossos Programas</span>
            <h2 className="section-headline mb-4">
              A solução certa para<br />
              <span className="text-gradient-static">cada etapa da sua carreira</span>
            </h2>
            <p className="section-subline mx-auto">
              Do iniciante ao executivo — temos o programa ideal para você dominar dados e avançar profissionalmente.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {SOLUTIONS.map((s) => (
              <SolutionCard key={s.id} solution={s} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to={ROUTE_PATHS.SOLUCOES} className="btn-ghost">
              Ver todas as soluções
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          DIFFERENTIALS
      ══════════════════════════════════════════════ */}
      <section
        className="section-pad relative overflow-hidden"
        style={{ background: 'oklch(0.11 0.026 252)' }}
      >
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="orb orb-blue" style={{ width: '600px', height: '600px', top: '-30%', right: '-10%', opacity: 0.25 }} />
        <div className="container-xl relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
          >
            <span className="section-tag pill-badge-cyan">Por que a Yto Nihon</span>
            <h2 className="section-headline mb-4">
              O que nos torna<br />
              <span className="text-gradient-static">referência no Brasil</span>
            </h2>
            <p className="section-subline mx-auto">
              Não ensinamos apenas teoria. Formamos profissionais prontos para gerar resultados reais desde o primeiro dia.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {DIFFERENTIALS.map((d, i) => (
              <DifferentialCard key={i} differential={d} />
            ))}
          </div>
        </div>
        <div className="section-divider absolute bottom-0 left-0 right-0" />
      </section>

      {/* ══════════════════════════════════════════════
          HISTÓRIA — De onde tudo começou
      ══════════════════════════════════════════════ */}
      <section
        className="section-pad relative overflow-hidden"
        style={{ background: 'oklch(0.09 0.022 250)' }}
      >
        <div className="section-divider absolute top-0 left-0 right-0" />

        {/* Orb decorativo */}
        <div className="orb orb-blue" style={{ width: '500px', height: '500px', top: '-20%', left: '-10%', opacity: 0.15 }} />

        <div className="container-xl relative z-10">

          {/* Título da seção */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
          >
            <span className="section-tag">Nossa História</span>
            <h2 className="section-headline mb-4">
              De onde tudo{' '}
              <span className="text-gradient-static">começou</span>
            </h2>
          </motion.div>

          {/* ── Layout: fotos + texto ── */}
          <div className="grid lg:grid-cols-[1fr_1fr] gap-14 xl:gap-20 items-center">

            {/* Coluna esquerda: mosaico de fotos com linha do tempo */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200, damping: 28 }}
              className="relative"
            >
              {/* Foto principal: início da carreira (antiga, sala de computadores) */}
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{
                  boxShadow: '0 24px 64px oklch(0.03 0.008 250 / 0.75)',
                  border: '1px solid oklch(0.26 0.036 250 / 0.45)',
                }}
              >
                <img
                  src={IMAGES.INI_CIO_DA_CARREIRA_68}
                  alt="Início da carreira — primeira sala de aula da Yto Nihon"
                  className="w-full object-cover"
                  style={{ height: '280px', objectPosition: 'center top', filter: 'brightness(0.85) saturate(0.75) sepia(0.12)' }}
                />
                {/* Overlay gradiente */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, oklch(0.09 0.022 250 / 0.70) 0%, transparent 50%)' }}
                />
                {/* Label ano */}
                <div
                  className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg"
                  style={{
                    background: 'oklch(0.09 0.022 250 / 0.88)',
                    border: '1px solid oklch(0.30 0.040 250 / 0.50)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <p className="text-xs font-semibold tracking-wide" style={{ color: 'oklch(0.60 0.18 250)' }}>Início da Jornada</p>
                  <p className="text-[10px]" style={{ color: 'oklch(0.48 0.010 250)' }}>Os primeiros alunos</p>
                </div>
              </div>

              {/* Linha divisória com seta de evolução */}
              <div className="flex items-center gap-3 my-4 px-2">
                <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, oklch(0.26 0.036 250 / 0.30), oklch(0.56 0.23 250 / 0.60))' }} />
                <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ background: 'oklch(0.56 0.23 250 / 0.12)', color: 'oklch(0.65 0.18 250)', border: '1px solid oklch(0.56 0.23 250 / 0.25)' }}>26 anos de evolução</span>
                <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, oklch(0.56 0.23 250 / 0.60), oklch(0.26 0.036 250 / 0.30))' }} />
              </div>

              {/* Duas fotos lado a lado: turma atual + foto do professor */}
              <div className="grid grid-cols-2 gap-3">
                {/* Turma atual */}
                <div
                  className="relative overflow-hidden rounded-xl"
                  style={{
                    boxShadow: '0 12px 32px oklch(0.03 0.008 250 / 0.60)',
                    border: '1px solid oklch(0.26 0.036 250 / 0.45)',
                  }}
                >
                  <img
                    src="/images/fototurma.jpeg?v=2"
                    alt="Turma atual Yto Nihon — sala moderna com alunos"
                    className="w-full object-cover"
                    style={{ height: '180px', objectPosition: 'center center' }}
                />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, oklch(0.09 0.022 250 / 0.65) 0%, transparent 45%)' }}
                  />
                  <div
                    className="absolute bottom-3 left-3 px-2 py-1 rounded-md"
                    style={{ background: 'oklch(0.09 0.022 250 / 0.85)', backdropFilter: 'blur(6px)' }}
                  >
                    <p className="text-[10px] font-semibold" style={{ color: 'oklch(0.60 0.18 250)' }}>Hoje</p>
                    <p className="text-[10px]" style={{ color: 'oklch(0.48 0.010 250)' }}>Turma presencial</p>
                  </div>
                </div>

                {/* Foto do fundador */}
                <div
                  className="relative overflow-hidden rounded-xl"
                  style={{
                    boxShadow: '0 12px 32px oklch(0.03 0.008 250 / 0.60)',
                    border: '1px solid oklch(0.56 0.23 250 / 0.30)',
                  }}
                >
                  <img
                    src={IMAGES.FOTO_ATUAL_70}
                    alt="Eduardo Yto — Fundador do Grupo Yto Nihon"
                    className="w-full object-cover"
                    style={{ height: '180px', objectPosition: 'center top', filter: 'brightness(0.92) saturate(0.90)' }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, oklch(0.09 0.022 250 / 0.70) 0%, transparent 40%)' }}
                  />
                  <div
                    className="absolute bottom-3 left-3 px-2 py-1 rounded-md"
                    style={{ background: 'oklch(0.09 0.022 250 / 0.85)', backdropFilter: 'blur(6px)' }}
                  >
                    <p className="text-[10px] font-semibold" style={{ color: 'oklch(0.60 0.18 250)' }}>Eduardo Yto</p>
                    <p className="text-[10px]" style={{ color: 'oklch(0.48 0.010 250)' }}>Fundador</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Coluna direita: texto da história */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200, damping: 28, delay: 0.12 }}
              className="flex flex-col"
            >
              {/* Citação de abertura */}
              <div
                className="relative mb-8 p-6 rounded-2xl"
                style={{
                  background: 'oklch(0.56 0.23 250 / 0.07)',
                  border: '1px solid oklch(0.56 0.23 250 / 0.20)',
                  borderLeft: '3px solid oklch(0.60 0.22 250)',
                }}
              >
                <Quote className="w-8 h-8 mb-3" style={{ color: 'oklch(0.56 0.23 250 / 0.50)' }} />
                <p className="text-base font-medium leading-relaxed italic" style={{ color: 'oklch(0.80 0.008 250)' }}>
                  "Tudo começou de forma simples. Antes de falar sobre dados, tecnologia ou inteligência artificial, a missão sempre foi uma só: ensinar de verdade."
                </p>
              </div>

              {/* Parágrafos da história */}
              <div className="space-y-4">
                {[
                  {
                    text: 'Ainda muito jovem, Edu já estava em sala de aula. Não com estruturas gigantes, não com plataformas sofisticadas — mas com algo que continua sendo o maior diferencial da Yto até hoje: a vontade de fazer o aluno aprender de verdade.',
                  },
                  {
                    text: 'O que começou com aulas de Excel evoluiu com o tempo. Vieram novas ferramentas, novas demandas do mercado e uma transformação natural: de aulas básicas para formação completa de profissionais em dados.',
                    highlight: true,
                  },
                  {
                    text: 'Ao longo dos anos, uma coisa ficou clara. Não basta ensinar ferramentas. É preciso preparar pessoas para pensar, analisar e tomar decisões. Foi assim que a Yto Nihon cresceu.',
                  },
                  {
                    text: 'Mais de 26 anos depois, o que antes era uma sala de aula se tornou uma estrutura que já formou mais de 100 mil alunos e atendeu mais de 200 empresas no Brasil e no mundo. Mas a essência continua a mesma.',
                  },
                ].map((p, i) => (
                  <p
                    key={i}
                    className="text-sm leading-relaxed"
                    style={{
                      color: p.highlight ? 'oklch(0.75 0.010 250)' : 'oklch(0.58 0.010 250)',
                      fontWeight: p.highlight ? '450' : '400',
                    }}
                  >
                    {p.text}
                  </p>
                ))}
              </div>

              {/* Citação de encerramento */}
              <div
                className="mt-8 p-5 rounded-xl"
                style={{
                  background: 'oklch(0.13 0.028 250)',
                  border: '1px solid oklch(0.24 0.032 250 / 0.60)',
                }}
              >
                <p className="text-sm font-medium leading-relaxed" style={{ color: 'oklch(0.72 0.010 250)' }}>
                  Hoje, a Yto não é apenas uma escola.
                  <br />
                  É o lugar onde pessoas mudam de carreira, evoluem profissionalmente e passam a enxergar os dados como ferramenta de crescimento real.
                </p>
                <p className="mt-3 text-sm font-semibold" style={{ color: 'oklch(0.68 0.20 250)' }}>
                  E essa história… ainda está só começando.
                </p>
              </div>

              {/* CTA da seção */}
              <div className="mt-8">
                <Link
                  to={ROUTE_PATHS.QUEM_SOMOS}
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                  style={{ color: 'oklch(0.65 0.18 250)' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'oklch(0.80 0.20 250)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'oklch(0.65 0.18 250)'; }}
                >
                  Conheça mais sobre quem somos
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="section-divider absolute bottom-0 left-0 right-0" />
      </section>

      {/* ══════════════════════════════════════════════
          SOCIAL PROOF BANNER
      ══════════════════════════════════════════════ */}
      <section className="py-14" style={{ background: 'var(--brand-navy)' }}>
        <div className="container-xl">
          <div
            className="rounded-2xl p-8 md:p-12 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, oklch(0.14 0.028 250) 0%, oklch(0.12 0.030 252) 100%)',
              border: '1px solid oklch(0.25 0.035 250 / 0.40)',
            }}
          >
            <div className="orb orb-blue" style={{ width: '400px', height: '300px', top: '-40%', right: '5%', opacity: 0.30 }} />
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <span className="pill-badge-green pill-badge text-xs mb-4 inline-flex">Diploma MEC reconhecido</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'oklch(0.93 0.006 250)' }}>
                  Formação com validade<br className="hidden md:block" /> internacional
                </h3>
                <p className="text-sm max-w-lg" style={{ color: 'oklch(0.55 0.010 250)' }}>
                  Nossos certificados são reconhecidos em mais de 50 países. Construa uma carreira global em dados com credenciais que o mercado respeita.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                <Link to={ROUTE_PATHS.POS_GRADUACAO} className="btn-primary whitespace-nowrap">
                  Ver Pós-Graduação
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-ghost whitespace-nowrap">
                  Tirar dúvidas
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════════ */}
      <section
        className="section-pad relative overflow-hidden"
        style={{ background: 'oklch(0.10 0.028 250)' }}
      >
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="container-xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
          >
            <span className="section-tag">Depoimentos Reais</span>
           <p className="mt-4 mb-4 text-sm md:text-base" style={{ color: 'oklch(0.58 0.010 250)' }}>
  Mais de 100.000 alunos já passaram por aqui. Alguns deles começaram exatamente como você.
</p>
            <h2 className="section-headline mb-4">
              Histórias de quem<br />
              <span className="text-gradient-static">transformou a carreira</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </div>
        <div className="section-divider absolute bottom-0 left-0 right-0" />
      </section>

      {/* ══════════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════════ */}
      <section
        className="section-pad relative overflow-hidden"
        style={{ background: 'var(--brand-navy)' }}
      >
        <div className="orb orb-blue" style={{ width: '700px', height: '600px', top: '-30%', left: '50%', transform: 'translateX(-50%)', opacity: 0.35 }} />
        <div className="bg-dot-grid absolute inset-0 opacity-30" />
        <div className="container-xl relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 240, damping: 28 }}
          >
            <span className="section-tag pill-badge-cyan mb-8 inline-flex">Próximo passo</span>
            <h2 className="hero-headline mb-6" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
              <span style={{ color: 'oklch(0.93 0.006 250)' }}>Seu próximo nível começa</span>
<br />
<span className="text-gradient">com uma decisão.</span>
            </h2>
            <p className="text-lg mb-10" style={{ color: 'oklch(0.55 0.010 250)' }}>
              Você pode continuar como está ou começar hoje a construir uma carreira em dados. Fale com um especialista e descubra qual caminho faz mais sentido para você.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base px-10 py-5">
                <MessageCircle className="w-5 h-5" />
                Falar com Especialista
              </a>
              <Link to={ROUTE_PATHS.CONTATO} className="btn-ghost text-base px-10 py-5">
                Enviar Mensagem
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
