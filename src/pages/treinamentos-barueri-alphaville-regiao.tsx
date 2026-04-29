const TreinamentosBarueriAlphavilleRegiao = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-20">
      <section className="max-w-6xl mx-auto">
        <p className="text-blue-400 font-semibold mb-4">
          Grupo Yto Nihon • Barueri, Alphaville e Região
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Treinamentos em Barueri, Alphaville e Região
        </h1>

        <p className="text-lg text-slate-300 max-w-3xl mb-10">
          Cursos e treinamentos profissionais de Excel, Power BI, análise de dados
          e tecnologia para alunos, profissionais e empresas em Barueri,
          Alphaville, Osasco e Santana de Parnaíba.
        </p>

        <a
          href="https://wa.me/5511910704164"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl"
        >
          Falar com a Yto pelo WhatsApp
        </a>
      </section>

      <section className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 gap-8">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Cursos de Excel</h2>
          <ul className="space-y-3 text-slate-300">
            <li><a href="/curso-excel-barueri" className="hover:text-blue-400">Curso de Excel em Barueri</a></li>
            <li><a href="/curso-excel-alphaville" className="hover:text-blue-400">Curso de Excel em Alphaville</a></li>
            <li><a href="/curso-excel-osasco" className="hover:text-blue-400">Curso de Excel em Osasco</a></li>
            <li><a href="/curso-excel-santana-de-parnaiba" className="hover:text-blue-400">Curso de Excel em Santana de Parnaíba</a></li>
          </ul>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Cursos de Power BI</h2>
          <ul className="space-y-3 text-slate-300">
            <li><a href="/curso-power-bi-barueri" className="hover:text-blue-400">Curso de Power BI em Barueri</a></li>
            <li><a href="/curso-power-bi-alphaville" className="hover:text-blue-400">Curso de Power BI em Alphaville</a></li>
            <li><a href="/curso-power-bi-osasco" className="hover:text-blue-400">Curso de Power BI em Osasco</a></li>
            <li><a href="/curso-power-bi-santana-de-parnaiba" className="hover:text-blue-400">Curso de Power BI em Santana de Parnaíba</a></li>
          </ul>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Treinamentos para Empresas</h2>
          <ul className="space-y-3 text-slate-300">
            <li><a href="/treinamento-excel-empresas" className="hover:text-blue-400">Treinamento de Excel para Empresas</a></li>
            <li><a href="/treinamento-power-bi-empresas" className="hover:text-blue-400">Treinamento de Power BI para Empresas</a></li>
            <li><a href="/treinamento-sql-empresas" className="hover:text-blue-400">Treinamento de SQL para Empresas</a></li>
            <li><a href="/treinamento-ia-empresas" className="hover:text-blue-400">Treinamento de IA para Empresas</a></li>
          </ul>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Atendimento Regional</h2>
          <p className="text-slate-300">
            Atendemos profissionais, alunos e empresas de Barueri, Alphaville,
            Osasco, Santana de Parnaíba e região, com treinamentos presenciais,
            online ao vivo e soluções corporativas sob medida.
          </p>
        </div>
      </section>
    </main>
  );
};

export default TreinamentosBarueriAlphavilleRegiao;
