import { Layout } from "@/components/Layout";
import { WHATSAPP_LINK } from "@/lib/index";

const CursoMSProjectAlphaville = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background text-foreground">
        <section className="relative overflow-hidden py-24 bg-slate-950">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-900" />

          <div className="container-xl relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block mb-5 px-4 py-2 rounded-full bg-blue-600/10 text-blue-400 text-sm font-semibold">
                Curso de MS Project em Alphaville
              </span>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                Curso de MS Project em Alphaville para Profissionais e Empresas
              </h1>

              <p className="text-lg mb-8 text-slate-300 leading-relaxed">
                Aprenda MS Project na prática com o Grupo Yto Nihon e desenvolva
                habilidades para criar cronogramas, controlar prazos, gerenciar
                recursos e acompanhar projetos em Alphaville, Barueri e região.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold"
                >
                  Falar sobre o curso de MS Project
                </a>

                <a
                  href="#conteudo"
                  className="inline-block px-6 py-3 rounded-xl border border-blue-500/40 text-blue-300 font-semibold"
                >
                  Ver conteúdo do curso
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden border border-blue-500/20 shadow-2xl bg-slate-900 p-6">
                <div className="aspect-[16/10] rounded-2xl bg-gradient-to-br from-blue-600/30 via-slate-800 to-slate-950 flex items-center justify-center text-center p-8">
                  <div>
                    <p className="text-blue-300 text-sm font-semibold mb-3">
                      MS PROJECT • ALPHAVILLE • GESTÃO
                    </p>
                    <h2 className="text-3xl font-bold text-white mb-3">
                      Gerencie projetos com mais clareza
                    </h2>
                    <p className="text-slate-300">
                      Planejamento, linha de base, recursos, prazos e relatórios.
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
              Se você procura um curso de MS Project em Alphaville com foco
              prático e aplicação real, o Grupo Yto Nihon oferece uma formação
              voltada para profissionais que precisam planejar, organizar e
              acompanhar projetos com eficiência.
            </p>

            <p className="mb-6">
              O curso é indicado para profissionais de Alphaville, Barueri,
              Osasco, Santana de Parnaíba e região que desejam dominar uma das
              ferramentas mais utilizadas em gestão de projetos, engenharia,
              obras, planejamento e operações.
            </p>

            <p className="mb-6">
              Também oferecemos treinamentos de MS Project para empresas em
              Alphaville, com conteúdo adaptado à realidade da equipe e aos
              tipos de projetos executados pela organização.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Para quem é o curso de MS Project?
            </h2>

            <ul className="mb-6 space-y-2">
              <li>✔ Engenheiros e arquitetos</li>
              <li>✔ Gestores de projetos</li>
              <li>✔ Profissionais de planejamento e obras</li>
              <li>✔ Coordenadores, líderes e analistas</li>
              <li>✔ Empresas que precisam capacitar suas equipes</li>
              <li>✔ Profissionais que querem melhorar o controle de prazos e recursos</li>
            </ul>

            <h2 id="conteudo" className="text-2xl font-semibold mt-10 mb-4">
              O que você vai aprender
            </h2>

            <ul className="mb-6 space-y-2">
              <li>✔ Criar cronogramas profissionais no MS Project</li>
              <li>✔ Estruturar tarefas e etapas do projeto</li>
              <li>✔ Criar vínculos entre atividades</li>
              <li>✔ Identificar caminho crítico</li>
              <li>✔ Trabalhar com marcos do projeto</li>
              <li>✔ Cadastrar e controlar recursos</li>
              <li>✔ Definir linha de base</li>
              <li>✔ Atualizar o andamento do projeto</li>
              <li>✔ Acompanhar prazos, atrasos e evolução</li>
              <li>✔ Gerar relatórios gerenciais</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              MS Project para empresas em Alphaville
            </h2>

            <p className="mb-6">
              Para empresas de Alphaville e região, o Grupo Yto Nihon oferece
              treinamentos corporativos de MS Project com foco na rotina real
              dos colaboradores. O conteúdo pode ser adaptado para equipes de
              engenharia, obras, planejamento, manutenção, tecnologia, operações
              e gestão corporativa.
            </p>

            <a
              href="/treinamento-ms-project-empresas"
              className="text-blue-500 underline"
            >
              Conheça também o treinamento de MS Project para empresas
            </a>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Por que escolher o Grupo Yto Nihon?
            </h2>

            <ul className="mb-6 space-y-2">
              <li>✔ Mais de 100.000 alunos formados</li>
              <li>✔ Mais de 200 empresas atendidas</li>
              <li>✔ Experiência prática em treinamentos profissionais</li>
              <li>✔ Metodologia aplicada ao mercado de trabalho</li>
              <li>✔ Atuação em Alphaville, Barueri e região</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Veja também outros treinamentos
            </h2>

            <ul className="mb-10 space-y-2">
              <li>
                <a href="/curso-ms-project-barueri" className="text-blue-500 underline">
                  Curso de MS Project em Barueri
                </a>
              </li>
              <li>
                <a href="/curso-excel-barueri-regiao" className="text-blue-500 underline">
                  Curso de Excel em Barueri e Alphaville
                </a>
              </li>
              <li>
                <a href="/curso-power-bi-barueri-regiao" className="text-blue-500 underline">
                  Curso de Power BI em Barueri e Alphaville
                </a>
              </li>
              <li>
                <a href="/treinamentos-barueri-alphaville" className="text-blue-500 underline">
                  Ver todos os treinamentos na região
                </a>
              </li>
            </ul>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold"
            >
              Quero aprender MS Project
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CursoMSProjectAlphaville;
