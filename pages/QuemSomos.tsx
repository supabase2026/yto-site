import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award, Users, Globe, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { StatCard } from '@/components/Cards';
import { ROUTE_PATHS, COMPANY_STATS, WHATSAPP_LINK } from '@/lib/index';
import { COMPANY_VALUES, FOUNDER_INFO } from '@/data/index';
import { IMAGES } from '@/assets/images';

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { type: 'spring', stiffness: 300, damping: 35 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function QuemSomos() {
  return (
    <Layout>
      {/* ═══ HERO ═══ */}
      <section
        className="relative py-32 overflow-hidden flex items-center justify-center"
        style={{ background: 'var(--brand-navy)', minHeight: '55vh' }}
      >
        <div className="absolute inset-0 z-0">
          <img src={IMAGES.CORPORATE_2} alt="" className="w-full h-full object-cover" style={{ opacity: 0.14 }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, var(--brand-navy)/0.7 0%, var(--brand-navy) 100%)' }} />
        </div>
        <div className="orb orb-blue" style={{ width: '600px', height: '600px', top: '-20%', right: '-10%', opacity: 0.35 }} />
        <div className="bg-dot-grid absolute inset-0 opacity-30" />
        <div className="container-xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
          >
            <span className="pill-badge mb-8 inline-flex">Nossa história</span>
            <h1 className="hero-headline mb-6">
              <span style={{ color: 'oklch(0.93 0.006 250)' }}>Quem </span>
              <span className="text-gradient">Somos</span>
            </h1>
            <p className="hero-sub mx-auto">
              Transformando vidas através da educação em dados há mais de duas décadas
            </p>
          </motion.div>
        </div>
      </section>


      {/* ═══ HISTÓRIA ═══ */}
      <section className="section-pad" style={{ background: 'var(--brand-navy)' }}>
        <div className="section-divider" style={{ position: 'absolute', top: 0, left: 0, right: 0 }} />
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 260, damping: 30 }}
            >
              <span className="section-tag">Nossa Trajetória</span>
              <h2 className="section-headline mb-8">
                26 anos formando<br />
                <span className="text-gradient-static">líderes em dados</span>
              </h2>
              <div className="space-y-5">
                {[
                  'O <strong>Grupo Yto Nihon</strong> nasceu da visão de democratizar o acesso à educação em tecnologia e dados. Fundada por Eduardo Yto, a empresa iniciou sua jornada com o compromisso de formar profissionais capacitados para os desafios do mercado global.',
                  'Ao longo desses 26 anos, construímos uma trajetória sólida de excelência educacional, formando mais de 100 mil alunos e atendendo mais de 200 empresas em mais de 50 países. Nossa metodologia prática e professores experientes do mercado garantem que cada aluno desenvolva habilidades reais e aplicáveis.',
                  'Hoje, somos referência em educação de dados no Brasil, oferecendo desde cursos livres até pós-graduação reconhecida pelo MEC. Nossa missão permanece a mesma: transformar dados em oportunidades de carreira.'
                ].map((text, i) => (
                  <p key={i} className="text-base leading-relaxed" style={{ color: 'oklch(0.60 0.012 250)' }}
                    dangerouslySetInnerHTML={{ __html: text.replace('<strong>', '<strong style="color:oklch(0.88 0.008 250)">') }}
                  />
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 260, damping: 30, delay: 0.15 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid oklch(0.28 0.040 250 / 0.40)' }}>
                <img src={IMAGES.TURMA_FECHADA_NO_ESCRITO_RIO_DO_GRUPO_YTO_NIHON_39} alt="Turma Grupo Yto Nihon" className="w-full h-80 object-cover" style={{ opacity: 0.92 }} />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, oklch(0.10 0.032 250) 0%, transparent 50%)' }} />
              </div>
              {/* Floating stat */}
              <div
                className="absolute -bottom-5 -left-5 rounded-xl p-5"
                style={{ background: 'oklch(0.14 0.028 250)', border: '1px solid oklch(0.30 0.045 250 / 0.50)', backdropFilter: 'blur(20px)' }}
              >
                <div className="text-3xl font-bold mb-1" style={{ fontFamily: 'var(--font-heading)', color: 'oklch(0.72 0.20 250)' }}>26+</div>
                <div className="text-xs" style={{ color: 'oklch(0.55 0.010 250)' }}>Anos de experiência</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ═══ MISSÃO / VISÃO / VALORES ═══ */}
      <section className="section-pad relative overflow-hidden" style={{ background: 'oklch(0.11 0.026 252)' }}>
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="orb orb-cyan" style={{ width: '500px', height: '500px', bottom: '-20%', left: '-10%', opacity: 0.25 }} />
        <div className="container-xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
            className="text-center mb-16"
          >
            <span className="section-tag pill-badge-cyan">Nossos pilares</span>
            <h2 className="section-headline mb-4">Missão, Visão e Valores</h2>
            <p className="section-subline mx-auto">Os princípios que guiam nossa atuação e compromisso com a excelência educacional.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {COMPANY_VALUES.map((value, index) => {
              const icons = [Target, Eye, Heart];
              const Icon = icons[index];
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 260, damping: 30, delay: index * 0.10 }}
                  className="glass-card-hover p-8 h-full"
                >
                  <div className="icon-box-lg mb-6">
                    <Icon className="w-7 h-7" style={{ color: 'oklch(0.72 0.20 250)' }} />
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'oklch(0.90 0.006 250)' }}>{value.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'oklch(0.58 0.012 250)' }}>{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className="section-divider absolute bottom-0 left-0 right-0" />
      </section>


      {/* ═══ FUNDADOR ═══ */}
      <section className="section-pad" style={{ background: 'var(--brand-navy)' }}>
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
            className="text-center mb-16"
          >
            <span className="section-tag">Liderança</span>
            <h2 className="section-headline mb-4">Nosso Fundador</h2>
            <p className="section-subline mx-auto">Liderança e expertise que transformam educação em resultados concretos.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 260, damping: 30 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden relative" style={{ border: '1px solid oklch(0.28 0.040 250 / 0.40)' }}>
                <img src={IMAGES.FUNDADOR_YTO_NIHON_EDUARDO_YTO_49} alt={FOUNDER_INFO.name} className="w-full aspect-[4/3] object-cover" style={{ opacity: 0.92 }} />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, oklch(0.10 0.032 250) 0%, transparent 55%)' }} />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-base font-bold"
                      style={{ background: 'linear-gradient(135deg, oklch(0.56 0.23 250) 0%, oklch(0.62 0.24 240) 100%)', color: 'white', fontFamily: 'var(--font-heading)' }}
                    >EY</div>
                    <div>
                      <div className="font-bold text-lg" style={{ color: 'oklch(0.95 0.006 250)', fontFamily: 'var(--font-heading)' }}>{FOUNDER_INFO.name}</div>
                      <div className="text-sm" style={{ color: 'oklch(0.65 0.012 250)' }}>{FOUNDER_INFO.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 260, damping: 30, delay: 0.15 }}
              className="space-y-7"
            >
              <div className="flex gap-4 items-start">
                <div className="icon-box flex-shrink-0"><Award className="w-5 h-5" style={{ color: 'oklch(0.72 0.20 250)' }} /></div>
                <div>
                  <div className="text-3xl font-bold" style={{ fontFamily: 'var(--font-heading)', color: 'oklch(0.72 0.20 250)' }}>{FOUNDER_INFO.experience}</div>
                  <div className="text-sm mt-0.5" style={{ color: 'oklch(0.55 0.010 250)' }}>de experiência em educação</div>
                </div>
              </div>
              <p className="text-base leading-relaxed" style={{ color: 'oklch(0.60 0.012 250)' }}>{FOUNDER_INFO.bio}</p>
              <div className="flex flex-wrap gap-2.5">
                {['Business Intelligence', 'Data Analytics', 'Educação Corporativa', 'Power BI', 'Python'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-lg text-xs font-semibold"
                    style={{ background: 'oklch(0.56 0.23 250 / 0.12)', border: '1px solid oklch(0.56 0.23 250 / 0.25)', color: 'oklch(0.75 0.18 250)' }}
                  >{tag}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ═══ IMPACTO ═══ */}
      <section className="py-20 relative" style={{ background: 'oklch(0.12 0.028 250)' }}>
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
            className="text-center mb-16"
          >
            <span className="section-tag">Nosso Impacto</span>
            <h2 className="section-headline mb-4">Números que comprovam<br /><span className="text-gradient-static">nossa dedicação</span></h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
            <StatCard label="Alunos Formados" value={COMPANY_STATS.STUDENTS} delay={0} icon="Users" />
            <StatCard label="Empresas Atendidas" value={COMPANY_STATS.COMPANIES} delay={0.08} icon="Building2" />
            <StatCard label="Países" value={COMPANY_STATS.COUNTRIES} delay={0.16} icon="Globe" />
            <StatCard label="Anos de Experiência" value={COMPANY_STATS.YEARS} delay={0.24} icon="Award" />
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: Users, title: 'Professores Especialistas', desc: 'Consultores e profissionais atuantes no mercado nacional e internacional' },
              { icon: Globe, title: 'Alcance Global', desc: 'Presença em mais de 50 países com certificações com validade internacional' },
              { icon: Award, title: 'Reconhecimento MEC', desc: 'Pós-graduação com diploma reconhecido pelo Ministério da Educação' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 260, damping: 30, delay: i * 0.1 }}
                className="feature-card p-7 flex flex-col items-center text-center"
              >
                <div className="icon-box mb-5"><Icon className="w-5 h-5" style={{ color: 'oklch(0.72 0.20 250)' }} /></div>
                <h3 className="font-bold mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'oklch(0.90 0.006 250)' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'oklch(0.55 0.010 250)' }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="section-divider absolute bottom-0 left-0 right-0" />
      </section>


      {/* ═══ CTA ═══ */}
      <section className="section-pad relative overflow-hidden" style={{ background: 'var(--brand-navy)' }}>
        <div className="orb orb-blue" style={{ width: '600px', height: '500px', top: '-30%', left: '50%', transform: 'translateX(-50%)', opacity: 0.30 }} />
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
            <p className="section-subline mx-auto mb-10">Junte-se a mais de 100 mil profissionais que já transformaram suas carreiras com o Grupo Yto Nihon.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={ROUTE_PATHS.SOLUCOES} className="btn-primary">
                Conheça Nossas Soluções <ArrowRight className="w-5 h-5" />
              </Link>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <MessageCircle className="w-5 h-5" /> Falar no WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}