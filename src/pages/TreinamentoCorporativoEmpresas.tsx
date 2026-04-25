import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';

function SEO() {
  useEffect(() => {
    document.title = 'Treinamentos Corporativos para Empresas | Grupo Yto Nihon';

    const description =
      'Treinamentos corporativos em Excel, Power BI, SQL, MS Project e Inteligência Artificial para empresas. Capacite sua equipe com soluções práticas e personalizadas.';

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }, []);

  return null;
}

const treinamentos = [
  {
    titulo: 'Excel para Empresas',
    descricao: 'Aumente a produtividade da equipe e reduza retrabalho com Excel avançado.',
    link: '/treinamento-excel-empresas',
  },
  {
    titulo: 'Power BI para Empresas',
    descricao: 'Transforme dados em dashboards e decisões estratégicas.',
    link: '/treinamento-power-bi-empresas',
  },
  {
    titulo: 'SQL para Empresas',
    descricao: 'Autonomia total na análise de dados e acesso a banco de dados.',
    link: '/treinamento-sql-empresas',
  },
  {
    titulo: 'MS Project para Empresas',
    descricao: 'Controle total de projetos, prazos e recursos.',
    link: '/treinamento-ms-project-empresas',
  },
  {
    titulo: 'Inteligência Artificial para Empresas',
    descricao: 'Automatize tarefas e aumente produtividade com IA aplicada.',
    link: '/treinamento-ia-empresas',
  },
];

export default function TreinamentoCorporativoEmpresas() {
  return (
    <Layout>
      <SEO />

      {/* HERO */}
      <section className="section-pad text-center">
        <h1 className="section-headline mb-6">
          Treinamentos Corporativos para Empresas
        </h1>

        <p className="text-lg max-w-2xl mx-auto mb-10">
          Escolha o treinamento ideal para sua equipe e aumente produtividade,
          controle e tomada de decisão baseada em dados.
        </p>
      </section>

      {/* GRID DE TREINAMENTOS */}
      <section className="section-pad">
        <div className="container-xl grid md:grid-cols-2 gap-6">

          {treinamentos.map((t, index) => (
            <motion.a
              key={t.titulo}
              href={t.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl p-6 block hover:scale-[1.02] transition"
              style={{
                background: 'oklch(0.13 0.026 250 / 0.85)',
                border: '1px solid oklch(0.24 0.034 250 / 0.50)',
              }}
            >
              <h3 className="text-lg font-bold mb-2 text-white">
                {t.titulo}
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                {t.descricao}
              </p>
              <span style={{ color: '#3b82f6' }}>
                Ver treinamento →
              </span>
            </motion.a>
          ))}

        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-pad text-center">
        <h2 className="section-headline mb-4">
          Não sabe qual escolher?
        </h2>

        <p className="mb-6 text-gray-400">
          Fale com nossa equipe e receba uma recomendação personalizada.
        </p>

        <a
          href="https://wa.me/5511910704164"
          className="btn-primary"
        >
          Falar no WhatsApp
        </a>
      </section>
    </Layout>
  );
}
