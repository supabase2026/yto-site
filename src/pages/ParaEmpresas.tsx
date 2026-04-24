import { motion } from 'framer-motion';
import {
  Building2,
  Users,
  TrendingUp,
  CheckCircle2,
  MessageCircle,
  ChevronRight,
  BarChart3,
  FileSpreadsheet,
  Database,
  Brain,
  CalendarDays,
  HelpCircle,
} from 'lucide-react';
import { Layout } from '@/components/Layout';
import { WHATSAPP_LINK } from '@/lib/index';
import { IMAGES } from '@/assets/images';

const stats = [
  { value: '+100.000', label: 'Profissionais capacitados' },
  { value: '+200', label: 'Empresas atendidas' },
  { value: '26+', label: 'Anos de experiência' },
  { value: '+50', label: 'Países com alunos' },
];

const steps = [
  {
    num: '01',
    title: 'Diagnóstico',
    desc: 'Entendemos as necessidades da equipe, o nível atual dos colaboradores e os desafios reais da empresa.',
  },
  {
    num: '02',
    title: 'Treinamento personalizado',
    desc: 'Estruturamos uma capacitação sob medida, com conteúdo, carga horária e metodologia alinhados ao contexto do negócio.',
  },
  {
    num: '03',
    title: 'Aplicação prática',
    desc: 'Conduzimos o treinamento com foco em exercícios, cases, ferramentas e situações próximas da rotina da equipe.',
  },
];

const trainings = [
  {
    icon: FileSpreadsheet,
    title: 'Excel Corporativo',
    desc: 'Treinamentos de Excel do básico ao avançado, com dashboards, fórmulas, tabelas dinâmicas, Power Query, VBA e automação.',
  },
  {
    icon: BarChart3,
    title: 'Power BI',
    desc: 'Dashboards executivos, modelagem de dados, indicadores, relatórios gerenciais e análise visual para tomada de decisão.',
  },
  {
    icon: Database,
    title: 'SQL Server',
    desc: 'Consultas, manipulação, análise e estruturação de dados em bancos relacionais para equipes técnicas e analíticas.',
  },
  {
    icon: Brain,
    title: 'Inteligência Artificial',
    desc: 'IA aplicada ao negócio, produtividade, análise, automação, prompts e uso prático de ferramentas inteligentes.',
  },
  {
    icon: CalendarDays,
    title: 'MS Project',
    desc: 'Gestão de projetos, cronogramas, recursos, linha de base, acompanhamento e controle com Microsoft Project.',
  },
  {
    icon: TrendingUp,
    title: 'Business Intelligence',
    desc: 'Estratégia de BI, cultura data-driven, indicadores de performance e capacitação para decisões orientadas por dados.',
  },
];

const companies = [
  'Grupo HDI',
  'Europ Assistance',
  "McDonald's",
  'Votorantim Cimentos',
  'Arkema',
  'Martin Brower',
  'Zara',
  'Aché',
  'Supera RX',
  'Bradesco Seguros',
  'Reckitt',
  'MPD Engenharia',
  'Grupo Gaia',
  'Souza Cruz',
  'EspaçoLaser',
  'Samech',
];

const galleryImages = [
  { src: IMAGES.SOUZA_CRUZ_IN_COMPANY_POWER_BI_36, label: 'Power BI — Souza Cruz' },
  { src: IMAGES.BRADESCO_SEGUROS_IN_COMPANY_MS_PROJECT_38, label: 'MS Project — Bradesco Seguros' },
  { src: IMAGES.GRUPO_GAIA_IN_COMPANY_EXCEL_40, label: 'Excel — Grupo Gaia' },
  { src: IMAGES.ARKEMA_IN_COMPANY_EXCEL_43, label: 'Excel — Arkema' },
  { src: IMAGES.RECKITT_POWER_BI_44, label: 'Power BI — Reckitt' },
  { src: IMAGES.GRUPO_HDI_POWER_BI_46, label: 'Power BI — Grupo HDI' },
];

const faqs = [
  {
    question: 'Quais treinamentos corporativos o Grupo Yto Nihon oferece?',
    answer:
      'O Grupo Yto Nihon oferece treinamentos corporativos em Excel, Power BI, SQL Server, Inteligência Artificial, MS Project, Business Intelligence e outras soluções voltadas para dados, tecnologia e produtividade.',
  },
  {
    question: 'Os treinamentos podem ser personalizados para a empresa?',
    answer:
      'Sim. A proposta é construída considerando o nível da equipe, os objetivos da empresa, a carga horária desejada e os desafios reais do negócio.',
  },
  {
    question: 'Os treinamentos podem ser presenciais ou online?',
    answer:
      'Sim. Os treinamentos podem ser realizados presencialmente, online ao vivo ou em formatos híbridos, conforme a necessidade da empresa.',
  },
  {
    question: 'A empresa recebe certificado para os participantes?',
    answer:
      'Sim. Os participantes podem receber certificado de participação conforme o treinamento contratado e a carga horária realizada.',
  },
];

const WHATSAPP_PROPOSTA =
  'https://wa.me/5511910704164?text=Ol%C3%A1!%20Tenho%20interesse%20em%20treinamentos%20corporativos%20para%20minha%20equipe.%20Gostaria%20de%20receber%20uma%20proposta.';

export default function ParaEmpresas() {
  return (
    <Layout>
      {/* HERO */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          background: 'oklch(0.08 0.018 250)',
          minHeight: '80vh',
          paddingTop: '5rem',
          paddingBottom: '5rem',
        }}
      >
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.TURMA_FECHADA_NO_ESCRITO_RIO_DO_GRUPO_YTO_NIHON_39}
            alt="Treinamento corporativo em dados, Excel e Power BI realizado pelo Grupo Yto Nihon"
            className="w-full h-full object-cover"
            style={{ opacity: 0.12, filter: 'grayscale(40%) brightness(0.7)' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, oklch(0.07 0.018 250 / 0.90), oklch(0.08 0.018 250) 85%)',
            }}
          />
        </div>

        <div className="orb orb-blue" style={{ width: '600px', height: '500px', top: '-20%', right: '-10%', opacity: 0.18 }} />
        <div className="bg-dot-grid absolute inset-0 opacity-20" />

        <div className="container-xl relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 240, damping: 28 }}
            >
              <span
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold mb-7"
                style={{
                  background: 'oklch(0.56 0.23 250 / 0.12)',
                  border: '1px solid oklch(0.56 0.23 250 / 0.28)',
                  color: 'oklch(0.72 0.18 250)',
                }}
              >
                <Building2 className="w-3.5 h-3.5" /> Soluções corporativas
              </span>

              <h1
                className="font-bold mb-6 leading-tight"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                  color: 'oklch(0.96 0.006 250)',
                  fontFamily: 'var(--font-heading)',
                }}
              >
                Treinamentos corporativos em{' '}
                <span className="text-gradient">dados, tecnologia e produtividade</span>
              </h1>

              <p className="text-lg mb-10 max-w-2xl" style={{ color: 'oklch(0.62 0.012 250)', lineHeight: 1.7 }}>
                Capacite sua equipe com treinamentos práticos em Excel, Power BI, SQL, Inteligência Artificial e MS Project,
                aplicados à realidade da sua empresa.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={WHATSAPP_PROPOSTA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold transition-all duration-200 hover:scale-105"
                  style={{
                    background: 'oklch(0.56 0.23 250)',
                    color: 'white',
                    boxShadow: '0 8px 24px oklch(0.56 0.23 250 / 0.35)',
                  }}
                >
                  Solicitar proposta <ChevronRight className="w-4 h-4" />
                </a>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold transition-all duration-200 hover:opacity-90"
                  style={{
                    background: 'rgba(37,211,102,0.12)',
                    border: '1.5px solid rgba(37,211,102,0.35)',
                    color: '#25D366',
                  }}
                >
                  <MessageCircle className="w-4 h-4" /> Falar no WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section style={{ background: 'oklch(0.10 0.022 250)', borderTop: '1px solid oklch(0.16 0.026 250 / 0.50)' }}>
        <div className="container-xl py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-14">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center"
              >
                <p className="text-3xl font-bold mb-1" style={{ color: 'oklch(0.72 0.20 250)', fontFamily: 'var(--font-heading)' }}>
                  {s.value}
                </p>
                <p className="text-sm" style={{ color: 'oklch(0.55 0.010 250)' }}>
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: 'oklch(0.44 0.010 250)' }}>
              Empresas que já confiaram na Yto Nihon
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {companies.map((c) => (
                <span
                  key={c}
                  className="px-4 py-2 rounded-lg text-sm font-medium"
                  style={{
                    background: 'oklch(0.13 0.026 250 / 0.80)',
                    border: '1px solid oklch(0.22 0.032 250 / 0.50)',
                    color: 'oklch(0.65 0.014 250)',
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* DOR / CONTEXTO */}
      <section className="section-pad" style={{ background: 'oklch(0.08 0.020 250)' }}>
        <div className="container-xl max-w-3xl text-center">
          <span className="section-tag">Desafio das empresas</span>
          <h2 className="section-headline mb-6">Ferramentas sozinhas não geram resultado</h2>
          <p className="text-base mb-4" style={{ color: 'oklch(0.60 0.010 250)', lineHeight: 1.8 }}>
            Muitas empresas já possuem Excel, Power BI, bancos de dados e ferramentas de inteligência artificial, mas ainda
            enfrentam dificuldades para transformar esses recursos em produtividade, análise e tomada de decisão.
          </p>
          <p className="text-base" style={{ color: 'oklch(0.60 0.010 250)', lineHeight: 1.8 }}>
            O Grupo Yto Nihon ajuda equipes a usar tecnologia de forma prática, aplicada e conectada aos objetivos do negócio.
          </p>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="section-pad" style={{ background: 'oklch(0.09 0.020 250)' }}>
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="section-tag">Metodologia</span>
            <h2 className="section-headline mb-4">Como funciona o treinamento corporativo</h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: 'oklch(0.56 0.010 250)' }}>
              Um processo estruturado para transformar necessidade de capacitação em evolução prática da equipe.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-7 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-2xl p-7"
                style={{
                  background: 'oklch(0.12 0.025 250 / 0.90)',
                  border: '1px solid oklch(0.22 0.032 250 / 0.50)',
                }}
              >
                <span
                  className="text-5xl font-black mb-4 block leading-none"
                  style={{ color: 'oklch(0.56 0.23 250 / 0.22)', fontFamily: 'var(--font-heading)' }}
                >
                  {step.num}
                </span>
                <h3 className="text-lg font-bold mb-3" style={{ color: 'oklch(0.92 0.006 250)', fontFamily: 'var(--font-heading)' }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'oklch(0.56 0.010 250)' }}>
                  {step.desc}
                </p>

                {i < steps.length - 1 && (
                  <ChevronRight
                    className="hidden md:block absolute -right-3.5 top-1/2 -translate-y-1/2 w-7 h-7"
                    style={{ color: 'oklch(0.36 0.060 250 / 0.60)' }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TREINAMENTOS */}
      <section className="section-pad" style={{ background: 'oklch(0.11 0.024 250)' }}>
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="section-tag">Portfólio</span>
            <h2 className="section-headline mb-4">Treinamentos corporativos disponíveis</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: 'oklch(0.56 0.010 250)' }}>
              Capacitações técnicas e práticas para empresas que desejam desenvolver equipes em dados, análise, tecnologia e gestão.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {trainings.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="rounded-2xl p-6"
                style={{
                  background: 'oklch(0.13 0.026 250 / 0.85)',
                  border: '1px solid oklch(0.24 0.034 250 / 0.50)',
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: 'oklch(0.56 0.23 250 / 0.12)',
                    border: '1px solid oklch(0.56 0.23 250 / 0.22)',
                  }}
                >
                  <t.icon className="w-5 h-5" style={{ color: 'oklch(0.68 0.20 250)' }} />
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: 'oklch(0.90 0.006 250)', fontFamily: 'var(--font-heading)' }}>
                  {t.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'oklch(0.55 0.010 250)' }}>
                  {t.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section className="section-pad" style={{ background: 'oklch(0.09 0.020 250)' }}>
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-tag">Treinamentos reais</span>
            <h2 className="section-headline mb-4">Capacitações realizadas em empresas</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: 'oklch(0.56 0.010 250)' }}>
              Registros de treinamentos corporativos realizados com equipes de diferentes setores e níveis de maturidade.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryImages.map((img, i) => (
              <motion.div
                key={img.label}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="relative rounded-2xl overflow-hidden group"
                style={{ border: '1px solid oklch(0.20 0.028 250 / 0.50)', aspectRatio: '4/3' }}
              >
                <img
                  src={img.src}
                  alt={`Treinamento in company de ${img.label} realizado pelo Grupo Yto Nihon`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, oklch(0.07 0.018 250 / 0.80) 0%, transparent 50%)' }} />
                <span className="absolute bottom-3 left-4 text-sm font-semibold" style={{ color: 'oklch(0.90 0.006 250)' }}>
                  {img.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ AIO */}
      <section className="section-pad" style={{ background: 'oklch(0.10 0.022 250)' }}>
        <div className="container-xl max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-tag">Dúvidas frequentes</span>
            <h2 className="section-headline mb-4">Perguntas sobre treinamentos corporativos</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: 'oklch(0.56 0.010 250)' }}>
              Informações úteis para empresas que buscam capacitação prática em dados, tecnologia e produtividade.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl p-6"
                style={{
                  background: 'oklch(0.13 0.026 250 / 0.85)',
                  border: '1px solid oklch(0.24 0.034 250 / 0.50)',
                }}
              >
                <h3 className="text-base font-bold mb-2 flex items-center gap-2" style={{ color: 'oklch(0.92 0.006 250)' }}>
                  <HelpCircle className="w-4 h-4" style={{ color: 'oklch(0.68 0.20 250)' }} />
                  {faq.question}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'oklch(0.58 0.010 250)' }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        className="section-pad"
        style={{
          background: 'oklch(0.08 0.018 250)',
          borderTop: '1px solid oklch(0.16 0.026 250 / 0.50)',
        }}
      >
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-7"
              style={{
                background: 'oklch(0.56 0.23 250 / 0.12)',
                border: '1px solid oklch(0.56 0.23 250 / 0.28)',
              }}
            >
              <Users className="w-7 h-7" style={{ color: 'oklch(0.68 0.20 250)' }} />
            </div>

            <h2 className="section-headline mb-5">Leve a Yto para dentro da sua empresa</h2>

            <p className="text-base mb-10 max-w-xl mx-auto" style={{ color: 'oklch(0.56 0.012 250)', lineHeight: 1.7 }}>
              Solicite uma proposta personalizada e descubra como podemos capacitar sua equipe com treinamentos práticos,
              objetivos e conectados à realidade do seu negócio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WHATSAPP_PROPOSTA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold transition-all duration-200 hover:scale-105"
                style={{
                  background: 'oklch(0.56 0.23 250)',
                  color: 'white',
                  boxShadow: '0 8px 28px oklch(0.56 0.23 250 / 0.35)',
                }}
              >
                Solicitar proposta <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold transition-all duration-200 hover:opacity-90"
                style={{
                  background: 'rgba(37,211,102,0.12)',
                  border: '1.5px solid rgba(37,211,102,0.35)',
                  color: '#25D366',
                }}
              >
                <MessageCircle className="w-4 h-4" /> Falar no WhatsApp
              </a>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3">
              {['Diagnóstico inicial', 'Presencial ou online ao vivo', 'Certificado para participantes'].map((b) => (
                <span key={b} className="inline-flex items-center gap-2 text-sm" style={{ color: 'oklch(0.58 0.012 250)' }}>
                  <CheckCircle2 className="w-4 h-4" style={{ color: 'oklch(0.62 0.18 160)' }} /> {b}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
