import { Layout } from "@/components/Layout";
import { WHATSAPP_LINK } from "@/lib/index";

const TreinamentoPowerBIBarueri = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background text-foreground">
        <section className="relative overflow-hidden py-24 bg-slate-950">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-900" />

          <div className="container-xl relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block mb-5 px-4 py-2 rounded-full bg-yellow-600/10 text-yellow-400 text-sm font-semibold">
                Treinamento corporativo em Barueri
              </span>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                Treinamento de Power BI para Empresas em Barueri e Alphaville
              </h1>

              <p className="text-lg mb-8 text-slate-300 leading-relaxed">
                Capacite sua equipe em Power BI com dashboards, indicadores, relatórios executivos e análise de dados aplicada à realidade da empresa.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 rounded-xl bg-yellow-500 text-black font-semibold"
                >
                  Solicitar proposta
                </a>

                <a
                  href="#conteudo"
                  className="inline-block px-6 py-3 rounded-xl border border-yellow-400/40 text-yellow-300 font-semibold"
                >
                  Ver conteúdo do treinamento
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden border border-yellow-400/20 shadow-2xl bg-slate-900 p-6">
                <div className="aspect-[16/10] rounded-2xl bg-gradient-to-br from-yellow-500/30 via-slate-800 to-slate-950 flex items-center justify-center text-center p-8">
                  <div>
                    <p className="text-yellow-300 text-sm font-semibold mb-3">
                      POWER BI • EMPRESAS • DASHBOARDS
                    </p>
                    <h2 className="text-3xl font-bold text-white mb-3">
                      Decisões melhores com dados
                    </h2>
                    <p className="text-slate-300">
                      KPIs, dashboards, relatórios executivos e cultura data-driven.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container-xl max-w-5xl">
            <p className="mb-6">
              Se sua empresa procura treinamento de Power BI em Barueri, Alphaville ou região, o Grupo Yto Nihon oferece capacitações corporativas práticas para equipes que precisam transformar dados em decisões.
            </p>

            <p className="mb-6">
              O treinamento pode ser realizado online ao vivo ou presencial, com conteúdo adaptado ao nível dos participantes, às bases de dados utilizadas e aos objetivos da empresa.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Para quais empresas este treinamento é indicado?
            </h2>

            <ul className="mb-6 space-y-2">
              <li>✔ Empresas que desejam criar dashboards profissionais</li>
              <li>✔ Equipes que trabalham com relatórios e indicadores</li>
              <li>✔ Times financeiros, administrativos, comerciais e operacionais</li>
              <li>✔ Gestores que precisam tomar decisões com base em dados</li>
            </ul>

            <h2 id="conteudo" className="text-2xl font-semibold mt-10 mb-4">
              O que sua equipe pode aprender
            </h2>

            <ul className="mb-6 space-y-2">
              <li>✔ Fundamentos do Power BI</li>
              <li>✔ Tratamento e modelagem de dados</li>
              <li>✔ Criação de dashboards e relatórios executivos</li>
              <li>✔ Indicadores, KPIs e visualizações profissionais</li>
              <li>✔ Publicação e compartilhamento de relatórios</li>
            </ul>

            <p className="mb-6">
              Veja também nosso treinamento de Excel para empresas em Barueri e fortaleça a produtividade da sua equipe.
            </p>

            <a href="/treinamento-excel-barueri" className="text-blue-500 underline">
              Ir para treinamento de Excel em Barueri
            </a>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Por que contratar o Grupo Yto Nihon?
            </h2>

            <ul className="mb-6 space-y-2">
              <li>✔ Mais de 100.000 alunos formados</li>
              <li>✔ Mais de 200 empresas atendidas</li>
              <li>✔ Treinamentos personalizados para empresas</li>
              <li>✔ Professores com experiência prática de mercado</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Treinamento presencial ou online ao vivo
            </h2>

            <p className="mb-6">
              Atendemos empresas de Barueri, Alphaville, Osasco, Santana de Parnaíba e região, com treinamentos presenciais ou online ao vivo via Microsoft Teams.
            </p>

            <p className="mb-6">
              O conteúdo pode ser ajustado para Power BI básico, dashboards executivos, indicadores, relatórios gerenciais ou necessidades específicas da sua empresa.
            </p>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-xl bg-yellow-500 text-black font-semibold"
            >
              Solicitar proposta de treinamento
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TreinamentoPowerBIBarueri;
