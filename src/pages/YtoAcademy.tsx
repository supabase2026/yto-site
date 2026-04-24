import { Layout } from "@/components/Layout";

export default function YtoAcademy() {
  return (
    <Layout>
      <main className="min-h-screen bg-[#020817] text-white">
        <section className="px-6 py-20 md:px-12 lg:px-24">
          <div className="mx-auto max-w-6xl">
            <span className="mb-6 inline-block rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
              Plataforma de cursos online
            </span>

            <h1 className="max-w-5xl text-4xl font-bold leading-tight md:text-6xl">
              Yto Academy: aprenda Excel, Power BI, SQL, Python e dados no seu ritmo
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              A Yto Academy é a plataforma de cursos online do Grupo Yto Nihon, criada para quem deseja desenvolver habilidades práticas em tecnologia, dados, produtividade e carreira.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/5511910704164?text=Tenho%20interesse%20na%20Yto%20Academy"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-cyan-500 px-6 py-4 text-center font-semibold text-white transition hover:bg-cyan-400"
              >
                Quero conhecer a Yto Academy
              </a>

              <a
                href="#cursos"
                className="rounded-xl border border-slate-600 px-6 py-4 text-center font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
              >
                Ver cursos disponíveis
              </a>
            </div>
          </div>
        </section>

        <section className="px-6 py-12 md:px-12 lg:px-24">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-xl font-bold text-cyan-300">Acesso contínuo</h2>
              <p className="mt-3 text-slate-300">
                Estude no seu ritmo, revise conteúdos e avance conforme sua necessidade profissional.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-xl font-bold text-cyan-300">Cursos práticos</h2>
              <p className="mt-3 text-slate-300">
                Conteúdos voltados para aplicação real em empresas, projetos, dashboards e rotinas de trabalho.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-xl font-bold text-cyan-300">Certificação</h2>
              <p className="mt-3 text-slate-300">
                Desenvolva novas competências e fortaleça seu currículo com uma trilha de aprendizado contínua.
              </p>
            </div>
          </div>
        </section>

        <section id="cursos" className="px-6 py-16 md:px-12 lg:px-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold md:text-4xl">
              Cursos disponíveis na Yto Academy
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              A plataforma reúne cursos voltados para quem deseja aprender ferramentas essenciais do mercado de dados, tecnologia, produtividade e negócios.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Excel Essentials",
                "Excel Expert",
                "Excel para Análise de Dados",
                "Power BI",
                "SQL Server",
                "Python para Análise de Dados",
                "MS Project",
                "Tableau",
                "Linguagem R",
                "Storytelling para Dados",
                "VBA",
                "Figma"
              ].map((curso) => (
                <div
                  key={curso}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
                >
                  <h3 className="text-xl font-bold text-white">{curso}</h3>
                  <p className="mt-3 text-slate-300">
                    Curso prático para desenvolver habilidades aplicáveis em projetos, empresas e desafios profissionais.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:px-12 lg:px-24">
          <div className="mx-auto max-w-6xl rounded-3xl border border-cyan-500/30 bg-cyan-500/10 p-8 md:p-12">
            <h2 className="text-3xl font-bold md:text-4xl">
              Para quem é a Yto Academy?
            </h2>

            <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">
              A Yto Academy é indicada para estudantes, profissionais em transição de carreira, analistas, assistentes, gestores, empreendedores e pessoas que desejam aprender ferramentas valorizadas pelo mercado.
            </p>

            <ul className="mt-8 grid gap-4 md:grid-cols-2">
              <li className="rounded-xl bg-slate-950/60 p-4">
                Quem deseja aprender Excel, Power BI, SQL e Python
              </li>
              <li className="rounded-xl bg-slate-950/60 p-4">
                Quem quer evoluir na carreira com dados
              </li>
              <li className="rounded-xl bg-slate-950/60 p-4">
                Quem busca cursos práticos e objetivos
              </li>
              <li className="rounded-xl bg-slate-950/60 p-4">
                Empresas que desejam capacitar equipes
              </li>
            </ul>
          </div>
        </section>

        <section className="px-6 py-16 md:px-12 lg:px-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold md:text-4xl">
              Por que estudar com o Grupo Yto Nihon?
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <h3 className="text-xl font-bold text-cyan-300">Experiência real</h3>
                <p className="mt-3 text-slate-300">
                  Mais de 26 anos formando profissionais e atendendo empresas em treinamentos técnicos.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <h3 className="text-xl font-bold text-cyan-300">Conteúdo de mercado</h3>
                <p className="mt-3 text-slate-300">
                  Cursos pensados para aplicação prática em rotinas de análise, gestão e tecnologia.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <h3 className="text-xl font-bold text-cyan-300">Evolução contínua</h3>
                <p className="mt-3 text-slate-300">
                  A plataforma permite que você continue aprendendo e desenvolvendo novas competências.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:px-12 lg:px-24">
          <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 text-center text-slate-950 md:p-12">
            <h2 className="text-3xl font-bold md:text-4xl">
              Comece sua evolução profissional com a Yto Academy
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-700">
              Fale com nossa equipe para conhecer planos, condições de acesso e a melhor trilha para o seu momento profissional.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="https://wa.me/5511910704164?text=Quero%20saber%20mais%20sobre%20a%20Yto%20Academy"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-green-500 px-8 py-4 font-bold text-white transition hover:bg-green-400"
              >
                Falar no WhatsApp
              </a>

              <a
                href="mailto:yto@ytonihon.com.br?subject=Interesse%20na%20Yto%20Academy"
                className="rounded-xl border border-slate-300 px-8 py-4 font-bold text-slate-900 transition hover:border-cyan-500 hover:text-cyan-600"
              >
                Enviar e-mail
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
