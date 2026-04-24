import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Award, Users, Clock, CheckCircle2, MessageCircle, ChevronDown, ExternalLink, BookOpen, Video, Star } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { WHATSAPP_LINK, MEC_URL } from '@/lib/index';
import { IMAGES } from '@/assets/images';

const courseInfo = [
  { icon: Clock, label: 'Duração', value: '09 meses' },
  { icon: BookOpen, label: 'Formato', value: 'Gravado + Ao vivo' },
  { icon: GraduationCap, label: 'Diploma', value: 'Reconhecido pelo MEC' },
  { icon: Award, label: 'Certificação', value: 'Internacional' },
];

const disciplines = [
  {
    title: 'AWS para Gestão de Dados',
    contents: [
      'Fundamentos de cloud computing com AWS',
      'Armazenamento e gerenciamento de dados na nuvem',
      'Processamento de dados com serviços AWS',
      'Boas práticas de segurança e arquitetura',
    ],
  },
  {
    title: 'Databricks + IA Generativa',
    contents: [
      'Introdução ao Databricks e Apache Spark',
      'Processamento distribuído de dados',
      'Aplicações de IA Generativa',
      'Integração com pipelines de dados',
    ],
  },
  {
    title: 'Data Visualization com Python',
    contents: [
      'Matplotlib, Seaborn e Plotly',
      'Dashboards interativos',
      'Storytelling com dados',
      'Boas práticas de visualização',
    ],
  },
];

function DisciplineAccordion({ discipline, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between px-6 py-4 text-left"
      >
        <span>{discipline.title}</span>
        <ChevronDown className={`transition ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="px-6 pb-4">
          <ul>
            {discipline.contents.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-gray-400">
                <CheckCircle2 className="w-4 h-4 mt-1" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function PosGraduacao() {
  return (
    <Layout>

      {/* HERO */}
      <section className="text-center py-24 relative">
        <img
          src={IMAGES.PO_S_GRADUAC_A_O_EM_GESTA_O_ESTRATE_GICA_DE_DADOS_48}
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />

        <div className="relative z-10 max-w-3xl mx-auto">

          <span className="mb-6 inline-flex items-center gap-2">
            <Award /> Diploma reconhecido pelo MEC
          </span>

          <h1 className="text-4xl font-bold mb-4">
            Pós-Graduação em Gestão Estratégica de Dados
          </h1>

          <h2 className="text-xl text-gray-300 mb-6">
            Formação completa em dados, tecnologia e decisões estratégicas
          </h2>

          <p className="text-gray-400 mb-10">
            Desenvolva competências em análise de dados, engenharia e inteligência artificial,
            conectando tecnologia e negócios para atuar em projetos reais.
          </p>

          <div className="flex justify-center gap-4 mb-10">
            <a href={WHATSAPP_LINK} className="btn-primary">
              Quero fazer parte da próxima turma
            </a>

            <a href={WHATSAPP_LINK} className="btn-whatsapp">
              Falar com especialista
            </a>
          </div>

        </div>
      </section>

      {/* BLOCO INSTITUCIONAL */}
      <section className="text-center py-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">
          O mercado exige mais do que conhecimento técnico
        </h2>

        <p className="text-gray-400 mb-4">
          Profissionais que dominam ferramentas já não se destacam como antes.
        </p>

        <p className="text-gray-400">
          O diferencial está em transformar dados em decisões estratégicas.
        </p>
      </section>

      {/* GRADE */}
      <section className="max-w-4xl mx-auto py-20">
        <h2 className="text-2xl font-bold text-center mb-10">
          Grade Curricular
        </h2>

        <div className="space-y-3">
          {disciplines.map((d, i) => (
            <DisciplineAccordion key={i} discipline={d} index={i} />
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="text-center py-20">
        <h2 className="text-2xl font-bold mb-6">
          Inicie sua evolução profissional
        </h2>

        <p className="text-gray-400 mb-8">
          Fale com nossa equipe e entenda se essa pós é o próximo passo ideal para você.
        </p>

        <a href={WHATSAPP_LINK} className="btn-primary">
          Falar com a equipe
        </a>
      </section>

    </Layout>
  );
}
