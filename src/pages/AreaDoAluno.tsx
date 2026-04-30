import { ArrowRight, Clock } from "lucide-react";

const AreaDoAluno = () => {
  return (
    <main className="min-h-screen bg-[#020817] text-white flex items-center justify-center px-6 py-24">
      <section className="w-full max-w-5xl text-center">
        <span className="inline-block mb-4 rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
          Área do Aluno
        </span>

        <h1 className="text-4xl md:text-6xl font-bold mb-5">
          Escolha sua plataforma de acesso
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
          Acesse seus estudos, cursos, certificados, notas e materiais dentro do
          ecossistema do Grupo Yto Nihon.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Yto Academy */}
          <a
            href="https://www.ytoacademy.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl border border-blue-500/30 bg-white/5 p-8 hover:bg-blue-500/10 transition-all duration-300 shadow-2xl shadow-blue-950/30"
          >
            <div className="h-28 flex items-center justify-center mb-8">
              <img
                src="/images/Logo/yto-academy-logo.png"
                alt="Yto Academy"
                className="max-h-24 max-w-full object-contain"
              />
            </div>

            <h2 className="text-2xl font-bold mb-3">Yto Academy</h2>

            <p className="text-gray-400 mb-6">
              Plataforma de cursos, formações e trilhas de desenvolvimento
              profissional.
            </p>

            <div className="inline-flex items-center gap-2 text-blue-400 font-semibold">
              Acessar plataforma
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Torii Nihon */}
          <div className="rounded-3xl border border-purple-500/30 bg-white/5 p-8 opacity-90 shadow-2xl shadow-purple-950/20">
            <div className="h-28 flex items-center justify-center mb-8">
              <img
                src="/images/Logo/torii-nihon-logo.png"
                alt="Torii Nihon"
                className="max-h-24 max-w-full object-contain"
              />
            </div>

            <h2 className="text-2xl font-bold mb-3">Torii Nihon</h2>

            <p className="text-gray-400 mb-6">
              Portal do aluno para acompanhar estudos, notas, certificados e
              informações acadêmicas.
            </p>

            <div className="inline-flex items-center gap-2 text-purple-300 font-semibold">
              <Clock className="w-5 h-5" />
              Em breve
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AreaDoAluno;
