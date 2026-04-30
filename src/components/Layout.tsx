import { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, MessageCircle, ChevronDown, LogIn, Search } from 'lucide-react';
import { SiFacebook, SiInstagram, SiLinkedin, SiYoutube } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';
import { ROUTE_PATHS, WHATSAPP_LINK, SOCIAL_MEDIA, COMPANY_INFO, LOGIN_URL } from '@/lib/index';
import { IMAGES } from '@/assets/images';
import { NAV_ITEMS } from '@/data/index';

const SOLUTIONS_SUBMENU = [
  { label: 'Pós-Graduação', path: ROUTE_PATHS.POS_GRADUACAO, desc: 'Diploma reconhecido pelo MEC' },
  { label: 'Yto Academy', path: ROUTE_PATHS.YTO_ACADEMY, desc: 'Plataforma de aprendizagem contínua' },
  { label: 'Data Analytics', path: ROUTE_PATHS.DATA_ANALYTICS, desc: '294h · 16 certificados internacionais' },
  { label: 'Mentoria VIP', path: ROUTE_PATHS.MENTORIA_VIP, desc: 'Atendimento individual com Eduardo Yto' },
  { label: '🧭 Monte sua Jornada', path: ROUTE_PATHS.JORNADA, desc: 'Descubra o melhor caminho em dados' },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const [headerH, setHeaderH] = useState(80);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const SEARCH_PAGES = [
    { label: 'Pós-Graduação', path: '#/pos-graduacao', keywords: ['pós', 'pos', 'graduação', 'diploma', 'mec'] },
    { label: 'Yto Academy', path: '#/yto-academy', keywords: ['academy', 'cursos', 'excel', 'power bi', 'sql'] },
    { label: 'Data Analytics', path: '#/data-analytics', keywords: ['data analytics', 'formação', 'carreira'] },
    { label: 'Para Empresas', path: '#/para-empresas', keywords: ['empresa', 'corporativo', 'in company', 'equipe'] },
    { label: 'Mentoria VIP', path: '#/mentoria-vip', keywords: ['mentoria', 'vip', 'individual', 'personalizado'] },
    { label: 'Quem Somos', path: '#/quem-somos', keywords: ['quem somos', 'história', 'fundador', 'eduardo'] },
    { label: 'Contato', path: '#/contato', keywords: ['contato', 'telefone', 'whatsapp', 'endereço'] },
    { label: 'Monte sua Jornada', path: '#/monte-sua-jornada', keywords: ['jornada', 'quiz', 'descubra', 'caminho'] },
  ];
  const searchResults = searchQuery.length >= 2
    ? SEARCH_PAGES.filter(p =>
        p.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.keywords.some(k => k.includes(searchQuery.toLowerCase())))
    : [];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!headerRef.current) return;
    const ro = new ResizeObserver(() => {
      if (headerRef.current) setHeaderH(headerRef.current.offsetHeight);
    });
    ro.observe(headerRef.current);
    setHeaderH(headerRef.current.offsetHeight);
    return () => ro.disconnect();
  }, []);

  const openSolutions = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setSolutionsOpen(true);
  };
  const closeSolutions = () => {
    closeTimer.current = setTimeout(() => setSolutionsOpen(false), 160);
  };

  // Menu principal: Início · Quem Somos · Para Empresas · Soluções (dropdown) · Contato
  const navLinks = NAV_ITEMS.filter(
    (n) => n.path !== ROUTE_PATHS.POS_GRADUACAO &&
           n.path !== ROUTE_PATHS.YTO_ACADEMY &&
           n.path !== ROUTE_PATHS.DATA_ANALYTICS &&
           n.path !== ROUTE_PATHS.IN_COMPANY &&
           n.path !== ROUTE_PATHS.MENTORIA_VIP &&
           n.path !== ROUTE_PATHS.JORNADA &&
           n.path !== ROUTE_PATHS.CONTATO
  );

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--brand-navy)' }}>

      {/* ══════════════════════════════════════════════
          HEADER — Grupo Yto Nihon Premium
      ══════════════════════════════════════════════ */}
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: isScrolled
            ? 'oklch(0.07 0.022 250 / 0.98)'
            : 'oklch(0.08 0.024 250 / 0.96)',
          backdropFilter: 'blur(24px) saturate(1.6)',
          /* Linha sutil azulada separando do conteúdo — visível mesmo com fundo escuro */
          borderBottom: '1px solid oklch(0.44 0.12 250 / 0.35)',
          boxShadow: isScrolled
            ? '0 4px 40px oklch(0.03 0.008 250 / 0.70), 0 1px 0 oklch(0.56 0.23 250 / 0.18)'
            : '0 1px 0 oklch(0.56 0.23 250 / 0.12)',
        }}
      >
        <div className="container-xl">

          {/* ─── Inner row: Logo | Nav | CTAs ──────── */}
          <div className="flex items-center justify-between" style={{ height: '76px' }}>

            {/* ── MARCA (esquerda) ─────────────────── */}
            <Link
              to={ROUTE_PATHS.HOME}
              className="flex items-center gap-3 group flex-shrink-0"
              aria-label="Grupo Yto Nihon — página inicial"
            >
              {/* Símbolo do logo (parte gráfica) */}
              <div className="relative flex-shrink-0">
                {/* glow atrás do símbolo */}
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-full pointer-events-none blur-lg"
                  style={{ background: 'oklch(0.56 0.23 250 / 0.22)', transform: 'scale(1.35)' }}
                />
                <img
                  src={IMAGES.LOGOYTOWHITE_CROP}
                  alt=""
                  aria-hidden
                  className="relative w-9 h-9 object-contain flex-shrink-0"
                  style={{
                    filter: 'brightness(1.4) contrast(1.1)',
                    /* mostrar apenas a parte gráfica — crop à esquerda */
                    objectPosition: 'left center',
                    objectFit: 'cover',
                  }}
                />
              </div>

              {/* Textos da marca */}
              <div className="flex flex-col leading-none gap-0.5">
                <span
                  className="font-bold tracking-tight transition-colors duration-200"
                  style={{
                    fontSize: '1.05rem',
                    color: 'oklch(0.97 0.004 250)',
                    letterSpacing: '-0.01em',
                    lineHeight: 1,
                  }}
                >
                  Grupo Yto Nihon
                </span>
                <span
                  className="font-normal tracking-wide transition-colors duration-200"
                  style={{
                    fontSize: '0.68rem',
                    color: 'oklch(0.62 0.030 250)',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    lineHeight: 1,
                  }}
                >
                  Escola de Dados
                </span>
              </div>
            </Link>

            {/* ── MENU (centro) ────────────────────── */}
            <nav className="hidden lg:flex items-center" aria-label="Menu principal">
              {/* Links simples antes do dropdown */}
              {navLinks.map((item) =>
                item.path === ROUTE_PATHS.SOLUCOES ? null : (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      [
                        'relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                        'hover:text-white',
                        isActive
                          ? 'text-white'
                          : 'text-[oklch(0.68_0.016_250)]',
                      ].join(' ')
                    }
                    style={({ isActive }) => ({
                      color: isActive ? 'oklch(0.97 0.004 250)' : 'oklch(0.66 0.018 250)',
                    })}
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}
                        {/* underline ativo */}
                        {isActive && (
                          <span
                            className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full"
                            style={{ background: 'oklch(0.60 0.22 250)' }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                )
              )}

              {/* Soluções dropdown */}
              <div
                className="relative"
                onMouseEnter={openSolutions}
                onMouseLeave={closeSolutions}
              >
                <NavLink
                  to={ROUTE_PATHS.SOLUCOES}
                  className={({ isActive }) =>
                    [
                      'relative inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                      isActive ? '' : '',
                    ].join(' ')
                  }
                  style={({ isActive }) => ({
                    color: isActive ? 'oklch(0.97 0.004 250)' : 'oklch(0.66 0.018 250)',
                  })}
                >
                  {({ isActive }) => (
                    <>
                      Soluções
                      <ChevronDown
                        className="w-3.5 h-3.5 transition-transform duration-200"
                        style={{
                          transform: solutionsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          color: solutionsOpen ? 'oklch(0.65 0.20 250)' : 'oklch(0.50 0.012 250)',
                        }}
                      />
                      {isActive && (
                        <span
                          className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full"
                          style={{ background: 'oklch(0.60 0.22 250)' }}
                        />
                      )}
                    </>
                  )}
                </NavLink>

                <AnimatePresence>
                  {solutionsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.16, ease: 'easeOut' }}
                      className="absolute top-[calc(100%+4px)] left-0 w-[280px] rounded-2xl overflow-hidden"
                      style={{
                        background: 'oklch(0.10 0.024 250 / 0.98)',
                        backdropFilter: 'blur(28px)',
                        border: '1px solid oklch(0.26 0.038 250 / 0.55)',
                        boxShadow: '0 24px 64px oklch(0.03 0.008 250 / 0.80)',
                      }}
                      onMouseEnter={openSolutions}
                      onMouseLeave={closeSolutions}
                    >
                      {/* Cabeçalho do dropdown */}
                      <div
                        className="px-4 pt-4 pb-2"
                        style={{ borderBottom: '1px solid oklch(0.22 0.030 250 / 0.40)' }}
                      >
                        <p
                          className="text-[10px] font-semibold tracking-widest uppercase"
                          style={{ color: 'oklch(0.50 0.012 250)', letterSpacing: '0.12em' }}
                        >
                          Nossas Soluções
                        </p>
                      </div>

                      {/* Itens */}
                      <div className="p-2">
                        {SOLUTIONS_SUBMENU.map((sol) => (
                          <Link
                            key={sol.path}
                            to={sol.path}
                            onClick={() => setSolutionsOpen(false)}
                            className="flex items-start gap-3 px-3 py-2.5 rounded-xl transition-all duration-150"
                            style={{ color: 'oklch(0.88 0.006 250)' }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = 'oklch(0.56 0.23 250 / 0.10)';
                              e.currentTarget.style.color = 'oklch(0.97 0.004 250)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = 'transparent';
                              e.currentTarget.style.color = 'oklch(0.88 0.006 250)';
                            }}
                          >
                            {/* Dot accent */}
                            <span
                              className="mt-[5px] w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ background: 'oklch(0.60 0.22 250)' }}
                            />
                            <div className="flex flex-col">
                              <span className="text-sm font-semibold leading-tight">{sol.label}</span>
                              <span
                                className="text-[11px] mt-0.5 leading-snug"
                                style={{ color: 'oklch(0.50 0.012 250)' }}
                              >
                                {sol.desc}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Contato — sempre após o dropdown de Soluções */}
              <NavLink
                to={ROUTE_PATHS.CONTATO}
                className={({ isActive }) => [
                  'relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                  isActive ? '' : '',
                ].join(' ')}
                style={({ isActive }) => ({
                  color: isActive ? 'oklch(0.97 0.004 250)' : 'oklch(0.66 0.018 250)',
                })}
              >
                {({ isActive }) => (
                  <>
                    Contato
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full"
                        style={{ background: 'oklch(0.60 0.22 250)' }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </nav>

            {/* ── CTAs (direita) ───────────────────── */}
            <div className="hidden lg:flex items-center gap-2.5">
              {/* Lupa de busca */}
              <div className="relative">
                <button
                  onClick={() => { setSearchOpen(!searchOpen); setSearchQuery(''); setTimeout(() => searchRef.current?.focus(), 80); }}
                  className="inline-flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200"
                  aria-label="Buscar"
                  style={{ background: 'oklch(0.16 0.028 250 / 0.60)', border: '1px solid oklch(0.28 0.038 250 / 0.45)', color: 'oklch(0.62 0.016 250)' }}
                >
                  <Search className="w-3.5 h-3.5" />
                </button>
                <AnimatePresence>
                  {searchOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-[calc(100%+6px)] w-64 rounded-xl overflow-hidden"
                      style={{ background: 'oklch(0.10 0.024 250 / 0.98)', border: '1px solid oklch(0.26 0.038 250 / 0.55)', boxShadow: '0 16px 48px oklch(0.03 0.008 250 / 0.80)' }}
                    >
                      <div className="p-2">
                        <input
                          ref={searchRef}
                          type="text"
                          placeholder="Buscar no site…"
                          value={searchQuery}
                          onChange={e => setSearchQuery(e.target.value)}
                          onKeyDown={e => e.key === 'Escape' && setSearchOpen(false)}
                          className="w-full px-3 py-2 text-sm rounded-lg outline-none"
                          style={{ background: 'oklch(0.14 0.028 250 / 0.80)', border: '1px solid oklch(0.24 0.034 250 / 0.50)', color: 'oklch(0.92 0.006 250)' }}
                        />
                      </div>
                      {searchResults.length > 0 && (
                        <div className="pb-2 px-2">
                          {searchResults.map(r => (
                            <a key={r.path} href={r.path} onClick={() => setSearchOpen(false)}
                              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-150 hover:bg-[oklch(0.56_0.23_250/0.10)]"
                              style={{ color: 'oklch(0.82 0.008 250)' }}
                            >
                              <Search className="w-3 h-3 flex-shrink-0" style={{ color: 'oklch(0.56 0.23 250)' }} />
                              {r.label}
                            </a>
                          ))}
                        </div>
                      )}
                      {searchQuery.length >= 2 && searchResults.length === 0 && (
                        <p className="px-4 pb-3 text-xs" style={{ color: 'oklch(0.46 0.010 250)' }}>Nenhum resultado encontrado.</p>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Botão Acessar a Yto Academy */}
              <a
                href="/area-do-aluno"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={{
                  color: 'oklch(0.82 0.18 250)',
                  border: '1.5px solid oklch(0.50 0.18 250 / 0.60)',
                  background: 'oklch(0.56 0.23 250 / 0.10)',
                  letterSpacing: '0.01em',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = 'oklch(0.56 0.23 250 / 0.20)';
                  el.style.borderColor = 'oklch(0.65 0.22 250 / 0.80)';
                  el.style.color = 'oklch(0.92 0.12 250)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = 'oklch(0.56 0.23 250 / 0.10)';
                  el.style.borderColor = 'oklch(0.50 0.18 250 / 0.60)';
                  el.style.color = 'oklch(0.82 0.18 250)';
                }}
              >
                <LogIn className="w-3.5 h-3.5" />
                Área do aluno
              </a>

              {/* Botão WhatsApp — verde, destaque */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
                style={{
                  background: 'rgba(37,211,102,0.14)',
                  border: '1.5px solid rgba(37,211,102,0.35)',
                  color: '#25D366',
                  letterSpacing: '0.01em',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = 'rgba(37,211,102,0.22)';
                  el.style.borderColor = 'rgba(37,211,102,0.55)';
                  el.style.color = '#4de98a';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = 'rgba(37,211,102,0.14)';
                  el.style.borderColor = 'rgba(37,211,102,0.35)';
                  el.style.color = '#25D366';
                }}
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-200"
              style={{
                background: 'oklch(0.16 0.028 250 / 0.70)',
                border: '1px solid oklch(0.26 0.036 250 / 0.40)',
              }}
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Menu"
            >
              {isMobileOpen
                ? <X className="w-5 h-5" style={{ color: 'oklch(0.85 0.008 250)' }} />
                : <Menu className="w-5 h-5" style={{ color: 'oklch(0.85 0.008 250)' }} />}
            </button>
          </div>
        </div>

        {/* ── Menu mobile ──────────────────────────── */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.26, ease: 'easeOut' }}
              className="lg:hidden overflow-hidden"
              style={{
                background: 'oklch(0.08 0.022 250 / 0.99)',
                backdropFilter: 'blur(24px)',
                borderTop: '1px solid oklch(0.22 0.032 250 / 0.40)',
              }}
            >
              <div className="container-xl py-4">

                {/* Links principais */}
                <div className="space-y-0.5">
                  {NAV_ITEMS.filter(n =>
                    n.path !== ROUTE_PATHS.POS_GRADUACAO &&
                    n.path !== ROUTE_PATHS.YTO_ACADEMY &&
                    n.path !== ROUTE_PATHS.DATA_ANALYTICS &&
                    n.path !== ROUTE_PATHS.IN_COMPANY &&
                    n.path !== ROUTE_PATHS.MENTORIA_VIP &&
                    n.path !== ROUTE_PATHS.JORNADA &&
                    n.path !== ROUTE_PATHS.CONTATO
                  ).map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMobileOpen(false)}
                      style={({ isActive }) => ({
                        color: isActive ? 'oklch(0.97 0.004 250)' : 'oklch(0.66 0.018 250)',
                        background: isActive ? 'oklch(0.56 0.23 250 / 0.10)' : 'transparent',
                      })}
                      className="block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150"
                    >
                      {item.label}
                    </NavLink>
                  ))}
                  {/* Contato — após os links principais */}
                  <NavLink
                    to={ROUTE_PATHS.CONTATO}
                    onClick={() => setIsMobileOpen(false)}
                    style={({ isActive }) => ({
                      color: isActive ? 'oklch(0.97 0.004 250)' : 'oklch(0.66 0.018 250)',
                      background: isActive ? 'oklch(0.56 0.23 250 / 0.10)' : 'transparent',
                    })}
                    className="block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150"
                  >
                    Contato
                  </NavLink>
                </div>

                {/* Soluções — sub-itens expandidos */}
                <div
                  className="mt-2 mb-1 px-4 pt-3"
                  style={{ borderTop: '1px solid oklch(0.20 0.028 250 / 0.40)' }}
                >
                  <p
                    className="text-[10px] font-semibold tracking-widest uppercase mb-2"
                    style={{ color: 'oklch(0.46 0.010 250)', letterSpacing: '0.12em' }}
                  >
                    Soluções
                  </p>
                  <div className="space-y-0.5">
                    {SOLUTIONS_SUBMENU.map((sol) => (
                      <NavLink
                        key={sol.path}
                        to={sol.path}
                        onClick={() => setIsMobileOpen(false)}
                        style={({ isActive }) => ({
                          color: isActive ? 'oklch(0.80 0.18 250)' : 'oklch(0.62 0.016 250)',
                          background: isActive ? 'oklch(0.56 0.23 250 / 0.10)' : 'transparent',
                        })}
                        className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: 'oklch(0.56 0.22 250 / 0.70)' }}
                        />
                        {sol.label}
                      </NavLink>
                    ))}
                  </div>
                </div>

                {/* Botões de ação */}
                <div
                  className="mt-3 pt-4 space-y-2"
                  style={{ borderTop: '1px solid oklch(0.20 0.028 250 / 0.40)' }}
                >
                  <a
                    href={LOGIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
                    style={{
                      color: 'oklch(0.82 0.18 250)',
                      border: '1.5px solid oklch(0.50 0.18 250 / 0.60)',
                      background: 'oklch(0.56 0.23 250 / 0.10)',
                    }}
                  >
                    <LogIn className="w-4 h-4" />
                    Acessar a Yto Academy
                  </a>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
                    style={{
                      background: 'rgba(37,211,102,0.14)',
                      border: '1.5px solid rgba(37,211,102,0.35)',
                      color: '#25D366',
                    }}
                  >
                    <MessageCircle className="w-4 h-4" />
                    Falar no WhatsApp
                  </a>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── Main ─────────────────────────────────────── */}
      <main className="flex-1" style={{ paddingTop: `${headerH}px` }}>
        {children}
      </main>

      {/* ── Footer ───────────────────────────────────── */}
      <footer style={{ background: 'oklch(0.07 0.020 250)', borderTop: '1px solid oklch(0.16 0.026 250 / 0.60)' }}>
        <div className="container-xl py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand col */}
            <div className="space-y-5">
              <Link to={ROUTE_PATHS.HOME} className="flex items-center group w-fit">
                <img
                  src={IMAGES.LOGOYTOWHITE_CROP}
                  alt="Grupo Yto Nihon"
                  className="h-9 w-auto object-contain transition-opacity duration-200 group-hover:opacity-100"
                  style={{ filter: 'brightness(1.1) opacity(0.72)', maxWidth: '180px' }}
                />
              </Link>
              <p className="text-sm leading-relaxed" style={{ color: 'oklch(0.48 0.010 250)' }}>
                Transformando vidas através da educação em dados e tecnologia há mais de 26 anos.
              </p>
              <div className="flex gap-2.5">
                {[
                  { href: SOCIAL_MEDIA.FACEBOOK, Icon: SiFacebook },
                  { href: SOCIAL_MEDIA.INSTAGRAM, Icon: SiInstagram },
                  { href: SOCIAL_MEDIA.LINKEDIN, Icon: SiLinkedin },
                  { href: SOCIAL_MEDIA.YOUTUBE, Icon: SiYoutube },
                ].map(({ href, Icon }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                    style={{ background: 'oklch(0.14 0.026 250)', border: '1px solid oklch(0.22 0.030 250 / 0.60)', color: 'oklch(0.52 0.010 250)' }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = 'oklch(0.56 0.23 250 / 0.18)';
                      (e.currentTarget as HTMLAnchorElement).style.color = 'oklch(0.75 0.18 250)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = 'oklch(0.14 0.026 250)';
                      (e.currentTarget as HTMLAnchorElement).style.color = 'oklch(0.52 0.010 250)';
                    }}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Soluções */}
            <div>
              <h4 className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: 'oklch(0.52 0.013 250)', letterSpacing: '0.12em' }}>Soluções</h4>
              <ul className="space-y-3">
                {[
                  { label: 'Pós-Graduação', path: ROUTE_PATHS.POS_GRADUACAO },
                  { label: 'Yto Academy', path: ROUTE_PATHS.YTO_ACADEMY },
                  { label: 'Formação Data Analytics', path: ROUTE_PATHS.DATA_ANALYTICS },
                  { label: 'Treinamentos In Company', path: ROUTE_PATHS.IN_COMPANY },
                  { label: 'Mentoria VIP', path: ROUTE_PATHS.MENTORIA_VIP },
                ].map(({ label, path }) => (
                  <li key={path}>
                    <Link to={path} className="text-sm transition-colors duration-200"
                      style={{ color: 'oklch(0.48 0.009 250)' }}
                      onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = 'oklch(0.72 0.16 250)')}
                      onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = 'oklch(0.48 0.009 250)')}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Empresa */}
            <div>
              <h4 className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: 'oklch(0.52 0.013 250)', letterSpacing: '0.12em' }}>Empresa</h4>
              <ul className="space-y-3">
                {[
                  { label: 'Quem Somos', path: ROUTE_PATHS.QUEM_SOMOS },
                  { label: 'Soluções', path: ROUTE_PATHS.SOLUCOES },
                  { label: 'Contato', path: ROUTE_PATHS.CONTATO },
                ].map(({ label, path }) => (
                  <li key={path}>
                    <Link to={path} className="text-sm transition-colors duration-200"
                      style={{ color: 'oklch(0.48 0.009 250)' }}
                      onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = 'oklch(0.72 0.16 250)')}
                      onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = 'oklch(0.48 0.009 250)')}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href={LOGIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'oklch(0.60 0.12 250)' }}
                    onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = 'oklch(0.78 0.18 250)')}
                    onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = 'oklch(0.60 0.12 250)')}
                  >
                    Área do Aluno (Login)
                  </a>
                </li>
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h4 className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: 'oklch(0.52 0.013 250)', letterSpacing: '0.12em' }}>Contato</h4>
              <ul className="space-y-3">
                <li>
                  <a href={`mailto:${COMPANY_INFO.EMAIL}`} className="text-sm transition-colors duration-200" style={{ color: 'oklch(0.48 0.009 250)' }}
                    onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = 'oklch(0.72 0.16 250)')}
                    onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = 'oklch(0.48 0.009 250)')}
                  >{COMPANY_INFO.EMAIL}</a>
                </li>
                <li>
                  <a href={`https://wa.me/${COMPANY_INFO.WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="text-sm transition-colors duration-200" style={{ color: 'oklch(0.48 0.009 250)' }}
                    onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = 'oklch(0.72 0.16 250)')}
                    onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = 'oklch(0.48 0.009 250)')}
                  >{COMPANY_INFO.PHONE}</a>
                </li>
                <li className="text-sm" style={{ color: 'oklch(0.42 0.008 250)' }}>{COMPANY_INFO.ADDRESS}</li>
              </ul>
              <div className="mt-5">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <button
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
                    style={{ background: 'rgba(37,211,102,0.10)', border: '1px solid rgba(37,211,102,0.22)', color: '#25D366' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(37,211,102,0.18)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(37,211,102,0.10)'; }}
                  >
                    <MessageCircle className="w-4 h-4" />
                    Falar no WhatsApp
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid oklch(0.16 0.024 250 / 0.60)' }}>
            <p className="text-xs" style={{ color: 'oklch(0.38 0.007 250)' }}>
              © 2026 Grupo Yto Nihon. Todos os direitos reservados.
            </p>
            <p className="text-xs" style={{ color: 'oklch(0.36 0.007 250)' }}>
              Alphaville, Barueri – SP · CNPJ 20.169.898/0001-33
            </p>
          </div>
        </div>
      </footer>

      {/* ── Floating WhatsApp ──────────────────────── */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </div>
  );
}
