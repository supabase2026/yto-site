import { motion } from 'framer-motion';
import {
  MessageCircle,
  Target,
  Users,
  CheckCircle2,
  Compass,
  BarChart3,
  FileSpreadsheet,
  Database,
  CalendarDays,
  Brain,
  Star,
  ChevronRight,
  HelpCircle,
} from 'lucide-react';
import { Layout } from '@/components/Layout';
import { WHATSAPP_LINK } from '@/lib/index';

const WHATSAPP_MENTORIA =
  'https://wa.me/5511910704164?text=Ol%C3%A1!%20Tenho%20interesse%20na%20Mentoria%20VIP%20do%20Grupo%20Yto%20Nihon.';

const areas = [
  { icon: FileSpreadsheet, title: 'Excel', desc: 'Apoio para dominar análises, fórmulas, dashboards, Power Query e automações.' },
  { icon: BarChart3, title: 'Power BI', desc: 'Direcionamento para criar dashboards, indicadores, modelagem e relatórios profissionais.' },
  { icon: Database, title: 'SQL Server', desc: 'Mentoria para consultas, lógica de banco de dados, análise e estruturação de informações.' },
  { icon: CalendarDays, title: 'MS Project', desc: 'Acompanhamento para cronogramas, recursos, linha de base e gestão de projetos.' },
  { icon: Brain, title: 'Carreira em Dados', desc: 'Orientação para transição de carreira, portfólio, estudos e próximos passos profissionais.' },
  { icon: Compass, title: 'Projetos e dúvidas reais', desc: 'Ajuda prática em desafios do trabalho, estudos, dashboards, apresentações e entregas.' },
];

const audience = [
  'Profissionais que estudam, mas ainda se sentem perdidos',
  'Alunos que precisam de acompanhamento individual',
  'Pessoas em transição para a área de dados',
  'Profissionais que precisam resolver dúvidas reais do trabalho',
  'Quem quer acelerar o aprendizado com orientação direta',
  'Quem precisa montar dashboards, projetos ou apresentações',
];

const steps = [
  {
    num: '01',
    title: 'Diagnóstico inicial',
    desc: 'Entendemos seu momento atual, nível técnico, objetivo profissional e principais dificuldades.',
  },
  {
    num: '02',
    title: 'Plano personalizado',
    desc: 'Montamos uma rota prática com prioridades, ferramentas, estudos e entregas reais.',
  },
  {
    num: '03',
    title: 'Acompanhamento VIP',
    desc: 'Você recebe orientação direta para evoluir com mais clareza, foco e segurança.',
  },
];

const faqs = [
  {
    question: 'A Mentoria VIP é um curso?',
    answer:
      'Não. A Mentoria VIP é um acompanhamento personalizado. O foco não é apenas assistir aulas, mas receber direção, orientação prática e apoio em dúvidas reais.',
  },
  {
    question: 'Quais ferramentas podem ser trabalhadas?',
    answer:
      'A mentoria pode envolver Excel, Power BI, SQL Server, MS Project, análise de dados, dashboards, carreira e projetos profissionais.',
  },
  {
    question: 'A mentoria pode ajudar em dúvidas do trabalho?',
    answer:
      'Sim. A proposta é justamente ajudar o aluno ou profissional a avançar em desafios reais, como relatórios, dashboards, cronogramas, análises e apresentações.',
  },
  {
    question: 'A mentoria é individual?',
    answer:
      'A proposta principal é atendimento individual ou em grupos reduzidos, dependendo da necessidade e disponibilidade.',
  },
];

export default function MentoriaVIP() {
  return (
    <Layout>
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          background: 'oklch(0.08 0.018 250)',
          minHeight: '80vh',
          paddingTop: '5rem',
          paddingBottom: '5rem',
        }}
      >
        <div className="orb orb-blue" style={{ width: '620px', height: '520px', top: '-20%', right: '-10%', opacity: 0.2 }} />
        <div className="orb orb-cyan" style={{ width: '420px', height: '420px', bottom: '-15%', left: '-8%', opacity: 0.18 }} />
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
                <Star className="w-3.5 h-3.5" /> Atendimento personalizado
              </span>

              <h1
                className="font-bold mb-6 leading-tight"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3.3rem)',
                  color: 'oklch(0.96 0.006 250)',
                  fontFamily: 'var(--font-heading)',
                }}
              >
                Mentoria VIP em{' '}
                <span className="text-gradient">dados, ferramentas e carreira</span>
              </h1>

              <p className="text-lg mb-10 max-w-2xl" style={{ color: 'oklch(0.62 0.012 250)', lineHeight: 1.7 }}>
                Acompanhamento estratégico para quem precisa de direção, prática e clareza para evoluir em Excel,
                Power BI, SQL Server, MS Project ou carreira na área de dados.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={WHATSAPP_MENTORIA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold transition-all duration-200 hover:scale-105"
                  style={{
                    background: 'oklch(0.56 0.23 250)',
                    color: 'white',
                    boxShadow: '0 8px 24px oklch(0.56 0.23 250 / 0.35)',
                  }}
                >
                  Quero participar da mentoria <ChevronRight className="w-4 h-4" />
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

      <section className="section-pad" style={{ background: 'oklch(0.10 0.022 250)' }}>
        <div className="container-xl max-w-3xl text-center">
          <span className="section-tag">Direção personalizada</span>
          <h2 className="section-headline mb-6">
            Você não precisa aprender tudo sozinho
          </h2>
          <p className="text-base mb-4" style={{ color: 'oklch(0.60 0.010 250)', lineHeight: 1.8 }}>
            Muitas pessoas estudam Excel, Power BI, SQL ou dados, mas travam quando precisam aplicar o conhecimento
            em situações reais.
          </p>
          <p className="text-base" style={{ color: 'oklch(0.60 0.010 250)', lineHeight: 1.8 }}>
            A Mentoria VIP existe para encurtar esse caminho, com orientação prática, direcionamento individual e foco no que realmente importa para sua evolução.
          </p>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'oklch(0.09 0.020 250)' }}>
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="section-tag">Aplicações práticas</span>
            <h2 className="section-headline mb-4">O que pode ser trabalhado na mentoria</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: 'oklch(0.56 0.010 250)' }}>
              A mentoria pode ser direcionada para dúvidas técnicas, projetos profissionais, carreira, portfólio e evolução prática.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {areas.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
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
                  <item.icon className="w-5 h-5" style={{ color: 'oklch(0.68 0.20 250)' }} />
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: 'oklch(0.90 0.006 250)', fontFamily: 'var(--font-heading)' }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'oklch(0.55 0.010 250)' }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'oklch(0.11 0.024 250)' }}>
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="section-tag">Perfil ideal</span>
            <h2 className="section-headline mb-4">Para quem é a Mentoria VIP</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {audience.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 rounded-xl p-5"
                style={{
                  background: 'oklch(0.13 0.026 250 / 0.85)',
                  border: '1px solid oklch(0.24 0.034 250 / 0.50)',
                }}
              >
                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'oklch(0.62 0.18 160)' }} />
                <p className="text-sm" style={{ color: 'oklch(0.70 0.010 250)' }}>
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'oklch(0.09 0.020 250)' }}>
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="section-tag">Metodologia</span>
            <h2 className="section-headline mb-4">Como funciona a mentoria</h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: 'oklch(0.56 0.010 250)' }}>
              Um processo simples, direto e personalizado para dar clareza ao seu próximo passo.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-7 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 18 }}
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

      <section className="section-pad" style={{ background: 'oklch(0.10 0.022 250)' }}>
        <div className="container-xl max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-tag">Dúvidas frequentes</span>
            <h2 className="section-headline mb-4">Perguntas sobre a Mentoria VIP</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: 'oklch(0.56 0.010 250)' }}>
              Informações úteis para quem busca orientação personalizada em dados, carreira e ferramentas profissionais.
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
              <Target className="w-7 h-7" style={{ color: 'oklch(0.68 0.20 250)' }} />
            </div>

            <h2 className="section-headline mb-5">Receba orientação para o seu próximo passo</h2>

            <p className="text-base mb-10 max-w-xl mx-auto" style={{ color: 'oklch(0.56 0.012 250)', lineHeight: 1.7 }}>
              Fale com nossa equipe e entenda se a Mentoria VIP é o melhor caminho para acelerar sua evolução em dados,
              ferramentas ou carreira profissional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WHATSAPP_MENTORIA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold transition-all duration-200 hover:scale-105"
                style={{
                  background: 'oklch(0.56 0.23 250)',
                  color: 'white',
                  boxShadow: '0 8px 28px oklch(0.56 0.23 250 / 0.35)',
                }}
              >
                Quero participar da mentoria <ChevronRight className="w-4 h-4" />
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
              {['Atendimento individual ou reduzido', 'Plano personalizado', 'Foco em evolução prática'].map((b) => (
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
