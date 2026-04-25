import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  MessageCircle,
  CheckCircle2,
  Briefcase,
  Target,
  ChevronRight,
} from 'lucide-react';
import { Layout } from '@/components/Layout';
import { WHATSAPP_LINK } from '@/lib/index';

function SEO() {
  useEffect(() => {
    document.title = 'Treinamentos Corporativos para Empresas | Grupo Yto Nihon';

    const description =
      'Treinamentos corporativos em Excel, Power BI, SQL, MS Project e Inteligência Artificial. Capacite sua equipe com soluções personalizadas para empresas.';

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

export default function TreinamentoCorporativoEmpresas() {
  return (
    <Layout>
      <SEO />

      <section className="section-pad text-center">
        <h1 className="section-headline mb-6">
          Treinamentos Corporativos para Empresas
        </h1>

        <p className="text-lg max-w-2xl mx-auto mb-10">
          Capacite sua equipe com treinamentos práticos e personalizados em dados,
          gestão e tecnologia.
        </p>

        <a
          href="https://wa.me/5511910704164"
          className="btn-primary"
        >
          Falar com especialista
        </a>
      </section>

      <section className="section-pad">
        <div className="container-xl grid md:grid-cols-2 gap-6">

          <a href="/treinamento-excel-empresas" className="card">
            Excel para Empresas
          </a>

          <a href="/treinamento-power-bi-empresas" className="card">
            Power BI para Empresas
          </a>

          <a href="/treinamento-sql-empresas" className="card">
            SQL para Empresas
          </a>

          <a href="/treinamento-ms-project-empresas" className="card">
            MS Project para Empresas
          </a>

          <a href="/treinamento-ia-empresas" className="card">
            Inteligência Artificial para Empresas
          </a>

        </div>
      </section>
    </Layout>
  );
}
