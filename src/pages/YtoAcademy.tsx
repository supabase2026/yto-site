import { Layout } from "@/components/Layout";

const CHECKOUT_LINK = "https://chk.eduzz.com/E9OOQN859B";
const WHATSAPP_LINK =
  "https://wa.me/5511910704164?text=Quero%20entender%20melhor%20a%20Yto%20Academy";

const cursos = [
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
  "Figma",
];

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
              A Yto Academy é a plataforma de cursos online do Grupo Yto Nihon,
              criada para quem deseja desenvolver habilidades práticas em tecnologia,
              dados, produtividade e carreira.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={CHECKOUT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-green-500 px-6 py-4 text-center font-semibold text-white transition hover:bg-green-400"
              >
                Entrar na Yto Academy agora
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-600 px-6 py-4 text-center font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
              >
                Falar com especialista
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
              <h2 className="text-xl font-bold text-cyan-300">Plano acessível</h2>
              <p className="mt-3 text-slate-300">
                Uma plataforma para desenvolver várias competências sem depender de cursos isolados.
              </p>
            </div>
          </div>
        </section>

        <section id="cursos" className="px-6 py-16 md:px-12 lg:px-24">
          <div className="mx-auto max-w-6xl text-center">
            <span className="inline-block rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-cyan-300">
              Cursos disponíveis
            </span>

            <h2 className="mt-6 text-3xl font-bold md:text-5xl">
              Ferramentas que você vai dominar
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              Acesso a trilhas de aprendizagem com ferramentas essenciais para dados,
              tecnologia, produtividade e evolução profissional.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {cursos.map((curso) => (
                <a
                  key={curso}
                  href={CHECKOUT_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-left transition hover:border-green-400 hover:bg-slate-900"
                >
                  <div>
                    <h3 className="text-lg font-bold text-white">{curso}</h3>
                    <p className="mt-2 text-sm text-slate-400">
                      Acesse dentro da Yto Academy
                    </p>
                  </div>

                  <span className="rounded-full bg-green-500/10 px-4 py-2 text-sm font-bold text-green-400 transition group-hover:bg-green-500 group-hover:text-white">
                    Acessar
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-10">
              <a
                href={CHECKOUT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-xl bg-green-500 px-8 py-4 font-bold text-white transition hover:bg-green-400"
              >
                Comprar acesso à Yto Academy
              </a>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:px-12 lg:px-24">
          <div className="mx-auto max-w-6xl rounded-3xl border border-cyan-500/30 bg-cyan-500/10 p-8 md:p-12">
            <h2 className="text-3xl font-bold md:text-4xl">
              Para quem é a Yto Academy?
            </h2>

            <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">
              A Yto Academy é indicada para estudantes, profissionais em transição de carreira,
              analistas, assistentes, gestores, empreendedores e pessoas que desejam aprender
              ferramentas valorizadas pelo mercado.
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

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={CHECKOUT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-green-500 px-6 py-4 text-center font-semibold text-white transition hover:bg-green-400"
              >
                Quero começar agora
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-600 px-6 py-4 text-center font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
              >
                Tenho dúvidas
              </a>
            </div>
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
              Entre agora na plataforma ou fale com nossa equipe para entender qual trilha combina melhor com seu momento.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={CHECKOUT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-green-500 px-8 py-4 font-bold text-white transition hover:bg-green-400"
              >
                Comprar acesso agora
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-300 px-8 py-4 font-bold text-slate-900 transition hover:border-cyan-500 hover:text-cyan-600"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
