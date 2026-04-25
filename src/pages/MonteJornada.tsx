import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ROUTE_PATHS } from '@/lib/index';
import { supabase } from '../lib/supabase';

interface Question {
  id: string;
  title: string;
  options: string[];
}

const questions: Question[] = [
  {
    id: 'escolaridade',
    title: 'Qual é sua formação acadêmica?',
    options: [
      'Ensino Médio completo',
      'Cursando graduação',
      'Graduação completa',
      'Pós-graduado ou MBA',
    ],
  },
  {
    id: 'nivel',
    title: 'Qual o seu nível hoje em dados?',
    options: [
      'Nunca tive contato com análise de dados',
      'Já tenho uma base básica (Excel ou similares)',
      'Já trabalho com dados, mas quero evoluir',
      'Já atuo com dados e quero me especializar',
    ],
  },
  {
    id: 'objetivo',
    title: 'O que você quer conquistar?',
    options: [
      'Entrar na área de dados',
      'Crescer na minha área atual usando dados',
      'Mudar de carreira',
      'Resolver um problema específico',
    ],
  },
  {
    id: 'tempo',
    title: 'Quanto tempo você consegue dedicar por semana?',
    options: [
      'Até 3 horas',
      'De 3 a 6 horas',
      'Mais de 6 horas',
    ],
  },
  {
    id: 'perfil',
    title: 'Como você prefere aprender?',
    options: [
      'No meu ritmo, com liberdade',
      'Com direcionamento estruturado',
      'Com acompanhamento próximo',
      '100% personalizado para minha necessidade',
    ],
  },
];

interface Result {
  title: string;
  text: string;
  cta: string;
  path: string;
  whatsappMsg: string;
}

function calcResult(answers: Record<string, string>): Result {
  const { escolaridade, nivel, objetivo, perfil } = answers;

  if (
    escolaridade === 'Pós-graduado ou MBA' ||
    nivel === 'Já atuo com dados e quero me especializar'
  ) {
    return {
      title: 'Hora de levar sua carreira para outro nível',
      text: 'Você já possui base sólida e está pronto para uma formação mais estratégica. A Pós-graduação em Gestão Estratégica de Dados é o próximo passo para acelerar sua evolução profissional com diploma reconhecido pelo MEC.',
      cta: 'Conhecer a Pós-graduação',
      path: ROUTE_PATHS.POS_GRADUACAO,
      whatsappMsg: 'Olá! Acabei de fazer o quiz do site e meu perfil indicou a Pós-graduação em Gestão Estratégica de Dados. Gostaria de saber mais!',
    };
  }

  if (perfil === '100% personalizado para minha necessidade') {
    return {
      title: 'Sua melhor opção é uma mentoria personalizada',
      text: 'Pelo seu perfil, o caminho mais eficiente é um acompanhamento direto, focado exatamente no que você precisa resolver. A Mentoria VIP garante evolução rápida com atenção individualizada.',
      cta: 'Falar sobre Mentoria VIP',
      path: ROUTE_PATHS.MENTORIA_VIP,
      whatsappMsg: 'Olá! Fiz o quiz do site e meu perfil indicou a Mentoria VIP. Gostaria de saber mais sobre as aulas individuais!',
    };
  }

  if (
    nivel === 'Nunca tive contato com análise de dados' ||
    nivel === 'Já tenho uma base básica (Excel ou similares)'
  ) {
    return {
      title: 'Seu melhor caminho começa pela Yto Academy',
      text: 'Pelo seu perfil, o ideal é começar construindo uma base sólida e prática no seu ritmo. A Yto Academy oferece acesso a dezenas de cursos para você evoluir com consistência antes de avançar para formações mais avançadas.',
      cta: 'Começar agora na Yto Academy',
      path: ROUTE_PATHS.YTO_ACADEMY,
      whatsappMsg: 'Olá! Fiz o quiz do site e meu perfil indicou a Yto Academy como o melhor ponto de partida. Gostaria de saber mais!',
    };
  }

  if (
    objetivo === 'Entrar na área de dados' ||
    objetivo === 'Mudar de carreira'
  ) {
    return {
      title: 'Você está pronto para iniciar sua carreira em dados',
      text: 'Com base no seu objetivo, o melhor caminho é uma formação estruturada que te leve do zero até o mercado, com foco em prática e aplicação real. A Formação em Data Analytics é exatamente isso.',
      cta: 'Conhecer formação em Data Analytics',
      path: ROUTE_PATHS.DATA_ANALYTICS,
      whatsappMsg: 'Olá! Fiz o quiz do site e meu perfil indicou a Formação em Data Analytics. Gostaria de saber mais sobre o programa!',
    };
  }

  return {
    title: 'Seu melhor caminho começa pela Yto Academy',
    text: 'Pelo seu perfil, o ideal é começar construindo uma base sólida e prática no seu ritmo. A Yto Academy oferece acesso a dezenas de cursos para evoluir com consistência.',
    cta: 'Começar agora na Yto Academy',
    path: ROUTE_PATHS.YTO_ACADEMY,
    whatsappMsg: 'Olá! Fiz o quiz do site e meu perfil indicou a Yto Academy como o melhor caminho. Gostaria de saber mais!',
  };
}

function calcPontuacao(answers: Record<string, string>): number {
  let score = 0;

  if (answers.escolaridade === 'Graduação completa') score += 2;
  if (answers.escolaridade === 'Pós-graduado ou MBA') score += 3;

  if (answers.nivel === 'Já tenho uma base básica (Excel ou similares)') score += 1;
  if (answers.nivel === 'Já trabalho com dados, mas quero evoluir') score += 2;
  if (answers.nivel === 'Já atuo com dados e quero me especializar') score += 3;

  if (answers.tempo === 'De 3 a 6 horas') score += 1;
  if (answers.tempo === 'Mais de 6 horas') score += 2;

  if (answers.perfil === 'Com acompanhamento próximo') score += 2;
  if (answers.perfil === '100% personalizado para minha necessidade') score += 3;

  return score;
}

const METRICS = [
  { value: '+100k', label: 'alunos formados' },
  { value: '+200', label: 'empresas atendidas' },
  { value: '26+', label: 'anos de experiência' },
];

type Stage = 'intro' | 'questions' | 'analyzing' | 'lead' | 'result';

export default function MonteJornada() {
  const [stage, setStage] = useState<Stage>('intro');
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<Result | null>(null);
  const [pontuacao, setPontuacao] = useState(0);

  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  const handleStart = () => setStage('questions');

  const handleAnswer = (option: string) => {
    const q = questions[currentQ];
    const newAnswers = { ...answers, [q.id]: option };
    setAnswers(newAnswers);

    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setStage('analyzing');

      setTimeout(() => {
        const finalResult = calcResult(newAnswers);
        const finalScore = calcPontuacao(newAnswers);

        setResult(finalResult);
        setPontuacao(finalScore);
        setStage('lead');
      }, 2200);
    }
  };

  const handleBack = () => {
    if (currentQ > 0) setCurrentQ(currentQ - 1);
  };

  const handleRestart = () => {
    setStage('intro');
    setCurrentQ(0);
    setAnswers({});
    setResult(null);
    setPontuacao(0);
    setNomeCompleto('');
    setEmail('');
    setWhatsapp('');
    setFormError('');
  };

  const handleLeadSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nomeCompleto.trim() || !email.trim() || !whatsapp.trim()) {
      setFormError('Preencha nome, e-mail e WhatsApp para ver seu resultado.');
      return;
    }

    if (!result) {
      setFormError('Não encontramos o resultado do quiz. Tente novamente.');
      return;
    }

    setIsSubmitting(true);
    setFormError('');

    const { error } = await supabase.from('leads_jornada').insert([
      {
        nome_completo: nomeCompleto.trim(),
        email: email.trim(),
        whatsapp: whatsapp.trim(),
        perfil_resultado: result.title,
        pontuacao,
        origem_pagina: 'monte-sua-jornada',
      },
    ]);

    setIsSubmitting(false);

    if (error) {
      console.error('Erro ao salvar lead:', error);
      setFormError('Não conseguimos salvar seus dados agora. Tente novamente em alguns instantes.');
      return;
    }

    setStage('result');
  };

  const progress =
    stage === 'questions'
      ? (currentQ / questions.length) * 100
      : stage === 'analyzing' || stage === 'lead' || stage === 'result'
        ? 100
        : 0;

  return (
    <Layout>
      <div
        className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
        style={{ background: 'var(--brand-navy)', paddingTop: '5rem', paddingBottom: '5rem' }}
      >
        <div className="orb orb-blue" style={{ width: '700px', height: '600px', top: '-20%', right: '-10%', opacity: 0.20 }} />
        <div className="orb orb-cyan" style={{ width: '500px', height: '400px', bottom: '-15%', left: '-8%', opacity: 0.14 }} />
        <div className="bg-dot-grid absolute inset-0 opacity-20" />

        {stage !== 'intro' && (
          <div className="fixed top-0 left-0 right-0 z-[60] h-1" style={{ background: 'oklch(0.16 0.028 250 / 0.60)' }}>
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(to right, oklch(0.56 0.23 250), oklch(0.72 0.20 250))' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>
        )}

        <div className="container-xl relative z-10 w-full max-w-2xl">
          <AnimatePresence mode="wait">
            {stage === 'intro' && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center px-4"
              >
                <span
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold mb-8"
                  style={{ background: 'oklch(0.56 0.23 250 / 0.12)', border: '1px solid oklch(0.56 0.23 250 / 0.28)', color: 'oklch(0.72 0.18 250)' }}
                >
                  🧭 Consultor Inteligente
                </span>

                <h1
                  className="font-bold mb-5 leading-tight"
                  style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)', color: 'oklch(0.96 0.006 250)', fontFamily: 'var(--font-heading)' }}
                >
                  Descubra o melhor caminho para sua carreira em dados
                </h1>
                <p className="text-lg mb-4 max-w-xl mx-auto" style={{ color: 'oklch(0.60 0.012 250)', lineHeight: 1.7 }}>
                  Responda algumas perguntas rápidas e receba uma recomendação personalizada baseada no seu momento atual.
                </p>
                <p className="text-sm mb-10" style={{ color: 'oklch(0.46 0.010 250)' }}>
                  Em menos de 1 minuto, vamos te mostrar o caminho mais eficiente para evoluir em dados.
                </p>

                <button
                  onClick={handleStart}
                  className="inline-flex items-center gap-2 px-9 py-4 rounded-xl text-base font-bold transition-all duration-200 hover:scale-105 mb-14"
                  style={{ background: 'oklch(0.56 0.23 250)', color: 'white', boxShadow: '0 10px 32px oklch(0.56 0.23 250 / 0.40)' }}
                >
                  Começar agora <ChevronRight className="w-5 h-5" />
                </button>

                <div className="flex flex-wrap justify-center gap-8">
                  {METRICS.map((m) => (
                    <div key={m.label} className="text-center">
                      <p className="text-2xl font-bold" style={{ color: 'oklch(0.72 0.20 250)', fontFamily: 'var(--font-heading)' }}>{m.value}</p>
                      <p className="text-xs mt-0.5" style={{ color: 'oklch(0.46 0.010 250)' }}>{m.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {stage === 'questions' && (
              <motion.div
                key={`q-${currentQ}`}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
                className="px-4"
              >
                <div className="flex items-center justify-between mb-8">
                  <button
                    onClick={handleBack}
                    disabled={currentQ === 0}
                    className="inline-flex items-center gap-1.5 text-sm transition-opacity disabled:opacity-0"
                    style={{ color: 'oklch(0.56 0.016 250)' }}
                  >
                    <ArrowLeft className="w-4 h-4" /> Voltar
                  </button>
                  <span className="text-xs font-semibold" style={{ color: 'oklch(0.46 0.010 250)' }}>
                    {currentQ + 1} de {questions.length}
                  </span>
                </div>

                <h2
                  className="text-2xl font-bold mb-10 text-center leading-snug"
                  style={{ color: 'oklch(0.94 0.006 250)', fontFamily: 'var(--font-heading)' }}
                >
                  {questions[currentQ].title}
                </h2>

                <div className="space-y-3">
                  {questions[currentQ].options.map((opt) => (
                    <motion.button
                      key={opt}
                      whileHover={{ scale: 1.015 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => handleAnswer(opt)}
                      className="w-full text-left px-6 py-4 rounded-xl font-medium text-sm transition-all duration-150"
                      style={{
                        background: 'oklch(0.13 0.026 250 / 0.80)',
                        border: '1px solid oklch(0.26 0.036 250 / 0.55)',
                        color: 'oklch(0.82 0.008 250)',
                      }}
                    >
                      {opt}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {stage === 'analyzing' && (
              <motion.div
                key="analyzing"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center px-4"
              >
                <div className="flex justify-center mb-8">
                  <div className="relative w-20 h-20">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="absolute inset-0 rounded-full"
                        style={{ border: '2px solid oklch(0.56 0.23 250 / 0.40)' }}
                        animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                        transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.5, ease: 'easeOut' }}
                      />
                    ))}
                    <div
                      className="absolute inset-0 rounded-full flex items-center justify-center text-2xl"
                      style={{ background: 'oklch(0.56 0.23 250 / 0.14)', border: '1px solid oklch(0.56 0.23 250 / 0.35)' }}
                    >
                      🧭
                    </div>
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-3" style={{ color: 'oklch(0.94 0.006 250)', fontFamily: 'var(--font-heading)' }}>
                  Analisando seu perfil…
                </h2>
                <p className="text-sm" style={{ color: 'oklch(0.52 0.010 250)' }}>
                  Identificando o melhor caminho para você
                </p>
              </motion.div>
            )}

            {stage === 'lead' && result && (
              <motion.div
                key="lead"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="px-4"
              >
                <div
                  className="rounded-2xl p-8"
                  style={{ background: 'oklch(0.13 0.026 250 / 0.85)', border: '1px solid oklch(0.28 0.040 250 / 0.55)' }}
                >
                  <div className="text-center mb-8">
                    <span
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold mb-5"
                      style={{ background: 'oklch(0.56 0.23 250 / 0.12)', border: '1px solid oklch(0.56 0.23 250 / 0.28)', color: 'oklch(0.72 0.18 250)' }}
                    >
                      Resultado pronto
                    </span>
                    <h2 className="text-2xl font-bold mb-3" style={{ color: 'oklch(0.94 0.006 250)', fontFamily: 'var(--font-heading)' }}>
                      Para ver sua recomendação, preencha seus dados
                    </h2>
                    <p className="text-sm leading-relaxed" style={{ color: 'oklch(0.58 0.010 250)' }}>
                      Vamos salvar seu resultado para nossa equipe te orientar melhor, sem compromisso.
                    </p>
                  </div>

                  <form onSubmit={handleLeadSubmit} className="space-y-4">
                    <input
                      value={nomeCompleto}
                      onChange={(e) => setNomeCompleto(e.target.value)}
                      placeholder="Nome completo"
                      className="w-full px-5 py-4 rounded-xl text-sm outline-none"
                      style={{ background: 'oklch(0.10 0.024 250)', border: '1px solid oklch(0.26 0.036 250 / 0.70)', color: 'oklch(0.92 0.006 250)' }}
                    />

                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="E-mail"
                      type="email"
                      className="w-full px-5 py-4 rounded-xl text-sm outline-none"
                      style={{ background: 'oklch(0.10 0.024 250)', border: '1px solid oklch(0.26 0.036 250 / 0.70)', color: 'oklch(0.92 0.006 250)' }}
                    />

                    <input
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="WhatsApp com DDD"
                      className="w-full px-5 py-4 rounded-xl text-sm outline-none"
                      style={{ background: 'oklch(0.10 0.024 250)', border: '1px solid oklch(0.26 0.036 250 / 0.70)', color: 'oklch(0.92 0.006 250)' }}
                    />

                    {formError && (
                      <p className="text-sm" style={{ color: 'oklch(0.70 0.20 30)' }}>
                        {formError}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold transition-all duration-200 disabled:opacity-60"
                      style={{ background: 'oklch(0.56 0.23 250)', color: 'white', boxShadow: '0 8px 24px oklch(0.56 0.23 250 / 0.35)' }}
                    >
                      {isSubmitting ? 'Salvando...' : 'Ver meu resultado'} <ChevronRight className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </motion.div>
            )}

            {stage === 'result' && result && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="px-4"
              >
                <div className="text-center mb-10">
                  <span
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
                    style={{ background: 'oklch(0.62 0.18 160 / 0.14)', border: '1px solid oklch(0.62 0.18 160 / 0.35)', color: 'oklch(0.72 0.16 160)' }}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" /> Análise concluída
                  </span>
                  <h2
                    className="text-2xl font-bold mb-5 leading-snug"
                    style={{ color: 'oklch(0.94 0.006 250)', fontFamily: 'var(--font-heading)' }}
                  >
                    {result.title}
                  </h2>
                  <p className="text-base max-w-xl mx-auto leading-relaxed" style={{ color: 'oklch(0.60 0.012 250)' }}>
                    {result.text}
                  </p>
                </div>

                <div
                  className="rounded-2xl p-8 text-center mb-6"
                  style={{ background: 'oklch(0.13 0.026 250 / 0.85)', border: '1px solid oklch(0.28 0.040 250 / 0.55)' }}
                >
                  <p className="text-sm mb-6" style={{ color: 'oklch(0.54 0.010 250)' }}>
                    Quer saber mais? Fale com nossa equipe pelo WhatsApp e receba orientação personalizada.
                  </p>
                  <a
                    href={`https://wa.me/5511910704164?text=${encodeURIComponent(result.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold transition-all duration-200 hover:scale-105 mb-4"
                    style={{ background: '#25D366', color: 'white', boxShadow: '0 8px 24px rgba(37,211,102,0.30)' }}
                  >
                    💬 {result.cta} via WhatsApp
                  </a>
                  <br />
                  <a
                    href={result.path}
                    className="inline-flex items-center gap-1.5 text-sm transition-all duration-150 hover:underline"
                    style={{ color: 'oklch(0.62 0.18 250)' }}
                  >
                    Ou ver mais sobre essa solução <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="text-center">
                  <button
                    onClick={handleRestart}
                    className="text-sm transition-opacity hover:opacity-70"
                    style={{ color: 'oklch(0.46 0.010 250)' }}
                  >
                    Refazer o quiz
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Layout>
  );
}
