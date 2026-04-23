import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { WHATSAPP_LINK, COMPANY_INFO } from '@/lib/index';
import { Mail, Phone, MapPin, MessageCircle, Clock, Send, CheckCircle2, User, ChevronRight } from 'lucide-react';

type FormStatus = 'idle' | 'sending' | 'sent' | 'error';

const inputStyle = {
  background: 'oklch(0.15 0.030 250 / 0.85)',
  border: '1px solid oklch(0.28 0.038 250 / 0.55)',
  color: 'oklch(0.92 0.006 250)',
  borderRadius: '0.75rem',
  padding: '0.875rem 1rem',
  width: '100%',
  fontSize: '0.9375rem',
  outline: 'none',
  transition: 'border-color 0.2s',
};

const inputFocusStyle = { borderColor: 'oklch(0.56 0.23 250 / 0.75)' };

export default function Contato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome.trim() || !email.trim() || !mensagem.trim()) return;
    setStatus('sending');
    try {
      await fetch('https://formsubmit.co/ajax/yto@ytonihon.com.br', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: assunto ? `Contato: ${assunto}` : 'Novo contato pelo site',
          nome,
          email,
          telefone,
          assunto,
          mensagem,
        }),
      });
      setStatus('sent');
      setNome(''); setEmail(''); setTelefone(''); setAssunto(''); setMensagem('');
    } catch {
      setStatus('error');
    }
  };

  const contactCards = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '(11) 91070-4164',
      sub: 'Resposta rápida e direta',
      href: WHATSAPP_LINK,
      green: true,
    },
    {
      icon: Mail,
      title: 'E-mail',
      value: 'yto@ytonihon.com.br',
      sub: 'Envie sua dúvida detalhada',
      href: 'mailto:yto@ytonihon.com.br',
      green: false,
    },
    {
      icon: MapPin,
      title: 'Localização',
      value: COMPANY_INFO.ADDRESS_FULL,
      sub: 'Nosso escritório',
      href: '',
      green: false,
    },
  ];

  return (
    <Layout>
      {/* ═══ HERO ═══ */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{ background: 'var(--brand-navy)', minHeight: '42vh', paddingTop: '5rem', paddingBottom: '4rem' }}
      >
        <div className="orb orb-blue" style={{ width: '600px', height: '500px', top: '-20%', right: '-5%', opacity: 0.28 }} />
        <div className="orb orb-cyan" style={{ width: '400px', height: '350px', bottom: '-20%', left: '-5%', opacity: 0.18 }} />
        <div className="bg-dot-grid absolute inset-0 opacity-30" />
        <div className="container-xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
          >
            <span
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold mb-7"
              style={{ background: 'oklch(0.56 0.23 250 / 0.15)', border: '1px solid oklch(0.56 0.23 250 / 0.30)', color: 'oklch(0.78 0.16 250)' }}
            >
              Fale conosco
            </span>
            <h1 className="hero-headline mb-5">
              <span style={{ color: 'oklch(0.95 0.006 250)' }}>Entre em </span>
              <span className="text-gradient">Contato</span>
            </h1>
            <p className="hero-sub mx-auto max-w-2xl">
              Estamos prontos para ajudar você a transformar sua carreira com dados. Escolha o canal preferido.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ MAIN CONTENT ═══ */}
      <section className="section-pad" style={{ background: 'oklch(0.11 0.026 252)' }}>
        <div className="container-xl">

          {/* Contact cards */}
          <div className="grid md:grid-cols-3 gap-5 mb-16">
            {contactCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 260, damping: 30, delay: i * 0.10 }}
                className="rounded-2xl p-7 flex flex-col items-center text-center"
                style={card.green
                  ? { background: 'rgba(37,211,102,0.08)', border: '1px solid rgba(37,211,102,0.22)' }
                  : { background: 'oklch(0.14 0.028 250 / 0.80)', border: '1px solid oklch(0.26 0.038 250 / 0.45)' }
                }
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={card.green
                    ? { background: 'rgba(37,211,102,0.15)' }
                    : { background: 'oklch(0.56 0.23 250 / 0.14)', border: '1px solid oklch(0.56 0.23 250 / 0.22)' }
                  }
                >
                  <card.icon className="w-7 h-7" style={{ color: card.green ? '#25D366' : 'oklch(0.72 0.20 250)' }} />
                </div>
                <h3 className="text-lg font-bold mb-1" style={{ color: 'oklch(0.94 0.006 250)', fontFamily: 'var(--font-heading)' }}>
                  {card.title}
                </h3>
                <p className="text-sm mb-3" style={{ color: 'oklch(0.55 0.010 250)' }}>{card.sub}</p>
                {card.href ? (
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold hover:opacity-80 transition-opacity"
                    style={{ color: card.green ? '#25D366' : 'oklch(0.72 0.20 250)' }}
                  >
                    {card.value}
                  </a>
                ) : (
                  <p className="text-sm font-medium" style={{ color: 'oklch(0.72 0.008 250)' }}>{card.value}</p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Two-column: Form + Sidebar */}
          <div className="grid lg:grid-cols-5 gap-10 items-start">

            {/* Form — 3 cols */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 240, damping: 28 }}
              className="lg:col-span-3"
            >
              <div
                className="rounded-2xl p-8 md:p-10"
                style={{ background: 'oklch(0.13 0.028 250 / 0.90)', border: '1px solid oklch(0.26 0.038 250 / 0.50)' }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'oklch(0.56 0.23 250 / 0.15)', border: '1px solid oklch(0.56 0.23 250 / 0.25)' }}
                  >
                    <Send className="w-5 h-5" style={{ color: 'oklch(0.72 0.20 250)' }} />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ color: 'oklch(0.94 0.006 250)', fontFamily: 'var(--font-heading)' }}>
                    Envie sua Mensagem
                  </h2>
                </div>

                {status === 'sent' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-12"
                  >
                    <CheckCircle2 className="w-16 h-16 mb-4" style={{ color: 'oklch(0.65 0.18 160)' }} />
                    <h3 className="text-xl font-bold mb-2" style={{ color: 'oklch(0.92 0.006 250)' }}>
                      Mensagem enviada! 🎉
                    </h3>
                    <p style={{ color: 'oklch(0.62 0.010 250)' }}>
                      Entraremos em contato em até 24h úteis.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: 'oklch(0.78 0.008 250)' }}>
                          <User className="w-3.5 h-3.5 inline mr-1.5" style={{ color: 'oklch(0.56 0.23 250)' }} />
                          Nome completo *
                        </label>
                        <input
                          type="text"
                          value={nome}
                          onChange={(e) => setNome(e.target.value)}
                          placeholder="Seu nome"
                          required
                          style={inputStyle}
                          onFocus={(e) => Object.assign((e.target as HTMLInputElement).style, inputFocusStyle)}
                          onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = 'oklch(0.28 0.038 250 / 0.55)'; }}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: 'oklch(0.78 0.008 250)' }}>
                          <Phone className="w-3.5 h-3.5 inline mr-1.5" style={{ color: 'oklch(0.56 0.23 250)' }} />
                          WhatsApp / Telefone
                        </label>
                        <input
                          type="tel"
                          value={telefone}
                          onChange={(e) => setTelefone(e.target.value)}
                          placeholder="(11) 99999-9999"
                          style={inputStyle}
                          onFocus={(e) => Object.assign((e.target as HTMLInputElement).style, inputFocusStyle)}
                          onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = 'oklch(0.28 0.038 250 / 0.55)'; }}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: 'oklch(0.78 0.008 250)' }}>
                        <Mail className="w-3.5 h-3.5 inline mr-1.5" style={{ color: 'oklch(0.56 0.23 250)' }} />
                        E-mail *
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="seu@email.com"
                        required
                        style={inputStyle}
                        onFocus={(e) => Object.assign((e.target as HTMLInputElement).style, inputFocusStyle)}
                        onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = 'oklch(0.28 0.038 250 / 0.55)'; }}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: 'oklch(0.78 0.008 250)' }}>
                        Assunto
                      </label>
                      <select
                        value={assunto}
                        onChange={(e) => setAssunto(e.target.value)}
                        style={{ ...inputStyle, cursor: 'pointer' }}
                        onFocus={(e) => Object.assign((e.target as HTMLSelectElement).style, inputFocusStyle)}
                        onBlur={(e) => { (e.target as HTMLSelectElement).style.borderColor = 'oklch(0.28 0.038 250 / 0.55)'; }}
                      >
                        <option value="" style={{ background: '#0d1220' }}>Selecione um assunto</option>
                        <option value="Pós-Graduação" style={{ background: '#0d1220' }}>Pós-Graduação em Gestão de Dados</option>
                        <option value="Formação Data Analytics" style={{ background: '#0d1220' }}>Formação em Data Analytics</option>
                        <option value="Yto Academy" style={{ background: '#0d1220' }}>Yto Academy</option>
                        <option value="In Company" style={{ background: '#0d1220' }}>Treinamentos In Company</option>
                        <option value="Outro" style={{ background: '#0d1220' }}>Outro assunto</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: 'oklch(0.78 0.008 250)' }}>
                        Mensagem *
                      </label>
                      <textarea
                        value={mensagem}
                        onChange={(e) => setMensagem(e.target.value)}
                        placeholder="Conte-nos como podemos ajudar..."
                        required
                        rows={5}
                        style={{ ...inputStyle, resize: 'none' }}
                        onFocus={(e) => Object.assign((e.target as HTMLTextAreaElement).style, inputFocusStyle)}
                        onBlur={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = 'oklch(0.28 0.038 250 / 0.55)'; }}
                      />
                    </div>

                    {status === 'error' && (
                      <p className="text-sm" style={{ color: 'oklch(0.65 0.22 25)' }}>
                        Ocorreu um erro. Tente novamente ou fale pelo WhatsApp.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-base font-bold transition-all duration-200"
                      style={{
                        background: status === 'sending'
                          ? 'oklch(0.38 0.09 250)'
                          : 'linear-gradient(135deg, oklch(0.56 0.23 250) 0%, oklch(0.50 0.26 245) 100%)',
                        color: 'white',
                        cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                        boxShadow: status === 'sending' ? 'none' : '0 8px 28px oklch(0.56 0.23 250 / 0.35)',
                      }}
                    >
                      <Send className="w-5 h-5" />
                      {status === 'sending' ? 'Enviando...' : 'Enviar Mensagem'}
                    </button>

                    <p className="text-xs text-center" style={{ color: 'oklch(0.42 0.008 250)' }}>
                      Respondemos em até 24h úteis. Seus dados são 100% seguros.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Sidebar — 2 cols */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 240, damping: 28, delay: 0.15 }}
              className="lg:col-span-2 space-y-5"
            >
              {/* WhatsApp CTA */}
              <div
                className="rounded-2xl p-7"
                style={{ background: 'rgba(37,211,102,0.07)', border: '1px solid rgba(37,211,102,0.22)' }}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(37,211,102,0.15)' }}>
                    <MessageCircle className="w-6 h-6" style={{ color: '#25D366' }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold" style={{ color: 'oklch(0.94 0.006 250)', fontFamily: 'var(--font-heading)' }}>
                      Prefere WhatsApp?
                    </h3>
                    <p className="text-sm" style={{ color: 'oklch(0.58 0.010 250)' }}>
                      Resposta em minutos
                    </p>
                  </div>
                </div>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-bold transition-all duration-200 hover:opacity-90"
                  style={{ background: '#25D366', color: 'white', boxShadow: '0 6px 24px rgba(37,211,102,0.28)' }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Abrir WhatsApp
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>

              {/* Horário */}
              <div
                className="rounded-2xl p-7"
                style={{ background: 'oklch(0.13 0.028 250 / 0.85)', border: '1px solid oklch(0.26 0.038 250 / 0.45)' }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'oklch(0.56 0.23 250 / 0.14)' }}>
                    <Clock className="w-5 h-5" style={{ color: 'oklch(0.72 0.20 250)' }} />
                  </div>
                  <h3 className="text-lg font-bold" style={{ color: 'oklch(0.94 0.006 250)', fontFamily: 'var(--font-heading)' }}>
                    Horário de Atendimento
                  </h3>
                </div>
                <div className="space-y-3">
                  {[
                    { dia: 'Segunda a Sexta', hora: '9h às 18h' },
                    { dia: 'Sábado', hora: 'Fechado' },
                    { dia: 'Domingo e Feriados', hora: 'Fechado' },
                  ].map((h) => (
                    <div key={h.dia} className="flex justify-between items-center">
                      <span className="text-sm" style={{ color: 'oklch(0.60 0.010 250)' }}>{h.dia}</span>
                      <span className="text-sm font-semibold" style={{ color: 'oklch(0.88 0.006 250)' }}>{h.hora}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-5" style={{ borderTop: '1px solid oklch(0.22 0.030 250 / 0.40)' }}>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full" style={{ background: 'oklch(0.65 0.18 160)' }} />
                    <span className="text-xs font-medium" style={{ color: 'oklch(0.65 0.18 160)' }}>WhatsApp: resposta imediata</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ background: 'oklch(0.72 0.20 250)' }} />
                    <span className="text-xs" style={{ color: 'oklch(0.58 0.010 250)' }}>E-mail/Formulário: até 24h úteis</span>
                  </div>
                </div>
              </div>

              {/* Email direto */}
              <div
                className="rounded-2xl p-7"
                style={{ background: 'oklch(0.13 0.028 250 / 0.85)', border: '1px solid oklch(0.26 0.038 250 / 0.45)' }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'oklch(0.56 0.23 250 / 0.14)' }}>
                    <Mail className="w-5 h-5" style={{ color: 'oklch(0.72 0.20 250)' }} />
                  </div>
                  <h3 className="text-lg font-bold" style={{ color: 'oklch(0.94 0.006 250)', fontFamily: 'var(--font-heading)' }}>
                    E-mail Direto
                  </h3>
                </div>
                <a
                  href="mailto:yto@ytonihon.com.br"
                  className="text-sm font-semibold hover:opacity-80 transition-opacity"
                  style={{ color: 'oklch(0.72 0.20 250)' }}
                >
                  yto@ytonihon.com.br
                </a>
                <p className="text-sm mt-2" style={{ color: 'oklch(0.55 0.010 250)' }}>
                  Para dúvidas detalhadas e propostas corporativas.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ MAPA ═══ */}
      <section style={{ background: 'oklch(0.10 0.024 250)', borderTop: '1px solid oklch(0.18 0.030 250 / 0.40)' }}>
        <div className="container-xl py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 220, damping: 26 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-bold mb-2" style={{ color: 'oklch(0.94 0.006 250)', fontFamily: 'var(--font-heading)' }}>
                  Nossa Localização
                </h2>
                <p className="text-sm" style={{ color: 'oklch(0.55 0.010 250)' }}>
                  Praça Flor de Linho, 04 — Piso 02 · Centro Comercial de Alphaville · Barueri/SP · CEP 06453-007
                </p>
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Pra%C3%A7a+Flor+de+Linho+4+Centro+Comercial+de+Alphaville+Barueri+SP"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold flex-shrink-0 transition-all duration-200 hover:opacity-90"
                style={{
                  background: 'oklch(0.56 0.23 250 / 0.14)',
                  border: '1px solid oklch(0.56 0.23 250 / 0.35)',
                  color: 'oklch(0.78 0.16 250)',
                }}
              >
                <MapPin className="w-4 h-4" />
                Abrir no Google Maps
              </a>
            </div>

            <div
              className="overflow-hidden rounded-2xl"
              style={{ border: '1px solid oklch(0.24 0.034 250 / 0.45)', boxShadow: '0 8px 40px oklch(0.04 0.010 250 / 0.50)' }}
            >
              <iframe
                title="Grupo Yto Nihon — Centro Comercial de Alphaville, Barueri/SP"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.1234567890!2d-46.8443!3d-23.5034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf01a7e4b8d0c3%3A0x3b5e2f7a9c8d1e4f!2sCentro%20Comercial%20de%20Alphaville%2C%20Pra%C3%A7a%20Flor%20de%20Linho%2C%204%20-%20Barueri%2C%20SP%2C%2006453-007!5e0!3m2!1spt-BR!2sbr!4v1713801600000!5m2!1spt-BR!2sbr"
                width="100%"
                height="420"
                style={{ border: 0, display: 'block', filter: 'invert(90%) hue-rotate(180deg) brightness(0.85) saturate(1.1)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
