// src/pages/Diagnostico.tsx
import { supabase } from "@/lib/supabase";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  Database,
  FileSpreadsheet,
  Gauge,
  GraduationCap,
  LineChart,
  MessageCircle,
  RotateCcw,
} from "lucide-react";

import { Layout } from "@/components/Layout";
import { WHATSAPP_LINK } from "@/lib/index";

type Track = "excel" | "powerbi" | "dados" | "project";

type Question = {
  question: string;
  options: string[];
  correct: number;
};

const tracks = [
  {
    id: "excel",
    title: "Excel",
    subtitle: "Fórmulas, tabelas, gráficos e análise.",
    icon: FileSpreadsheet,
  },
  {
    id: "powerbi",
    title: "Power BI",
    subtitle: "Dashboards, DAX, modelagem e relatórios.",
    icon: BarChart3,
  },
  {
    id: "dados",
    title: "Dados",
    subtitle: "SQL, lógica, análise e visão de negócio.",
    icon: Database,
  },
  {
    id: "project",
    title: "MS Project",
    subtitle: "Planejamento, cronograma e gestão de projetos.",
    icon: LineChart,
  },
] as const;

const questions: Record<Track, Question[]> = {
  excel: [
    {
      question: "Para que serve a Tabela Dinâmica no Excel?",
      options: [
        "Criar senhas automáticas",
        "Resumir e analisar grandes volumes de dados",
        "Editar imagens",
        "Bloquear células",
      ],
      correct: 1,
    },
    {
      question: "Qual função moderna substitui o PROCV em muitos cenários?",
      options: ["SOMASE", "PROCX", "CONT.VALORES", "AGORA"],
      correct: 1,
    },
    {
      question: "O que significa uma referência absoluta como $A$1?",
      options: [
        "A célula fica oculta",
        "A referência não muda ao copiar a fórmula",
        "A célula vira texto",
        "A fórmula é apagada automaticamente",
      ],
      correct: 1,
    },
    {
      question: "Para que serve o Power Query?",
      options: [
        "Criar animações",
        "Tratar, transformar e carregar dados",
        "Criar senhas",
        "Substituir o Windows",
      ],
      correct: 1,
    },
    {
      question: "O que é um dashboard?",
      options: [
        "Um painel visual para acompanhar indicadores",
        "Uma função financeira",
        "Uma aba oculta",
        "Uma macro obrigatória",
      ],
      correct: 0,
    },
  ],
  powerbi: [
    {
      question: "O que é uma medida no Power BI?",
      options: [
        "Uma coluna fixa",
        "Um cálculo dinâmico feito geralmente com DAX",
        "Uma imagem",
        "Um relacionamento físico",
      ],
      correct: 1,
    },
    {
      question: "O que é DAX?",
      options: [
        "Uma linguagem de cálculo usada no Power BI",
        "Um tipo de gráfico",
        "Um banco de dados",
        "Um formato de imagem",
      ],
      correct: 0,
    },
    {
      question: "Para que servem relacionamentos entre tabelas?",
      options: [
        "Para conectar dados entre tabelas diferentes",
        "Para mudar a cor dos gráficos",
        "Para exportar PDF",
        "Para criar usuários",
      ],
      correct: 0,
    },
    {
      question: "O Power BI Desktop é usado principalmente para:",
      options: [
        "Criar relatórios e modelos de dados",
        "Editar vídeos",
        "Criar sites",
        "Enviar e-mails",
      ],
      correct: 0,
    },
    {
      question: "O que significa ETL?",
      options: [
        "Editar, testar e lançar",
        "Extrair, transformar e carregar dados",
        "Enviar tabela local",
        "Excluir todos os lançamentos",
      ],
      correct: 1,
    },
  ],
  dados: [
    {
      question: "O que é SQL?",
      options: [
        "Uma linguagem para consultar e manipular bancos de dados",
        "Um editor de imagens",
        "Uma ferramenta de apresentação",
        "Uma rede social",
      ],
      correct: 0,
    },
    {
      question: "O que é análise de dados?",
      options: [
        "Decorar tabelas",
        "Transformar dados em informação para tomada de decisão",
        "Apagar bancos antigos",
        "Criar imagens automáticas",
      ],
      correct: 1,
    },
    {
      question: "O que é um KPI?",
      options: [
        "Um indicador-chave de desempenho",
        "Um tipo de cabo",
        "Uma fórmula secreta",
        "Uma senha de sistema",
      ],
      correct: 0,
    },
    {
      question: "Qual habilidade é essencial para trabalhar com dados?",
      options: [
        "Memorizar botões",
        "Pensamento analítico",
        "Editar vídeos",
        "Desenhar logos",
      ],
      correct: 1,
    },
    {
      question: "O que é modelagem de dados?",
      options: [
        "Organizar estruturas e relações entre dados",
        "Criar fotos realistas",
        "Formatar textos",
        "Desinstalar sistemas",
      ],
      correct: 0,
    },
  ],
  project: [
    {
      question: "Para que serve o MS Project?",
      options: [
        "Gerenciar cronogramas, recursos e atividades de projetos",
        "Editar fotos",
        "Criar bancos de dados",
        "Montar dashboards de vendas",
      ],
      correct: 0,
    },
    {
      question: "O que é caminho crítico?",
      options: [
        "A sequência de atividades que impacta diretamente o prazo final",
        "A cor vermelha do cronograma",
        "Uma aba do Excel",
        "Um tipo de recurso material",
      ],
      correct: 0,
    },
    {
      question: "O que é uma EAP?",
      options: [
        "Estrutura Analítica do Projeto",
        "Estoque Anual de Pessoas",
        "Erro Automático de Planejamento",
        "Entrada Avançada de Produtos",
      ],
      correct: 0,
    },
    {
      question: "O que acontece quando um recurso está superalocado?",
      options: [
        "Ele está com mais trabalho do que sua disponibilidade permite",
        "Ele foi removido do projeto",
        "Ele virou marco",
        "Ele está sem custo",
      ],
      correct: 0,
    },
    {
      question: "O que é uma linha de base?",
      options: [
        "Um registro do planejamento aprovado para comparação futura",
        "Uma linha decorativa",
        "Uma fórmula de custo",
        "Um gráfico de pizza",
      ],
      correct: 0,
    },
  ],
};

export default function Diagnostico() {
  const [track, setTrack] = useState<Track | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);

  const currentQuestions = track ? questions[track] : [];
  const currentIndex = answers.length;
  const isFinished = track && answers.length === currentQuestions.length;

  const score = useMemo(() => {
    if (!track) return 0;

    return answers.reduce((total, answer, index) => {
      return answer === questions[track][index].correct ? total + 1 : total;
    }, 0);
  }, [answers, track]);

  const percentage = track ? Math.round((score / currentQuestions.length) * 100) : 0;

  const level = useMemo(() => {
    if (percentage <= 40) return "Iniciante";
    if (percentage <= 75) return "Intermediário";
    return "Avançado";
  }, [percentage]);

  const recommendation = useMemo(() => {
    if (level === "Iniciante") {
      return {
        title: "Comece pela Yto Academy",
        text: "Você precisa fortalecer a base antes de avançar. A Yto Academy é o melhor caminho para estudar no seu ritmo.",
        link: "/yto-academy",
        cta: "Conhecer a Yto Academy",
      };
    }

    if (level === "Intermediário") {
      return {
        title: "Avance para uma formação prática",
        text: "Você já tem base, mas precisa transformar conhecimento em prática profissional. A Formação em Data Analytics pode acelerar esse processo.",
        link: "/formacao-data-analytics",
        cta: "Ver Formação Data Analytics",
      };
    }

    return {
      title: "Evolua para o nível estratégico",
      text: "Você já tem uma boa base técnica. Agora pode avançar para uma visão mais estratégica em dados, gestão e negócios.",
      link: "/pos-graduacao-dados",
      cta: "Ver Pós-graduação",
    };
  }, [level]);

  const reset = () => {
    setTrack(null);
    setAnswers([]);
  };

  return (
    <Layout>
      <section
        className="relative min-h-screen overflow-hidden py-24"
        style={{ background: "oklch(0.07 0.022 250)" }}
      >
        <div className="absolute inset-0 bg-dot-grid opacity-30" />

        <div
          className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, oklch(0.56 0.23 250 / 0.22) 0%, transparent 70%)",
            filter: "blur(35px)",
          }}
        />

        <div className="container-xl relative z-10">
          <motion.div
            className="mx-auto mb-14 max-w-4xl text-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 240, damping: 28 }}
          >
            <span className="section-tag">Diagnóstico gratuito</span>

            <h1
              className="mt-6 font-bold leading-tight"
              style={{
                fontSize: "clamp(2.4rem, 6vw, 4.8rem)",
                color: "oklch(0.96 0.004 250)",
                fontFamily: "var(--font-heading)",
                letterSpacing: "-0.04em",
              }}
            >
              Descubra seu nível em{" "}
              <span className="text-gradient-static">Excel, Power BI e Dados</span>
            </h1>

            <p
              className="mx-auto mt-6 max-w-2xl text-base leading-relaxed md:text-lg"
              style={{ color: "oklch(0.62 0.012 250)" }}
            >
              Responda algumas perguntas rápidas e receba uma recomendação de caminho
              para evoluir com mais clareza.
            </p>
          </motion.div>

          <div
            className="mx-auto max-w-5xl rounded-3xl p-5 md:p-8"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.12 0.028 250 / 0.96), oklch(0.09 0.024 250 / 0.96))",
              border: "1px solid oklch(0.28 0.040 250 / 0.60)",
              boxShadow: "0 32px 90px oklch(0.03 0.010 250 / 0.70)",
            }}
          >
            {!track && (
              <div>
                <div className="mb-8 text-center">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{
                      background: "oklch(0.56 0.23 250 / 0.14)",
                      border: "1px solid oklch(0.56 0.23 250 / 0.35)",
                    }}
                  >
                    <ClipboardCheck
                      className="h-7 w-7"
                      style={{ color: "oklch(0.72 0.20 250)" }}
                    />
                  </div>

                  <h2
                    className="text-2xl font-bold md:text-3xl"
                    style={{
                      color: "oklch(0.94 0.006 250)",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    Qual área você quer avaliar?
                  </h2>

                  <p className="mt-3 text-sm" style={{ color: "oklch(0.55 0.010 250)" }}>
                    Escolha uma trilha para começar seu diagnóstico.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {tracks.map((item) => {
                    const Icon = item.icon;

                    return (
                      <button
                        key={item.id}
                        onClick={() => setTrack(item.id)}
                        className="group rounded-2xl p-6 text-left transition-all duration-200"
                        style={{
                          background: "oklch(0.14 0.030 250)",
                          border: "1px solid oklch(0.28 0.038 250 / 0.60)",
                        }}
                      >
                        <div className="mb-5 flex items-center justify-between">
                          <div
                            className="flex h-12 w-12 items-center justify-center rounded-xl"
                            style={{
                              background: "oklch(0.56 0.23 250 / 0.12)",
                              color: "oklch(0.70 0.18 250)",
                            }}
                          >
                            <Icon className="h-6 w-6" />
                          </div>

                          <ArrowRight
                            className="h-5 w-5 transition-transform group-hover:translate-x-1"
                            style={{ color: "oklch(0.60 0.18 250)" }}
                          />
                        </div>

                        <h3
                          className="mb-2 text-xl font-bold"
                          style={{
                            color: "oklch(0.93 0.006 250)",
                            fontFamily: "var(--font-heading)",
                          }}
                        >
                          {item.title}
                        </h3>

                        <p className="text-sm leading-relaxed" style={{ color: "oklch(0.58 0.010 250)" }}>
                          {item.subtitle}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {track && !isFinished && (
              <div>
                <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <span className="section-tag">
                      Pergunta {currentIndex + 1} de {currentQuestions.length}
                    </span>

                    <h2
                      className="mt-4 text-2xl font-bold md:text-3xl"
                      style={{
                        color: "oklch(0.94 0.006 250)",
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      {currentQuestions[currentIndex].question}
                    </h2>
                  </div>

                  <button
                    onClick={reset}
                    className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold"
                    style={{
                      color: "oklch(0.62 0.014 250)",
                      border: "1px solid oklch(0.26 0.036 250 / 0.60)",
                    }}
                  >
                    <RotateCcw className="h-4 w-4" />
                    Reiniciar
                  </button>
                </div>

                <div className="mb-8 h-2 overflow-hidden rounded-full" style={{ background: "oklch(0.18 0.030 250)" }}>
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{
                      width: `${(currentIndex / currentQuestions.length) * 100}%`,
                      background: "oklch(0.56 0.23 250)",
                    }}
                  />
                </div>

                <div className="grid gap-3">
                  {currentQuestions[currentIndex].options.map((option, index) => (
                    <button
                      key={option}
                      onClick={() => setAnswers([...answers, index])}
                      className="rounded-2xl p-5 text-left text-sm font-medium transition-all duration-200 hover:translate-x-1"
                      style={{
                        background: "oklch(0.13 0.028 250)",
                        border: "1px solid oklch(0.26 0.036 250 / 0.60)",
                        color: "oklch(0.82 0.008 250)",
                      }}
                    >
                      {String.fromCharCode(65 + index)}) {option}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {track && isFinished && (
              <div className="grid gap-8 lg:grid-cols-[1fr_380px] lg:items-center">
                <div>
                  <div
                    className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl"
                    style={{
                      background: "oklch(0.56 0.23 250 / 0.14)",
                      border: "1px solid oklch(0.56 0.23 250 / 0.35)",
                    }}
                  >
                    <Gauge className="h-8 w-8" style={{ color: "oklch(0.72 0.20 250)" }} />
                  </div>

                  <span className="section-tag">Resultado do diagnóstico</span>

                  <h2
                    className="mt-4 text-3xl font-bold md:text-4xl"
                    style={{
                      color: "oklch(0.94 0.006 250)",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    Seu nível atual é{" "}
                    <span className="text-gradient-static">{level}</span>
                  </h2>

                  <p className="mt-5 max-w-2xl leading-relaxed" style={{ color: "oklch(0.60 0.012 250)" }}>
                    Você acertou <strong>{score}</strong> de{" "}
                    <strong>{currentQuestions.length}</strong> perguntas. Esse diagnóstico
                    não define seu limite, mas mostra o próximo degrau da sua evolução.
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {[
                      "Clareza sobre seu nível atual",
                      "Indicação da próxima trilha",
                      "Direção para estudar melhor",
                      "Caminho alinhado ao mercado",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle2
                          className="h-4 w-4"
                          style={{ color: "oklch(0.62 0.20 250)" }}
                        />
                        <span className="text-sm" style={{ color: "oklch(0.62 0.012 250)" }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link to={recommendation.link} className="btn-primary">
                      {recommendation.cta}
                      <ArrowRight className="h-4 w-4" />
                    </Link>

                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Falar com especialista
                    </a>
                  </div>

                  <button
                    onClick={reset}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold"
                    style={{ color: "oklch(0.58 0.014 250)" }}
                  >
                    <RotateCcw className="h-4 w-4" />
                    Fazer outro diagnóstico
                  </button>
                </div>

                <div
                  className="rounded-3xl p-6"
                  style={{
                    background: "oklch(0.14 0.030 250)",
                    border: "1px solid oklch(0.28 0.038 250 / 0.60)",
                  }}
                >
                  <div className="mb-6 flex items-center gap-3">
                    <GraduationCap
                      className="h-6 w-6"
                      style={{ color: "oklch(0.70 0.18 250)" }}
                    />
                    <h3
                      className="text-xl font-bold"
                      style={{
                        color: "oklch(0.93 0.006 250)",
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      {recommendation.title}
                    </h3>
                  </div>

                  <p className="mb-6 text-sm leading-relaxed" style={{ color: "oklch(0.58 0.010 250)" }}>
                    {recommendation.text}
                  </p>

                  <div
                    className="rounded-2xl p-5 text-center"
                    style={{
                      background: "oklch(0.09 0.024 250)",
                      border: "1px solid oklch(0.25 0.035 250 / 0.55)",
                    }}
                  >
                    <p className="text-sm" style={{ color: "oklch(0.58 0.010 250)" }}>
                      Aproveitamento
                    </p>

                    <p
                      className="mt-2 text-5xl font-bold"
                      style={{
                        color: "oklch(0.72 0.20 250)",
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      {percentage}%
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
