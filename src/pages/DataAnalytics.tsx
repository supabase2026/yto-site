import { Layout } from "@/components/Layout";

export default function DataAnalytics() {
  return (
    <Layout>
      <main className="min-h-screen bg-[#020817] text-white">
        <section className="px-6 py-20 md:px-12 lg:px-24">
          <div className="mx-auto max-w-6xl">
            <span className="mb-6 inline-block rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
              Formação em Data Analytics
            </span>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              Aprenda Data Analytics na prática e desenvolva uma carreira em dados
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              A Formação em Data Analytics do Grupo Yto Nihon foi criada para quem deseja entrar ou evoluir na área de dados, aprendendo Excel, Power BI, SQL e Python com uma abordagem prática, direta e conectada ao mercado.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/5511910704164?text=Tenho%20interesse%20na%20lista%20de%20espera%20da%20Forma%C3%A7%C3%A3o%20em%20Data%20Analytics"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-blue-500 px-6 py-4 text-center font-semibold text-white transition hover:bg-blue-400"
              >
                Entrar na lista de espera
              </a>

              <a
                href="mailto:yto@ytonihon.com.br?subject=Lista%20de%20espera%20Data%20Analytics"
                className="rounded-xl border border-slate-600 px-6 py-4 text-center font-semibold text-slate-200 transition hover:border-blue-400 hover:text-blue-300"
              >
                Enviar interesse por e-mail
              </a>
            </div>
          </div>
        </section>

        <section className="px-6 py-12 md:px-12 lg:px-24">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-xl font-bold text-blue-300">Duração</h2>
              <p className="mt-3 text-slate-300">
                Aproximadamente 6 meses de jornada prática em análise de dados.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-xl font-bold text-blue-300">Formato</h2>
              <p className="mt-3 text-slate-300">
                Trilha estruturada para evolução progressiva, do fundamento até aplicações reais.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-xl font-bold text-blue-300">Foco</h2>
              <p className="mt-3 text-slate-300">
                Preparar alunos para resolver problemas reais com dados, dashboards e análises.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:px-12 lg:px-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold md:text-4xl">
              O que você vai aprender
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <h3 className="text-xl font-bold">Excel para análise de dados</h3>
                <p className="mt-3 text-slate-300">
                  Organização, tratamento, tabelas dinâmicas, funções e análises práticas.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <h3 className="text-xl font-bold">Power BI</h3>
                <p className="mt-3 text-slate-300">
                  Criação de dashboards, indicadores, relatórios visuais e análise de desempenho.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <h3 className="text-xl font-bold">SQL</h3>
                <p className="mt-3 text-slate-300">
                  Consultas, filtros, relacionamentos, agregações e extração de informações.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <h3 className="text-xl font-bold">Python para dados</h3>
                <p className="mt-3 text-slate-300">
                  Fundamentos para análise, manipulação de dados e visualizações.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <h3 className="text-xl font-bold">Storytelling com dados</h3>
                <p className="mt-3 text-slate-300">
                  Como transformar números em apresentações claras, úteis e estratégicas.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <h3 className="text-xl font-bold">Projetos práticos</h3>
                <p className="mt-3 text-slate-300">
                  Aplicação dos conhecimentos em cenários próximos da realidade profissional.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:px-12 lg:px-24">
          <div className="mx-auto max-w-6xl rounded-3xl border border-blue-500/30 bg-blue-500/10 p-8 md:p-12">
            <h2 className="text-3xl font-bold md:text-4xl">
              Para quem é a Formação em Data Analytics?
            </h2>

            <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">
              Essa formação é indicada para estudantes, profissionais em transição de carreira, analistas, assistentes, gestores e pessoas que desejam aprender análise de dados com uma trilha clara, prática e orientada ao mercado.
            </p>

            <ul className="mt-8 grid gap-4 md:grid-cols-2">
              <li className="rounded-xl bg-slate-950/60 p-4">Quem quer começar na área de dados</li>
              <li className="rounded-xl bg-slate-950/60 p-4">Quem já usa Excel e quer evoluir</li>
              <li className="rounded-xl bg-slate-950/60 p-4">Quem deseja aprender Power BI</li>
              <li className="rounded-xl bg-slate-950/60 p-4">Quem busca uma carreira mais analítica</li>
            </ul>
          </div>
        </section>

        <section className="px-6 py-16 md:px-12 lg:px-24">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Entre na lista de espera
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-300">
              A próxima turma da Formação em Data Analytics ainda não está aberta. Cadastre seu interesse para receber informações em primeira mão.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="https://wa.me/5511910704164?text=Quero%20entrar%20na%20lista%20de%20espera%20da%20Forma%C3%A7%C3%A3o%20em%20Data%20Analytics"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-green-500 px-8 py-4 font-bold text-white transition hover:bg-green-400"
              >
                Quero entrar na lista de espera
              </a>

              <a
                href="mailto:yto@ytonihon.com.br?subject=Lista%20de%20espera%20Data%20Analytics&body=Ol%C3%A1,%20tenho%20interesse%20na%20Forma%C3%A7%C3%A3o%20em%20Data%20Analytics."
                className="rounded-xl border border-slate-600 px-8 py-4 font-bold text-slate-200 transition hover:border-blue-400 hover:text-blue-300"
              >
                Enviar por e-mail
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
