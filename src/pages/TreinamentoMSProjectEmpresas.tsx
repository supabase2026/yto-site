import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  MessageCircle,
  CheckCircle2,
  CalendarDays,
  Users,
  Building2,
  Clock,
  Target,
  HelpCircle,
  ChevronRight,
} from 'lucide-react';
import { Layout } from '@/components/Layout';
import { WHATSAPP_LINK } from '@/lib/index';

const WHATSAPP_MSPROJECT =
  'https://wa.me/5511910704164?text=Ol%C3%A1!%20Tenho%20interesse%20em%20um%20treinamento%20de%20MS%20Project%20para%20minha%20empresa.%20Gostaria%20de%20receber%20uma%20proposta.';

const stats = [
  { icon: Users, value: '+100.000', label: 'profissionais capacitados' },
  { icon: Building2, value: '+200', label: 'empresas atendidas' },
  { icon: Clock, value: '26+', label: 'anos de experiência' },
];

const topics = [
  'Criação e estruturação de cronogramas no MS Project',
  'Definição de tarefas, vínculos, marcos e caminho crítico',
  'Planejamento de recursos, duração e custos',
  'Linha de base, acompanhamento e controle do projeto',
  'Relatórios gerenciais e análise de desempenho',
  'Boas práticas para gestão de projetos, obras e equipes',
];

const formats = [
  'Online ao vivo',
  'Presencial in company',
  'Turmas fechadas para empresas',
  'Conteúdo adaptado aos projetos da empresa',
];

const pains = [
  'Cronogramas desatualizados e difíceis de acompanhar',
  'Falta de padronização no planejamento dos projetos',
  'Dificuldade para controlar prazos, recursos e entregas',
  'Pouca visibilidade sobre atrasos, desvios e caminho crítico',
];

const faqs = [
  {
    question: 'O treinamento de MS Project pode ser personalizado?',
    answer:
      'Sim. O conteúdo pode ser adaptado ao tipo de projeto da empresa, nível da equipe, setor de atuação e principais desafios de planejamento e controle.',
  },
  {
    question: 'O curso pode ser online ao vivo ou presencial?',
    answer:
      'Sim. O treinamento pode ser realizado online ao vivo, presencial in company ou em formato de turma fechada.',
  },
  {
    question: 'O treinamento atende equipes de obras e engenharia?',
    answer:
      'Sim. O MS Project é muito utilizado em projetos de obras, engenharia, implantação, manutenção, tecnologia e áreas corporativas que precisam controlar prazos e recursos.',
  },
  {
    question: 'A equipe precisa conhecer gestão de projetos antes?',
    answer:
      'Não necessariamente. Podemos estruturar o treinamento desde os fundamentos ou em nível intermediário, conforme o conhecimento dos participantes.',
  },
];

function SEO() {
  useEffect(() => {
    document.title = 'Treinamento de MS Project para Empresas | Grupo Yto Nihon';

    const description =
      'Treinamento de MS Project para empresas com foco prático em cronogramas, recursos, caminho crítico, linha de base e controle de projetos. Capacite sua equipe com especialistas.';

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);

    const schemaId = 'schema-ms-project-empresas';
    const oldSchema = document.getElementById(schemaId);
    if (oldSchema) oldSchema.remove();

    const schema = document.createElement('script');
    schema.id = schemaId;
    schema.type = 'application/ld+json';
    schema.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: 'Treinamento de MS Project para Empresas',
      description:
        'Capacitação corporativa em Microsoft Project com foco em cronogramas, recursos, caminho crítico, linha de base e controle de projetos.',
      provider: {
        '@type': 'Organization',
        name: 'Grupo Yto Nihon',
        url: 'https://www.grupoytonihon.com.br',
      },
    });
    document.head.appendChild(schema);
  }, []);

  return null;
}

export default function TreinamentoMSProjectEmpresas() {
  return (
    <Layout>
      <SEO />

      <section
        className="relative overflow-hidden"
        style={{
          background: 'oklch(0.08 0.018 250)',
          paddingTop: '6rem',
          paddingBottom: '6rem',
        }}
      >
        <div className="orb orb-blue" style={{ width: '620px', height: '520px', top: '-25%', right: '-10%', opacity: 0.22 }} />
        <div className="bg-dot-grid absolute inset-0 opacity-20" />

        <div className="container-xl relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 240, damping: 28 }}
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-7"
                style={{
                  background: 'oklch(0.56 0.23 250 / 0.12)',
                  border: '1px solid oklch(0.56 0.23 250 / 0.28)',
                  color: 'oklch(0.72 0.18 250)',
                }}
              >
                <CalendarDays className="w-3.5 h-3.5" />
                Treinamento corporativo de MS Project
              </span>

              <h1
                className="font-bold mb-6 leading-tight"
                style={{
                  fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                  color: 'oklch(0.96 0.006 250)',
                  fontFamily: 'var(--font-heading)',
                }}
              >
                Treinamento de MS Project para Empresas:{' '}
                <span className="text-gradient">cronogramas, recursos e controle de projetos</span>
              </h1>

              <p className="text-lg mb-10 max-w-3xl" style={{ color: 'oklch(0.64 0.012 250)', lineHeight: 1.75 }}>
                Capacite sua equipe em Microsoft Project com treinamento prático, personalizado e aplicado à realidade da empresa,
                com foco em cronogramas, caminho crítico, linha de base, recursos, custos e acompanhamento de projetos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={WHATSAPP_MSPROJECT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold transition-all duration-200 hover:scale-105"
                  style={{
                    background: 'oklch(0.56 0.23 250)',
                    color: 'white',
                    boxShadow: '0 8px 28px oklch(0.56 0.23 250 / 0.35)',
                  }}
                >
                  Solicitar proposta de treinamento <ChevronRight className="w-4 h-4" />
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
                  <MessageCircle className="w-4 h-4" />
                  Falar no WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section style={{ background: 'oklch(0.10 0.022 250)', borderTop: '1px solid oklch(0.16 0.026 250 / 0.50)' }}>
        <div className="container-xl py-12">
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl p-6 text-center"
                style={{
                  background: 'oklch(0.13 0.026 250 / 0.85)',
                  border: '1px solid oklch(0.24 0.034 250 / 0.50)',
                }}
              >
                <item.icon className="w-6 h-6 mx-auto mb-3" style={{ color: 'oklch(0.68 0.20 250)' }} />
                <p className="text-3xl font-bold mb-1" style={{ color: 'oklch(0.72 0.20 250)', fontFamily: 'var(--font-heading)' }}>
                  {item.value}
                </p>
                <p className="text-sm" style={{ color: 'oklch(0.56 0.010 250)' }}>
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'oklch(0.09 0.020 250)' }}>
        <div className="container-xl max-w-4xl text-center">
          <span className="section-tag">Desafio das empresas</span>

          <h2 className="section-headline mb-6">
            Sua equipe controla projetos sem padronização?
          </h2>

          <p className="text-base mb-10 max-w-3xl mx-auto" style={{ color: 'oklch(0.60 0.010 250)', lineHeight: 1.8 }}>
            Muitas empresas têm projetos importantes, mas ainda enfrentam dificuldades para planejar cronogramas, controlar prazos,
            acompanhar recursos e enxergar desvios antes que eles virem problemas maiores.
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-left">
            {pains.map((pain) => (
              <div
                key={pain}
                className="flex items-start gap-3 rounded-xl p-5"
                style={{
                  background: 'oklch(0.13 0.026 250 / 0.85)',
                  border: '1px solid oklch(0.24 0.034 250 / 0.50)',
                }}
              >
                <Target className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'oklch(0.68 0.20 250)' }} />
                <span className="text-sm" style={{ color: 'oklch(0.68 0.010 250)' }}>
                  {pain}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--brand-navy)' }}>
        <div className="container-xl max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-tag">Conteúdo do treinamento</span>
            <h2 className="section-headline mb-4">O que sua equipe pode aprender</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: 'oklch(0.56 0.010 250)' }}>
              O curso de MS Project para empresas pode ser ajustado ao tipo de projeto, área, metodologia e maturidade da equipe.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {topics.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="flex items-start gap-3 rounded-xl p-5"
                style={{
                  background: 'oklch(0.13 0.026 250 / 0.85)',
                  border: '1px solid oklch(0.24 0.034 250 / 0.50)',
                }}
              >
                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'oklch(0.62 0.18 160)' }} />
                <span className="text-sm" style={{ color: 'oklch(0.70 0.010 250)' }}>
                  {item}
                </span>
              </motion.div>
            ))}
          </div>

          <p className="text-sm mt-8 text-center" style={{ color: 'oklch(0.54 0.010 250)' }}>
            Quer unir gestão de projetos com indicadores? Veja também nosso{' '}
            <a href="/treinamento-power-bi-empresas" className="underline" style={{ color: 'oklch(0.68 0.20 250)' }}>
              treinamento de Power BI para empresas
            </a>
            .
          </p>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'oklch(0.11 0.024 250)' }}>
        <div className="container-xl max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-tag">Formatos</span>
            <h2 className="section-headline mb-4">Formatos de treinamento para empresas</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: 'oklch(0.56 0.010 250)' }}>
              A capacitação pode ser desenhada de acordo com a realidade operacional, técnica e gerencial da empresa.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-4">
            {formats.map((format) => (
              <div
                key={format}
                className="rounded-2xl p-5 text-center"
                style={{
                  background: 'oklch(0.13 0.026 250 / 0.85)',
                  border: '1px solid oklch(0.24 0.034 250 / 0.50)',
                }}
              >
                <CheckCircle2 className="w-5 h-5 mx-auto mb-3" style={{ color: 'oklch(0.62 0.18 160)' }} />
                <p className="text-sm font-semibold" style={{ color: 'oklch(0.82 0.008 250)' }}>
                  {format}
                </p>
              </div>
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
            <h2 className="section-headline mb-4">Perguntas sobre treinamento de MS Project para empresas</h2>
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
              <CalendarDays className="w-7 h-7" style={{ color: 'oklch(0.68 0.20 250)' }} />
            </div>

            <h2 className="section-headline mb-5">Solicite uma proposta de MS Project para sua empresa</h2>

            <p className="text-base mb-10 max-w-xl mx-auto" style={{ color: 'oklch(0.56 0.012 250)', lineHeight: 1.7 }}>
              Fale com nossa equipe e receba uma proposta personalizada para capacitar seus colaboradores em MS Project.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WHATSAPP_MSPROJECT}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold transition-all duration-200 hover:scale-105"
                style={{
                  background: 'oklch(0.56 0.23 250)',
                  color: 'white',
                  boxShadow: '0 8px 28px oklch(0.56 0.23 250 / 0.35)',
                }}
              >
                Solicitar proposta de treinamento <ChevronRight className="w-4 h-4" />
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
                <MessageCircle className="w-4 h-4" />
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
