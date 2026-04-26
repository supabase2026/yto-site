// src/pages/SeoLocalPage.tsx

import { Layout } from "@/components/Layout";
import { WHATSAPP_LINK } from "@/lib/index";

interface SeoLocalPageProps {
  titulo: string;
  subtitulo: string;
  cidade: string;
  curso: string;
  publico: string[];
  conteudos: string[];
  empresas?: boolean;
  cta: string;
}

const SeoLocalPage = ({
  titulo,
  subtitulo,
  cidade,
  curso,
  publico,
  conteudos,
  empresas = false,
  cta,
}: SeoLocalPageProps) => {
  return (
    <Layout>
      <div className="min-h-screen bg-background text-foreground">
        <section className="py-20">
          <div className="container-xl max-w-5xl">
            <h1 className="text-4xl font-bold mb-6">{titulo}</h1>

            <p className="text-lg mb-6">{subtitulo}</p>

            <p className="mb-6">
              O Grupo Yto Nihon atende alunos e empresas de {cidade}, Alphaville,
              Barueri, Osasco, Santana de Parnaíba e região, com cursos práticos
              voltados para tecnologia, dados, produtividade e carreira.
            </p>

            <p className="mb-6">
              Nosso foco é ensinar de forma aplicada, com exemplos reais, exercícios
              práticos e uma metodologia pensada para quem precisa usar o conhecimento
              no mercado de trabalho.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Para quem é este {curso}?
            </h2>

            <ul className="mb-6 space-y-2">
              {publico.map((item) => (
                <li key={item}>✔ {item}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              O que você vai aprender
            </h2>

            <ul className="mb-6 space-y-2">
              {conteudos.map((item) => (
                <li key={item}>✔ {item}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Por que escolher o Grupo Yto Nihon?
            </h2>

            <ul className="mb-6 space-y-2">
              <li>✔ Mais de 100.000 alunos formados</li>
              <li>✔ Mais de 200 empresas atendidas</li>
              <li>✔ Professores com experiência real de mercado</li>
              <li>✔ Metodologia prática, objetiva e profissional</li>
            </ul>

            {empresas && (
              <>
                <h2 className="text-2xl font-semibold mt-10 mb-4">
                  Treinamento para empresas em {cidade}
                </h2>

                <p className="mb-6">
                  Também oferecemos treinamentos corporativos personalizados para
                  empresas que desejam capacitar suas equipes em Excel, Power BI,
                  dados, produtividade e inteligência artificial.
                </p>
              </>
            )}

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Atendimento em {cidade} e região
            </h2>

            <p className="mb-6">
              Se você está procurando por {curso} em {cidade}, o Grupo Yto Nihon
              pode ajudar você ou sua empresa a evoluir com uma formação prática,
              atualizada e conectada com as exigências do mercado.
            </p>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold"
            >
              {cta}
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default SeoLocalPage;
