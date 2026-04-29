import { Layout } from "@/components/Layout";
import {
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Building2,
  AlertTriangle,
  ClipboardCheck,
  MapPin,
  MessageCircle,
  Star,
  Target,
} from "lucide-react";

const WHATSAPP_PROJECT =
  "https://wa.me/5511910704164?text=Ol%C3%A1!%20Tenho%20interesse%20em%20curso%20ou%20treinamento%20de%20MS%20Project.%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";

const CursoMSProject = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-slate-950 text-white">

        {/* HERO */}
        <section className="relative overflow-hidden py-24 bg-slate-950">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-slate-950 to-slate-950" />

          <div className="container-xl relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-sm font-semibold mb-6">
                <CalendarDays className="w-4 h-4" />
                MS Project para profissionais e empresas
              </span>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Curso de <span className="text-blue-400">MS Project</span> em Barueri, Alphaville e Região
              </h1>

              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Aprenda a planejar, controlar e acompanhar projetos com uma das ferramentas mais utilizadas por profissionais de engenharia, obras, gestão e planejamento.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={WHATSAPP_PROJECT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition"
                >
                  Falar sobre MS Project <ChevronRight className="w-4 h-4" />
                </a>

                <a
                  href="/treinamento-ms-project-empresas"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-blue-400/40 text-blue-300 font-bold hover:bg-blue-500/10 transition"
                >
                  Ver opção para empresas
                </a>
              </div>
            </div>

            <div className="rounded-3xl p-8 bg-slate-900/80 border border-slate-700 shadow-2xl">
              <h2 className="text-2xl font-bold mb-5">
                Ideal para quem precisa controlar projetos de verdade
              </h2>

              <div className="space-y-4">
                {[
                  "Criar cronogramas profissionais",
                  "Controlar prazos, etapas e entregas",
                  "Gerenciar recursos e alocações",
                  "Trabalhar com linha de base",
                  "Acompanhar avanço físico do projeto",
                ].map((item) => (
                  <p key={item} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DORES */}
        <section className="py-20 bg-slate-900">
          <div className="container-xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-blue-400 font-semibold">Sinais de alerta</span>
              <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-4">
                Sua empresa ou equipe precisa de MS Project se...
              </h2>
              <p className="text-slate-400">
                Projetos mal controlados custam tempo, dinheiro e credibilidade.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Os cronogramas são feitos de forma improvisada no Excel",
                "A equipe não consegue acompanhar atrasos com clareza",
                "Não existe linha de base para comparar planejado x realizado",
                "Os recursos são alocados sem visão de capacidade",
                "Os gestores não têm relatórios confiáveis de avanço",
                "Cada área controla o projeto de um jeito diferente",
              ].map((item) => (
                <div key={item} className="rounded-2xl p-6 bg-slate-950 border border-slate-800">
                  <AlertTriangle className="w-6 h-6 text-yellow-400 mb-4" />
                  <p className="text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTEÚDO */}
        <section className="py-20 bg-slate-950">
          <div className="container-xl grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-blue-400 font-semibold">Conteúdo do treinamento</span>
              <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-6">
                O que você aprende no curso de MS Project
              </h2>

              <p className="text-slate-400 mb-8 leading-relaxed">
                O treinamento é prático e voltado para aplicação real em projetos, obras, engenharia, planejamento, implantação e gestão.
              </p>

              <div className="space-y-4">
                {[
                  "Configuração inicial do projeto",
                  "Calendários, tarefas e vínculos",
                  "Estrutura Analítica do Projeto",
                  "Duração, predecessoras e caminho crítico",
                  "Recursos, custos e alocação",
                  "Linha de base e acompanhamento",
                  "Relatórios e visão gerencial",
                  "Boas práticas para controle de cronogramas",
                ].map((item) => (
                  <p key={item} className="flex items-center gap-3 text-slate-300">
                    <ClipboardCheck className="w-5 h-5 text-blue-400" />
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8">
              <Target className="w-10 h-10 text-blue-400 mb-5" />
              <h3 className="text-2xl font-bold mb-4">
                Para quem é este curso?
              </h3>

              <div className="space-y-3 text-slate-300">
                <p>• Profissionais de engenharia e obras</p>
                <p>• Coordenadores e gestores de projetos</p>
                <p>• Analistas de planejamento</p>
                <p>• Empresas que precisam padronizar cronogramas</p>
                <p>• Profissionais que desejam atuar com controle de projetos</p>
              </div>
            </div>
          </div>
        </section>

        {/* AUTORIDADE */}
        <section className="py-20 bg-slate-900">
          <div className="container-xl">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {[
                { icon: Star, title: "Experiência real", desc: "Mais de duas décadas ensinando ferramentas Microsoft." },
                { icon: Building2, title: "Empresas atendidas", desc: "Treinamentos realizados para equipes corporativas." },
                { icon: CalendarDays, title: "Foco em projetos", desc: "Aplicação prática para planejamento, controle e acompanhamento." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl p-8 bg-slate-950 border border-slate-800">
                  <item.icon className="w-8 h-8 text-blue-400 mx-auto mb-5" />
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REGIÕES */}
        <section className="py-20 bg-slate-950">
          <div className="container-xl max-w-5xl">
            <div className="text-center mb-12">
              <MapPin className="w-9 h-9 text-blue-400 mx-auto mb-4" />
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Escolha sua região
              </h2>
              <p className="text-slate-400">
                Atendemos profissionais e empresas em Barueri, Alphaville e região.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="/curso-ms-project-barueri"
                className="rounded-2xl p-8 bg-slate-900 border border-slate-800 hover:border-blue-400 transition"
              >
                <h3 className="text-2xl font-bold mb-3">MS Project em Barueri</h3>
                <p className="text-slate-400 mb-4">
                  Curso para alunos e empresas localizadas em Barueri e região.
                </p>
                <span className="text-blue-400 font-bold inline-flex items-center gap-2">
                  Acessar página <ChevronRight className="w-4 h-4" />
                </span>
              </a>

              <a
                href="/curso-ms-project-alphaville"
                className="rounded-2xl p-8 bg-slate-900 border border-slate-800 hover:border-blue-400 transition"
              >
                <h3 className="text-2xl font-bold mb-3">MS Project em Alphaville</h3>
                <p className="text-slate-400 mb-4">
                  Treinamento para profissionais e empresas em Alphaville.
                </p>
                <span className="text-blue-400 font-bold inline-flex items-center gap-2">
                  Acessar página <ChevronRight className="w-4 h-4" />
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* EMPRESAS */}
        <section className="py-20 bg-blue-950/30">
          <div className="container-xl max-w-4xl text-center">
            <Building2 className="w-10 h-10 text-blue-400 mx-auto mb-5" />

            <h2 className="text-3xl lg:text-4xl font-bold mb-5">
              Treinamento de MS Project para empresas
            </h2>

            <p className="text-slate-300 mb-8 leading-relaxed">
              Também oferecemos capacitação personalizada para equipes, com conteúdo adaptado ao tipo de projeto, nível dos participantes e necessidade da empresa.
            </p>

            <a
              href="/treinamento-ms-project-empresas"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition"
            >
              Ver treinamento para empresas <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </section>
<div
  style={{
    marginTop: "60px",
    padding: "30px",
    borderRadius: "16px",
    background: "rgba(0,123,255,0.08)",
    border: "1px solid rgba(0,123,255,0.3)",
    textAlign: "center",
  }}
>
  <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>
    Sua empresa precisa treinar a equipe em MS Project?
  </h3>

  <p style={{ marginBottom: "20px", color: "#ccc" }}>
    O Grupo Yto Nihon oferece treinamentos corporativos de MS Project para equipes
    que precisam planejar, controlar e acompanhar projetos com mais eficiência.
  </p>

  <a
    href="/para-empresas"
    style={{
      display: "inline-block",
      padding: "14px 24px",
      backgroundColor: "#007BFF",
      color: "#fff",
      borderRadius: "8px",
      textDecoration: "none",
      fontWeight: "bold",
    }}
  >
    Ver treinamentos para empresas
  </a>
</div>
        {/* CTA FINAL */}
        <section className="py-20 bg-slate-950">
          <div className="container-xl max-w-3xl text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-5">
              Quer aprender MS Project ou treinar sua equipe?
            </h2>

            <p className="text-slate-400 mb-8">
              Fale com o Grupo Yto Nihon e veja a melhor opção de curso ou treinamento corporativo.
            </p>

            <a
              href={WHATSAPP_PROJECT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-green-500 hover:bg-green-400 text-slate-950 font-bold transition"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default CursoMSProject;
