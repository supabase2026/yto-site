import { Layout } from "@/components/Layout";
import { WHATSAPP_LINK } from "@/lib/index";

const CursosEmBarueri = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background text-foreground">
        <section className="relative overflow-hidden py-24 bg-slate-950">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-900" />

          <div className="container-xl relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block mb-5 px-4 py-2 rounded-full bg-blue-600/10 text-blue-400 text-sm font-semibold">
                Cursos em Barueri • Alphaville • Região
              </span>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                Cursos em Barueri para Profissionais, Alunos e Empresas
              </h1>

              <p className="text-lg mb-8 text-slate-300 leading-relaxed">
                O Grupo Yto Nihon oferece cursos e treinamentos em Barueri,
                Alphaville e região, com foco em Excel, Power BI, análise de
                dados, tecnologia e capacitação profissional.
              </p>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold"
              >
                Falar com a Yto
              </a>
            </div>

            <div className="rounded-3xl overflow-hidden border border-blue-500/20 shadow-2xl bg-slate-900 p-6">
              <div className="aspect-[16/10] rounded-2xl bg-gradient-to-br from-blue-600/30 via-slate-800 to-slate-950 flex items-center justify-center text-center p-8">
                <div>
                  <p className="text-blue-300 text-sm font-semibold mb-3">
                    EXCEL • POWER BI • DADOS • TECNOLOGIA
                  </p>
                  <h2 className="text-3xl font-bold text-white mb-3">
                    Desenvolva habilidades para o mercado
                  </h2>
                  <p className="text-slate-300">
                    Cursos práticos para crescimento profissional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container-xl max-w-5xl">
            <h2 className="text-2xl font-semibold mb-6">
              Principais cursos em Barueri
            </h2>

            <ul className="mb-10 space-y-2">
              <li>
                <a href="/curso-excel-barueri-regiao" className="text-blue-500 underline">
                  Cursos de Excel em Barueri e região
                </a>
              </li>
              <li>
                <a href="/curso-power-bi-barueri-regiao" className="text-blue-500 underline">
                  Cursos de Power BI em Barueri e região
                </a>
              </li>
              <li>
                <a href="/treinamentos-barueri-alphaville" className="text-blue-500 underline">
                  Treinamentos em Barueri, Alphaville e região
                </a>
              </li>
              <li>
                <a href="/treinamento-corporativo-empresas" className="text-blue-500 underline">
                  Treinamentos corporativos para empresas
                </a>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Cursos para quem busca evolução profissional
            </h2>

            <p className="mb-6">
              Se você procura cursos em Barueri para melhorar sua carreira,
              desenvolver habilidades técnicas ou capacitar sua equipe, o Grupo
              Yto Nihon oferece treinamentos práticos e alinhados ao mercado.
            </p>

            <p className="mb-6">
              Nossa atuação atende profissionais de Barueri, Alphaville, Osasco,
              Santana de Parnaíba e região, com cursos presenciais, online ao
              vivo e soluções personalizadas para empresas.
            </p>

            <p className="mb-6">
              Entre os cursos mais procurados estão Excel, Power BI, SQL,
              Inteligência Artificial, MS Project, análise de dados e
              treinamentos corporativos sob medida.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Para quem são os cursos?
            </h2>

            <ul className="mb-10 space-y-2">
              <li>✔ Profissionais que desejam crescer na carreira</li>
              <li>✔ Pessoas em transição para a área de dados</li>
              <li>✔ Empresas que precisam capacitar suas equipes</li>
              <li>✔ Alunos que querem aprender ferramentas do mercado</li>
              <li>✔ Gestores que buscam mais produtividade e análise de dados</li>
            </ul>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold"
            >
              Quero conhecer os cursos
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CursosEmBarueri;
