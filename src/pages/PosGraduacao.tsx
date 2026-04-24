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
  { title: 'AWS para Gestão de Dados' },
  { title: 'Databricks + IA Generativa' },
  { title: 'Data Visualization com Python' },
  { title: 'Empreendedorismo' },
  { title: 'Engenharia de Dados na Prática' },
  { title: 'Gestão de Projetos em Dados' },
  { title: 'Governança de Dados' },
  { title: 'Modelagem de Dados com SQL Server' },
];

export default function PosGraduacao() {
  return (
    <Layout>

      {/* HERO LIMPO */}
      <section
        className="relative flex items-center justify-center text-center"
        style={{ background: 'var(--brand-navy)', minHeight: '80vh', padding: '6rem 0' }}
      >
        <div className="absolute inset-0">
          <img
            src={IMAGES.PO_S_GRADUAC_A_O_EM_GESTA_O_ESTRATE_GICA_DE_DADOS_48}
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        <div className="container-xl relative z-10 max-w-3xl">
          <span className="pill-badge mb-6 inline-flex items-center gap-2">
            <Award className="w-4 h-4" /> Diploma reconhecido pelo MEC
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Pós-Graduação em Gestão Estratégica de Dados
          </h1>

          <p className="text-lg text-gray-300 mb-10">
            Formação completa para profissionais que desejam evoluir na carreira,
            dominar dados e atuar com visão estratégica no mercado atual.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {courseInfo.map((info) => (
              <div key={info.label} className="px-5 py-3 rounded-xl border border-gray-700">
                <info.icon className="w-4 h-4 mx-auto mb-1" />
                <div className="text-xs text-gray-400">{info.label}</div>
                <div className="text-sm font-semibold">{info.value}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WHATSAPP_LINK} className="btn-primary px-8 py-3">
              Quero fazer parte da próxima turma
            </a>

            <a href={WHATSAPP_LINK} className="btn-outline px-8 py-3">
              Falar com um especialista
            </a>
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL DISCRETA */}
      <section className="py-8 bg-black text-center">
        <div className="container-xl flex justify-center gap-8 text-sm text-gray-400">
          <span>+100.000 alunos formados</span>
          <span>+200 empresas atendidas</span>
          <span>Avaliação média 5 estrelas</span>
        </div>
      </section>

      {/* BLOCO INSTITUCIONAL */}
      <section className="section-pad text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          O mercado exige mais do que ferramentas
        </h2>

        <p className="text-gray-400 mb-4">
          Empresas buscam profissionais capazes de transformar dados em decisões estratégicas.
        </p>

        <p className="text-gray-400">
          Esta pós-graduação foi estruturada para desenvolver essa visão de forma prática e aplicada.
        </p>
      </section>

      {/* GRADE */}
      <section className="section-pad">
        <div className="container-xl max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Grade Curricular
          </h2>

          <div className="grid gap-4">
            {disciplines.map((d, i) => (
              <div key={i} className="p-4 border border-gray-700 rounded-lg">
                {d.title}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 text-center">
        <div className="container-xl max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Inicie sua evolução profissional
          </h2>

          <p className="text-gray-400 mb-8">
            Próximas turmas com vagas limitadas. Fale com nossa equipe e entenda se este é o próximo passo ideal para sua carreira.
          </p>

          <a href={WHATSAPP_LINK} className="btn-primary px-10 py-4">
            Falar com a equipe
          </a>
        </div>
      </section>

    </Layout>
  );
}
