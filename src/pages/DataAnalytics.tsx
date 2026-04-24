import Layout from "@/components/Layout";

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
              A Formação em Data Analytics do Grupo Yto Nihon foi criada para quem deseja
              entrar ou evoluir na área de dados, aprendendo ferramentas como Excel, Power BI,
              SQL e Python com uma abordagem prática, direta e conectada ao mercado.
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
                Conteúdo estruturado para evolução progressiva, do fundamento até aplicações reais.
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
              {[
                {
                  title: "Excel para análise de dados",
                  text: "Organização, tratamento, tabelas dinâmicas, funções e análises práticas."
                },
                {
                  title: "Power BI",
                  text: "Criação de dashboards, indicadores, relatórios visuais e análise de desempenho."
                },
                {
                  title: "SQL",
                  text: "Consultas, filtros, relacionamentos, agregações e extração de informações de bancos de dados."
                },
                {
                  title: "Python para dados",
                  text: "Fundamentos para análise, manipulação de dados e visualizações."
                },
                {
                  title: "Storytelling com dados",
                  text: "Como transformar números em apresentações claras, úteis e estratégicas."
                },
                {
                  title: "Projetos práticos",
                  text: "Aplicação dos conhecimentos em cenários próximos da realidade profissional."
                }
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
                >
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:px-12 lg:px-24">
          <div className="mx-auto max-w-6xl rounded-3xl border border-blue-500/30 bg-blue-500/10 p-8 md:p-12">
            <h2 className="text-3xl font-bold md:text-4xl">
              Para quem é a Formação em Data Analytics?
            </h2>

            <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">
              Essa formação é indicada para estudantes, profissionais em transição de carreira,
              analistas, assistentes, gestores e pessoas que desejam aprender análise de dados
              com uma trilha clara, prática e orientada ao mercado.
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
              A próxima turma da Formação em Data Analytics ainda não está aberta.
              Cadastre seu interesse para receber informações em primeira mão.
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
}  };

  return (
    <Layout>
      {/* ═══ HERO ═══ */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{ background: 'var(--brand-navy)', minHeight: '80vh', paddingTop: '5rem', paddingBottom: '5rem' }}
      >
        <div className="absolute inset-0 z-0">
          <img src={IMAGES.DASHBOARD_8} alt="" className="w-full h-full object-cover" style={{ opacity: 0.10, filter: 'blur(2px)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, oklch(0.09 0.030 250 / 0.85), var(--brand-navy))' }} />
        </div>
        <div className="orb orb-blue" style={{ width: '700px', height: '600px', top: '-30%', right: '-10%', opacity: 0.32 }} />
        <div className="orb orb-cyan" style={{ width: '500px', height: '400px', bottom: '-15%', left: '-5%', opacity: 0.18 }} />
        <div className="bg-dot-grid absolute inset-0 opacity-25" />

        <div className="container-xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
          >
            <span
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold mb-8"
              style={{ background: 'oklch(0.55 0.22 60 / 0.15)', border: '1px solid oklch(0.55 0.22 60 / 0.30)', color: 'oklch(0.78 0.16 60)' }}
            >
              ⏳ Em breve — Lista de espera aberta
            </span>

            <h1 className="hero-headline mb-6">
              <span style={{ color: 'oklch(0.93 0.006 250)' }}>Formação em</span><br />
              <span className="text-gradient">Data Analytics</span>
            </h1>

            <p className="hero-sub mx-auto mb-10 max-w-3xl">
              294 horas de formação completa. 16 certificados internacionais. O programa mais completo para se tornar um analista de dados em 06 meses.
            </p>

            {/* Stats pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {courseStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + index * 0.08 }}
                  className="flex items-center gap-2.5 px-5 py-3 rounded-xl"
                  style={{ background: 'oklch(0.14 0.028 250 / 0.85)', border: '1px solid oklch(0.30 0.045 250 / 0.45)', backdropFilter: 'blur(16px)' }}
                >
                  <stat.icon className="w-4 h-4" style={{ color: 'oklch(0.72 0.20 250)' }} />
                  <div className="text-left">
                    <div className="text-xs" style={{ color: 'oklch(0.52 0.010 250)' }}>{stat.label}</div>
                    <div className="text-sm font-semibold" style={{ color: 'oklch(0.88 0.006 250)' }}>{stat.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </section>

      {/* ═══ MÓDULOS ═══ */}
      <section className="section-pad" style={{ background: 'oklch(0.10 0.024 250)' }}>
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="section-tag">Currículo</span>
            <h2 className="section-headline mb-4">O Que Você Vai Aprender</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: 'oklch(0.60 0.010 250)' }}>
              Formação 100% prática em 06 módulos com as ferramentas mais demandadas pelo mercado
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod, i) => (
              <motion.div
                key={mod.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="rounded-2xl p-6"
                style={{ background: 'oklch(0.13 0.028 250 / 0.80)', border: '1px solid oklch(0.22 0.032 250 / 0.50)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: 'oklch(0.56 0.23 250 / 0.15)', border: '1px solid oklch(0.56 0.23 250 / 0.25)' }}
                >
                  <mod.icon className="w-6 h-6" style={{ color: 'oklch(0.72 0.20 250)' }} />
                </div>
                <h3 className="font-bold mb-2" style={{ color: 'oklch(0.90 0.006 250)' }}>{mod.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'oklch(0.58 0.010 250)' }}>{mod.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Tools grid */}
          <div className="mt-12">
            <p className="text-center text-sm font-medium mb-6" style={{ color: 'oklch(0.55 0.010 250)' }}>
              Ferramentas e disciplinas inclusas:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {tools.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium"
                  style={{ background: 'oklch(0.56 0.23 250 / 0.08)', border: '1px solid oklch(0.56 0.23 250 / 0.20)', color: 'oklch(0.72 0.12 250)' }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MERCADO ═══ */}
      <section className="section-pad" style={{ background: 'var(--brand-navy)' }}>
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-tag">Mercado de Dados</span>
              <h2 className="section-headline mb-6">Por que Data Analytics?</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: 'oklch(0.60 0.010 250)' }}>
                Analistas de dados são os profissionais mais requisitados do mercado. Com salários que chegam a R$ 21.900/mês e demanda crescente em todos os setores, essa carreira oferece estabilidade e crescimento acelerado.
              </p>
              <div className="space-y-3">
                {[
                  'Faixa salarial: R$ 5.600 a R$ 21.900 (Robert Half 2026)',
                  'Mais de 50.000 vagas abertas no Brasil',
                  'Alta demanda em todas as indústrias',
                  'Trabalho remoto em 80% das vagas',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'oklch(0.65 0.18 160)' }} />
                    <span className="text-sm" style={{ color: 'oklch(0.72 0.008 250)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={IMAGES.DASHBOARD_3}
                alt="Dashboard de análise de dados"
                className="w-full h-80 object-cover rounded-2xl"
                style={{ filter: 'brightness(0.85) saturate(0.9)' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ LISTA DE ESPERA ═══ */}
      <section id="lista-espera" className="section-pad" style={{ background: 'oklch(0.10 0.024 250)' }}>
        <div className="container-xl">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl p-10"
              style={{ background: 'oklch(0.12 0.028 250 / 0.90)', border: '1px solid oklch(0.28 0.040 250 / 0.50)' }}
            >
              <div className="text-center mb-8">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ background: 'oklch(0.56 0.23 250 / 0.15)', border: '1px solid oklch(0.56 0.23 250 / 0.25)' }}
                >
                  <Mail className="w-8 h-8" style={{ color: 'oklch(0.72 0.20 250)' }} />
                </div>
                <h2 className="text-2xl font-bold mb-3" style={{ color: 'oklch(0.92 0.006 250)', fontFamily: 'var(--font-heading)' }}>
                  Entre na Lista de Espera
                </h2>
                <p className="text-base" style={{ color: 'oklch(0.60 0.010 250)' }}>
                  A formação estará disponível em breve. Cadastre-se para ser o primeiro a saber quando as matrículas abrirem e receber condições especiais de lançamento.
                </p>
              </div>

              {status === 'sent' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle2 className="w-16 h-16 mx-auto mb-4" style={{ color: 'oklch(0.65 0.18 160)' }} />
                  <h3 className="text-xl font-bold mb-2" style={{ color: 'oklch(0.90 0.006 250)' }}>
                    Você está na lista! 🎉
                  </h3>
                  <p style={{ color: 'oklch(0.60 0.010 250)' }}>
                    Entraremos em contato assim que as matrículas abrirem.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'oklch(0.72 0.008 250)' }}>
                      <User className="w-4 h-4 inline mr-1.5" style={{ color: 'oklch(0.56 0.23 250)' }} />
                      Nome completo
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Seu nome"
                      required
                      className="w-full px-4 py-3 rounded-xl text-sm transition-all outline-none"
                      style={{
                        background: 'oklch(0.16 0.032 250 / 0.80)',
                        border: '1px solid oklch(0.28 0.040 250 / 0.50)',
                        color: 'oklch(0.88 0.006 250)',
                      }}
                      onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = 'oklch(0.56 0.23 250 / 0.70)'; }}
                      onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = 'oklch(0.28 0.040 250 / 0.50)'; }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'oklch(0.72 0.008 250)' }}>
                      <Mail className="w-4 h-4 inline mr-1.5" style={{ color: 'oklch(0.56 0.23 250)' }} />
                      E-mail
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seu@email.com"
                      required
                      className="w-full px-4 py-3 rounded-xl text-sm transition-all outline-none"
                      style={{
                        background: 'oklch(0.16 0.032 250 / 0.80)',
                        border: '1px solid oklch(0.28 0.040 250 / 0.50)',
                        color: 'oklch(0.88 0.006 250)',
                      }}
                      onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = 'oklch(0.56 0.23 250 / 0.70)'; }}
                      onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = 'oklch(0.28 0.040 250 / 0.50)'; }}
                    />
                  </div>

                  {/* Campo WhatsApp */}
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'oklch(0.72 0.008 250)' }}>
                      <Phone className="w-4 h-4 inline mr-1.5" style={{ color: 'oklch(0.56 0.23 250)' }} />
                      WhatsApp <span style={{ color: 'oklch(0.52 0.010 250)', fontWeight: 400 }}>(opcional)</span>
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(11) 99999-9999"
                      className="w-full px-4 py-3 rounded-xl text-sm transition-all outline-none"
                      style={{
                        background: 'oklch(0.16 0.032 250 / 0.80)',
                        border: '1px solid oklch(0.28 0.040 250 / 0.50)',
                        color: 'oklch(0.88 0.006 250)',
                      }}
                      onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = 'oklch(0.56 0.23 250 / 0.70)'; }}
                      onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = 'oklch(0.28 0.040 250 / 0.50)'; }}
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-sm" style={{ color: 'oklch(0.65 0.22 25)' }}>
                      Ocorreu um erro. Por favor, tente novamente ou entre em contato pelo WhatsApp.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-base font-bold transition-all duration-200"
                    style={{
                      background: status === 'sending'
                        ? 'oklch(0.40 0.10 250)'
                        : 'linear-gradient(135deg, oklch(0.56 0.23 250) 0%, oklch(0.50 0.26 245) 100%)',
                      color: 'white',
                      boxShadow: status === 'sending' ? 'none' : '0 6px 24px oklch(0.56 0.23 250 / 0.35)',
                      cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                    }}
                  >
                    {status === 'sending' ? (
                      <>Enviando...</>
                    ) : (
                      <>
                        <Mail className="w-5 h-5" />
                        Entrar na lista de espera
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center" style={{ color: 'oklch(0.45 0.008 250)' }}>
                    Seus dados são 100% seguros. Sem spam.
                  </p>
                </form>
              )}

              <div className="mt-6 pt-6" style={{ borderTop: '1px solid oklch(0.22 0.032 250 / 0.40)' }}>
                <p className="text-center text-sm mb-3" style={{ color: 'oklch(0.52 0.010 250)' }}>
                  Quer falar diretamente?
                </p>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full justify-center">
                  <MessageCircle className="w-5 h-5" />
                  Falar no WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
