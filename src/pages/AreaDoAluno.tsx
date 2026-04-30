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
            className="group rounded-3xl border border-blue-500/30 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-blue-500/10 hover:shadow-2xl hover:shadow-blue-900/40"
          >
            <div className="flex justify-center mb-6">
              <img
                src="/images/Logo/yto-academy-logo-transparent.png"
                alt="Yto Academy"
                className="h-24 object-contain mx-auto transition-all duration-300 group-hover:scale-110 drop-shadow-[0_0_20px_rgba(59,130,246,0.25)] group-hover:drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]"
              />
            </div>

            <h2 className="text-2xl font-bold mb-3">Yto Academy</h2>

            <p className="text-gray-400 mb-6">
              Plataforma de cursos, formações e trilhas de desenvolvimento
              profissional.
            </p>

            <div className="inline-flex items-center gap-2 text-blue-400 font-semibold transition-all duration-300 group-hover:gap-3">
              Acessar plataforma
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </a>

          {/* Torii Nihon */}
          <div className="group rounded-3xl border border-purple-500/30 bg-white/5 p-8 opacity-90 transition-all duration-300 hover:-translate-y-2 hover:bg-purple-500/10 hover:shadow-2xl hover:shadow-purple-900/40">
            <div className="flex justify-center mb-6">
              <img
                src="/images/Logo/torii-nihon-logo-transparent.png"
                alt="Torii Nihon"
                className="h-24 object-contain mx-auto transition-all duration-300 group-hover:scale-110 drop-shadow-[0_0_20px_rgba(168,85,247,0.25)] group-hover:drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]"
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
