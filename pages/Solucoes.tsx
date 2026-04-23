import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { SolutionCard, DifferentialCard } from '@/components/Cards';
import { SOLUTIONS, DIFFERENTIALS } from '@/data/index';
import { WHATSAPP_LINK } from '@/lib/index';
import { IMAGES } from '@/assets/images';
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';

export default function Solucoes() {
  return (
    <Layout>
      {/* ═══ HERO ═══ */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{ background: 'var(--brand-navy)', minHeight: '55vh', paddingTop: '6rem', paddingBottom: '6rem' }}
      >
        <div className="absolute inset-0 z-0">
          <img src={IMAGES.DASHBOARD_1} alt="" className="w-full h-full object-cover" style={{ opacity: 0.14 }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, oklch(0.10 0.032 250 / 0.8), var(--brand-navy))' }} />
        </div>
        <div className="orb orb-blue" style={{ width: '700px', height: '600px', top: '-30%', left: '-15%', opacity: 0.35 }} />
        <div className="orb orb-cyan" style={{ width: '500px', height: '400px', bottom: '-20%', right: '-5%', opacity: 0.25 }} />
        <div className="bg-dot-grid absolute inset-0 opacity-30" />
        <div className="container-xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
          >
            <span className="pill-badge mb-8 inline-flex">Nossas Soluções</span>
            <h1 className="hero-headline mb-6">
              <span style={{ color: 'oklch(0.93 0.006 250)' }}>Transforme sua carreira</span><br />
              <span className="text-gradient">com dados</span>
            </h1>
            <p className="hero-sub mx-auto">
              Escolha a solução ideal para seu momento. Do iniciante ao especialista, temos o caminho certo para você.
            </p>
          </motion.div>
        </div>
      </section>


      {/* ═══ SOLUTIONS GRID ═══ */}
      <section className="section-pad relative" style={{ background: 'oklch(0.11 0.026 252)' }}>
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
            className="text-center mb-16"
          >
            <span className="section-tag">Programas</span>
            <h2 className="section-headline mb-4">Nossas principais<br /><span className="text-gradient-static">soluções</span></h2>
            <p className="section-subline mx-auto">Programas completos de educação em dados, desenvolvidos para diferentes objetivos e níveis de experiência.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {SOLUTIONS.map((solution) => (
              <SolutionCard key={solution.id} solution={solution} />
            ))}
          </div>
        </div>
        <div className="section-divider absolute bottom-0 left-0 right-0" />
      </section>


      {/* ═══ DIFERENCIAIS ═══ */}
      <section className="section-pad relative" style={{ background: 'var(--brand-navy)' }}>
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
            className="text-center mb-16"
          >
            <span className="section-tag pill-badge-cyan">Por que a Yto Nihon</span>
            <h2 className="section-headline mb-4">Por que escolher o<br /><span className="text-gradient-static">Grupo Yto Nihon?</span></h2>
            <p className="section-subline mx-auto">Mais de 24 anos de experiência transformando profissionais em especialistas reconhecidos pelo mercado.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {DIFFERENTIALS.map((d, i) => (
              <DifferentialCard key={i} differential={d} />
            ))}
          </div>

          {/* Results proof */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
            className="glass-card p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="font-bold text-xl mb-5" style={{ fontFamily: 'var(--font-heading)', color: 'oklch(0.90 0.006 250)' }}>Resultados Comprovados</h3>
                <ul className="space-y-3">
                  {['+120.000 alunos formados em todo o mundo', '+200 empresas atendidas com soluções corporativas', 'Presença em +50 países ao redor do globo', '24+ anos de excelência em educação'].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4.5 h-4.5 flex-shrink-0 mt-0.5" style={{ color: 'oklch(0.72 0.20 250)' }} />
                      <span className="text-sm" style={{ color: 'oklch(0.60 0.012 250)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-5" style={{ fontFamily: 'var(--font-heading)', color: 'oklch(0.90 0.006 250)' }}>Certificações Reconhecidas</h3>
                <ul className="space-y-3">
                  {['Diploma MEC reconhecido (Pós-Graduação)', '16 certificados internacionais (Data Analytics)', 'Certificados de conclusão em todos os cursos', 'Validade internacional reconhecida'].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4.5 h-4.5 flex-shrink-0 mt-0.5" style={{ color: 'oklch(0.74 0.18 195)' }} />
                      <span className="text-sm" style={{ color: 'oklch(0.60 0.012 250)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="section-pad relative overflow-hidden" style={{ background: 'oklch(0.11 0.026 252)' }}>
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="orb orb-blue" style={{ width: '600px', height: '500px', top: '-30%', left: '50%', transform: 'translateX(-50%)', opacity: 0.28 }} />
        <div className="bg-dot-grid absolute inset-0 opacity-25" />
        <div className="container-xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 240, damping: 28 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="section-headline mb-5">Pronto para transformar<br /><span className="text-gradient-static">sua carreira?</span></h2>
            <p className="section-subline mx-auto mb-10">Fale com nossos especialistas e descubra qual solução é ideal para você. Atendimento personalizado via WhatsApp.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <MessageCircle className="w-5 h-5" /> Falar no WhatsApp
              </a>
              <a href="#" className="btn-ghost">
                Ver Todas as Soluções <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}