import { Layout } from "@/components/Layout";
import { WHATSAPP_LINK } from "@/lib/index";

const TreinamentoExcelAlphaville = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background text-foreground">
        <section className="relative overflow-hidden py-24 bg-slate-950">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-900" />

          <div className="container-xl relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block mb-5 px-4 py-2 rounded-full bg-blue-600/10 text-blue-400 text-sm font-semibold">
                Treinamento corporativo em Alphaville
              </span>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                Treinamento de Excel para Empresas em Alphaville
              </h1>

              <p className="text-lg mb-8 text-slate-300 leading-relaxed">
                Capacite sua equipe com Excel de forma prática, com treinamentos personalizados focados na realidade da empresa.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold"
                >
                  Solicitar proposta
                </a>

                <a
                  href="#conteudo"
                  className="inline-block px-6 py-3 rounded-xl border border-blue-500/40 text-blue-300 font-semibold"
                >
                  Ver conteúdo do treinamento
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden border border-blue-500/20 shadow-2xl bg-slate-900 p-6">
                <div className="aspect-[16/10] rounded-2xl bg-gradient-to-br from-blue-600/30 via-slate-800 to-slate-950 flex items-center justify-center text-center p-8">
                  <div>
                    <p className="text-blue-300 text-sm font-semibold mb-3">
                      EXCEL • EMPRESAS • PRODUTIVIDADE
                    </p>
                    <h2 className="text-3xl font-bold text-white mb-3">
                      Mais eficiência para sua equipe
                    </h2>
                    <p className="text-slate-300">
                      Planilhas, relatórios, automação e produtividade no dia a dia.
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
              Se sua empresa procura treinamento de Excel em Alphaville, o Grupo Yto Nihon oferece capacitações corporativas focadas em produtividade e aplicação prática.
            </p>

            <p className="mb-6">
              O treinamento pode ser realizado presencialmente na empresa ou online ao vivo, com conteúdo adaptado ao nível da equipe.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Para quais empresas este treinamento é indicado?
            </h2>

            <ul className="mb-6 space-y-2">
              <li>✔ Empresas que utilizam Excel diariamente</li>
              <li>✔ Equipes administrativas, financeiras e operacionais</li>
              <li>✔ Times que precisam melhorar controles e relatórios</li>
              <li>✔ Gestores que buscam mais produtividade</li>
            </ul>

            <h2 id="conteudo" className="text-2xl font-semibold mt-10 mb-4">
              O que sua equipe pode aprender
            </h2>

            <ul className="mb-6 space-y-2">
              <li>✔ Fórmulas e funções essenciais</li>
              <li>✔ Organização e tratamento de dados</li>
              <li>✔ Tabelas dinâmicas e relatórios</li>
              <li>✔ Gráficos e indicadores</li>
              <li>✔ Automação e produtividade</li>
            </ul>

            <p className="mb-6">
              Veja também nosso treinamento de Power BI em Alphaville e leve sua equipe para o próximo nível em análise de dados.
            </p>

            <a href="/treinamento-power-bi-alphaville" className="text-blue-500 underline">
              Ir para treinamento de Power BI em Alphaville
            </a>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Por que contratar o Grupo Yto Nihon?
            </h2>

            <ul className="mb-6 space-y-2">
              <li>✔ Mais de 100.000 alunos formados</li>
              <li>✔ Mais de 200 empresas atendidas</li>
              <li>✔ Treinamentos personalizados</li>
              <li>✔ Professores com experiência prática</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Atendimento em Alphaville e região
            </h2>

            <p className="mb-6">
              Atendemos empresas de Alphaville, Barueri, Osasco e Santana de Parnaíba com treinamentos presenciais ou online ao vivo.
            </p>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold"
            >
              Solicitar proposta de treinamento
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TreinamentoExcelAlphaville;
