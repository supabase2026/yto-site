import { Link } from "react-router-dom";

const CursoExcelBarueri = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">

      <section className="py-20">
        <div className="container-xl">

          <h1 className="text-4xl font-bold mb-6">
            Curso de Excel em Barueri e Alphaville
          </h1>

          <p className="text-lg mb-6">
            Aprenda Excel do básico ao avançado com aulas práticas e focadas no mercado.
            O Grupo Yto Nihon oferece cursos online, presenciais e treinamentos para empresas em Barueri e região.
          </p>

          <p className="mb-6">
            Se você busca crescer profissionalmente, mudar de carreira ou capacitar sua equipe,
            este curso é ideal para você.
          </p>

          <Link
            to="/treinamento-corporativo"
            className="inline-block px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold"
          >
            Falar com especialista
          </Link>

        </div>
      </section>

    </div>
  );
};

export default CursoExcelBarueri;
