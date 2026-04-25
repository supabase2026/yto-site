import { SeoLocal } from '@/components/SeoLocal';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  MessageCircle,
  CheckCircle2,
  BarChart3,
  Users,
  Building2,
  Clock,
  Target,
  HelpCircle,
  ChevronRight,
} from 'lucide-react';
import { Layout } from '@/components/Layout';
import { WHATSAPP_LINK } from '@/lib/index';

const WHATSAPP_POWERBI =
  'https://wa.me/5511910704164?text=Ol%C3%A1!%20Tenho%20interesse%20em%20um%20treinamento%20de%20Power%20BI%20para%20minha%20empresa.%20Gostaria%20de%20receber%20uma%20proposta.';

const stats = [
  { icon: Users, value: '+100.000', label: 'profissionais capacitados' },
  { icon: Building2, value: '+200', label: 'empresas atendidas' },
  { icon: Clock, value: '26+', label: 'anos de experiência' },
];

const topics = [
  'Criação de dashboards corporativos no Power BI',
  'Importação, tratamento e modelagem de dados',
  'Power Query aplicado à rotina empresarial',
  'DAX para criação de medidas e indicadores',
  'Publicação e compartilhamento de relatórios',
  'Boas práticas para análise visual e tomada de decisão',
];

const formats = [
  'Online ao vivo',
  'Presencial in company',
  'Turmas fechadas para empresas',
  'Conteúdo adaptado ao cenário do cliente',
];

const pains = [
  'Relatórios manuais que consomem tempo da equipe',
  'Dificuldade para transformar dados em indicadores claros',
  'Dashboards pouco confiáveis ou sem padronização',
  'Dependência excessiva de planilhas para tomada de decisão',
];

const faqs = [
  {
    question: 'O treinamento de Power BI pode ser personalizado?',
    answer:
      'Sim. O conteúdo pode ser adaptado ao nível da equipe, aos indicadores utilizados pela empresa e aos desafios reais do negócio.',
  },
  {
    question: 'O curso pode ser online ao vivo ou presencial?',
    answer:
      'Sim. O treinamento pode ser realizado online ao vivo, presencial in company ou em formato de turma fechada.',
  },
  {
    question: 'A equipe precisa saber Power BI antes?',
    answer:
      'Não necessariamente. Podemos estruturar o treinamento do zero ou em nível intermediário/avançado, conforme o conhecimento dos participantes.',
  },
  {
    question: 'O treinamento inclui prática?',
    answer:
      'Sim. A metodologia é prática, com exercícios, dashboards, modelagem de dados e situações próximas da realidade corporativa.',
  },
];

function SEO() {
  useEffect(() => {
    document.title = 'Treinamento de Power BI para Empresas | Grupo Yto Nihon';

    const description =
      'Treinamento de Power BI para empresas com foco prático em dashboards, DAX, Power Query, modelagem de dados e tomada de decisão. Capacite sua equipe com especialistas.';

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);

    const schemaId = 'schema-power-bi-empresas';
    const oldSchema = document.getElementById(schemaId);
    if (oldSchema) oldSchema.remove();

    const schema = document.createElement('script');
    schema.id = schemaId;
    schema.type = 'application/ld+json';
    schema.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: 'Treinamento de Power BI para Empresas',
      description:
        'Capacitação corporativa em Power BI com foco em dashboards, DAX, Power Query, modelagem de dados e tomada de decisão.',
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

export default function TreinamentoPowerBIEmpresas() {
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
                <BarChart3 className="w-3.5 h-3.5" />
                Treinamento corporativo de Power BI
              </span>

              <h1
                className="font-bold mb-6 leading-tight"
                style={{
                  fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                  color: 'oklch(0.96 0.006 250)',
                  fontFamily: 'var(--font-heading)',
                }}
              >
                Treinamento de Power BI para Empresas:{' '}
                <span className="text-gradient">dashboards, DAX e tomada de decisão</span>
              </h1>

              <p className="text-lg mb-10 max-w-3xl" style={{ color: 'oklch(0.64 0.012 250)', lineHeight: 1.75 }}>
                Capacite sua equipe em Power BI com treinamento prático, personalizado e aplicado à realidade da empresa,
                desde a criação de dashboards até modelagem de dados, DAX, Power Query e publicação de relatórios.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={WHATSAPP_POWERBI}
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
            Sua empresa ainda depende de relatórios manuais?
          </h2>

          <p className="text-base mb-10 max-w-3xl mx-auto" style={{ color: 'oklch(0.60 0.010 250)', lineHeight: 1.8 }}>
            Muitas empresas possuem dados, mas ainda têm dificuldade para transformar essas informações em dashboards,
            indicadores e decisões estratégicas com Power BI.
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
              O curso de Power BI para empresas pode ser ajustado para diferentes níveis, áreas e objetivos.
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
            Sua equipe também pode complementar a capacitação com nosso{' '}
            <a href="/treinamento-excel-empresas" className="underline" style={{ color: 'oklch(0.68 0.20 250)' }}>
              treinamento de Excel para empresas
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
              A capacitação pode ser desenhada de acordo com a realidade operacional da empresa.
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
            <h2 className="section-headline mb-4">Perguntas sobre treinamento de Power BI para empresas</h2>
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
              <BarChart3 className="w-7 h-7" style={{ color: 'oklch(0.68 0.20 250)' }} />
            </div>

            <h2 className="section-headline mb-5">Solicite uma proposta de Power BI para sua empresa</h2>

            <p className="text-base mb-10 max-w-xl mx-auto" style={{ color: 'oklch(0.56 0.012 250)', lineHeight: 1.7 }}>
              Fale com nossa equipe e receba uma proposta personalizada para capacitar seus colaboradores em Power BI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WHATSAPP_POWERBI}
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
              <Seolocal />
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
