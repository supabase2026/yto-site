import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { WHATSAPP_LINK, EDUZZ_URL } from '@/lib/index';
import { TOOLS } from '@/data/index';
import { IMAGES } from '@/assets/images';
import {
  CheckCircle2, Sparkles, Users, Award, BookOpen,
  PlayCircle, Star, ArrowRight, MessageCircle, ShoppingCart, X, Play
} from 'lucide-react';

const benefits = [
  { title: 'Acesso Contínuo', description: 'Estude no seu ritmo, quando e onde quiser, com acesso ilimitado aos cursos da plataforma.' },
  { title: 'Variedade de Cursos', description: 'Amplo catálogo em dados, BI, Excel, Power BI, SQL, Python e muito mais.' },
  { title: 'Certificados de Conclusão', description: 'Certificados reconhecidos para valorizar seu currículo e LinkedIn.' },
  { title: 'Suporte Especializado', description: 'Tire dúvidas com professores experientes e consultores do mercado.' },
];

const targetAudience = [
  { icon: Users, title: 'Iniciantes', description: 'Comece do zero e construa uma base sólida em análise de dados.' },
  { icon: Sparkles, title: 'Em Transição de Carreira', description: 'Migre para a área de dados com conteúdo prático e aplicável.' },
  { icon: Award, title: 'Profissionais Avançados', description: 'Aprimore suas habilidades e mantenha-se atualizado com as tendências.' },
  { icon: BookOpen, title: 'Empresas', description: 'Capacite sua equipe com acesso corporativo à plataforma.' },
];

const features = [
  'Aulas gravadas em alta qualidade',
  'Material didático completo e atualizado',
  'Exercícios práticos com feedback',
  'Projetos reais do mercado',
  'Comunidade exclusiva de alunos',
  'Atualizações constantes de conteúdo',
];

interface VideoTestimonial {
  id: string;
  name: string;
  course: string;
  thumbnail: string;
  videoId: string;
}

const videoTestimonials: VideoTestimonial[] = [
  {
    id: '1',
    name: 'Janderson',
    course: 'Yto Academy',
    thumbnail: `https://img.youtube.com/vi/5eXU9KLiDUw/maxresdefault.jpg`,
    videoId: '5eXU9KLiDUw',
  },
  {
    id: '2',
    name: 'Maria',
    course: 'Excel Essentials e Expert',
    thumbnail: `https://img.youtube.com/vi/w6wR2qj-JRs/maxresdefault.jpg`,
    videoId: 'w6wR2qj-JRs',
  },
  {
    id: '3',
    name: 'Adriana Pincerno',
    course: 'Power BI',
    thumbnail: `https://img.youtube.com/vi/vcAlFCvSzFQ/maxresdefault.jpg`,
    videoId: 'vcAlFCvSzFQ',
  },
  {
    id: '4',
    name: 'Pinkerton',
    course: 'Yto Academy',
    thumbnail: `https://img.youtube.com/vi/f8vIL3XqWXo/maxresdefault.jpg`,
    videoId: 'f8vIL3XqWXo',
  },
];

const toolNames: string[] = [
  'Excel Essentials', 'Excel Expert', 'Power BI', 'SQL Server',
  'Python', 'Linguagem R', 'Business Intelligence', 'Microsoft Project',
  'PowerPoint', 'VBA', 'Inteligência Artificial', 'Data Analytics',
];

function VideoModal({ videoId, onClose }: { videoId: string; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
        style={{ background: 'oklch(0.03 0.008 250 / 0.92)', backdropFilter: 'blur(8px)' }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="relative w-full max-w-4xl"
          style={{ aspectRatio: '16/9' }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 w-9 h-9 rounded-full flex items-center justify-center transition-all"
            style={{ background: 'oklch(0.20 0.030 250)', border: '1px solid oklch(0.30 0.040 250 / 0.60)', color: 'oklch(0.88 0.006 250)' }}
          >
            <X className="w-5 h-5" />
          </button>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title="Depoimento"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-2xl"
            style={{ border: 'none' }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function YtoAcademy() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  return (
    <Layout>
      {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
      {/* ═══ HERO ═══ */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{ background: 'var(--brand-navy)', minHeight: '80vh', paddingTop: '5rem', paddingBottom: '5rem' }}
      >
        <div className="absolute inset-0 z-0">
          <img src={IMAGES.DASHBOARD_1} alt="" className="w-full h-full object-cover" style={{ opacity: 0.10, filter: 'blur(2px)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, oklch(0.09 0.030 250 / 0.85), var(--brand-navy))' }} />
        </div>
        <div className="orb orb-blue" style={{ width: '650px', height: '550px', top: '-25%', right: '-8%', opacity: 0.35 }} />
        <div className="orb orb-cyan" style={{ width: '400px', height: '400px', bottom: '-10%', left: '-5%', opacity: 0.20 }} />
        <div className="bg-dot-grid absolute inset-0 opacity-25" />

        <div className="container-xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
          >
            <span className="pill-badge pill-badge-cyan mb-8 inline-flex items-center gap-1.5">
              <PlayCircle className="w-3.5 h-3.5" /> Plataforma de Educação
            </span>

            <h1 className="hero-headline mb-6">
              <span style={{ color: 'oklch(0.93 0.006 250)' }}>Yto Academy</span><br />
              <span className="text-gradient">Aprenda. Pratique. Cresça.</span>
            </h1>

            <p className="hero-sub mx-auto mb-10 max-w-3xl">
              A plataforma definitiva para quem quer dominar tecnologia e dados. Cursos práticos, professores especialistas e certificados reconhecidos no mercado.
            </p>

            {/* Social proof */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {['+100.000 alunos', '12 ferramentas', 'Acesso vitalício', 'Certificados inclusos'].map((item) => (
                <span
                  key={item}
                  className="px-4 py-1.5 rounded-full text-xs font-medium"
                  style={{ background: 'oklch(0.14 0.028 250 / 0.80)', border: '1px solid oklch(0.28 0.040 250 / 0.45)', color: 'oklch(0.78 0.010 250)' }}
                >
                  {item}
                </span>
              ))}
            </div>

            {/* CTAs principais */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={EDUZZ_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-base font-bold px-10 py-4 rounded-xl transition-all duration-200"
                style={{
                  background: 'linear-gradient(135deg, oklch(0.56 0.23 250) 0%, oklch(0.50 0.26 245) 100%)',
                  color: 'white',
                  boxShadow: '0 8px 32px oklch(0.56 0.23 250 / 0.40)',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 12px 40px oklch(0.56 0.23 250 / 0.55)'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 32px oklch(0.56 0.23 250 / 0.40)'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; }}
              >
                <ShoppingCart className="w-5 h-5" />
                Assinar agora
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base px-8 py-4">
                <MessageCircle className="w-5 h-5" /> Tirar dúvidas
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ FERRAMENTAS ═══ */}
      <section className="section-pad" style={{ background: 'oklch(0.10 0.024 250)' }}>
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="section-tag">Cursos disponíveis</span>
            <h2 className="section-headline mb-4">Ferramentas que Você Vai Dominar</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: 'oklch(0.60 0.010 250)' }}>
              Acesso a 12 trilhas de aprendizagem completas com as ferramentas mais demandadas pelo mercado
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {toolNames.map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="flex items-center gap-3 px-5 py-4 rounded-xl"
                style={{ background: 'oklch(0.13 0.028 250 / 0.80)', border: '1px solid oklch(0.22 0.032 250 / 0.50)' }}
              >
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: 'oklch(0.65 0.18 160)' }} />
                <span className="text-sm font-medium" style={{ color: 'oklch(0.82 0.006 250)' }}>{name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BENEFÍCIOS ═══ */}
      <section className="section-pad" style={{ background: 'var(--brand-navy)' }}>
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-tag">Benefícios</span>
              <h2 className="section-headline mb-6">O que está incluso na sua assinatura</h2>
              <div className="space-y-5">
                {benefits.map((b) => (
                  <div key={b.title} className="flex gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'oklch(0.56 0.23 250 / 0.15)', border: '1px solid oklch(0.56 0.23 250 / 0.25)' }}
                    >
                      <CheckCircle2 className="w-5 h-5" style={{ color: 'oklch(0.72 0.20 250)' }} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1" style={{ color: 'oklch(0.90 0.006 250)' }}>{b.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: 'oklch(0.58 0.010 250)' }}>{b.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Features checklist */}
              <div
                className="rounded-2xl p-8"
                style={{ background: 'oklch(0.13 0.028 250 / 0.80)', border: '1px solid oklch(0.24 0.034 250 / 0.50)' }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <Star className="w-5 h-5" style={{ color: 'oklch(0.72 0.20 250)' }} />
                  <h3 className="font-bold text-lg" style={{ color: 'oklch(0.90 0.006 250)' }}>Tudo que você recebe</h3>
                </div>
                <div className="space-y-3 mb-8">
                  {features.map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: 'oklch(0.65 0.18 160)' }} />
                      <span className="text-sm" style={{ color: 'oklch(0.72 0.008 250)' }}>{f}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={EDUZZ_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl text-base font-bold transition-all duration-200"
                  style={{
                    background: 'linear-gradient(135deg, oklch(0.56 0.23 250) 0%, oklch(0.50 0.26 245) 100%)',
                    color: 'white',
                    boxShadow: '0 6px 24px oklch(0.56 0.23 250 / 0.35)',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.92'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1'; }}
                >
                  <ShoppingCart className="w-5 h-5" />
                  Começar hoje
                  <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-xs text-center mt-3" style={{ color: 'oklch(0.45 0.008 250)' }}>
                  Acesso imediato após a confirmação do pagamento
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ PARA QUEM É ═══ */}
      <section className="section-pad" style={{ background: 'oklch(0.10 0.024 250)' }}>
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="section-tag">Ideal para</span>
            <h2 className="section-headline mb-4">Para Quem é a Yto Academy?</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetAudience.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-xl p-6 text-center"
                style={{ background: 'oklch(0.13 0.028 250 / 0.70)', border: '1px solid oklch(0.22 0.032 250 / 0.50)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'oklch(0.56 0.23 250 / 0.15)', border: '1px solid oklch(0.56 0.23 250 / 0.25)' }}
                >
                  <item.icon className="w-6 h-6" style={{ color: 'oklch(0.72 0.20 250)' }} />
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: 'oklch(0.90 0.006 250)' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: 'oklch(0.58 0.010 250)' }}>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DEPOIMENTOS EM VÍDEO ═══ */}
      <section className="section-pad" style={{ background: 'oklch(0.10 0.024 250)' }}>
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="section-tag">Depoimentos em Vídeo</span>
            <h2 className="section-headline mb-4">Quem Estuda, Recomenda</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: 'oklch(0.60 0.010 250)' }}>
              Veja o que nossos alunos falam sobre a experiência na Yto Academy
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {videoTestimonials.map((video, i) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
                style={{ aspectRatio: '16/10', border: '1px solid oklch(0.22 0.032 250 / 0.50)' }}
                onClick={() => setActiveVideo(video.videoId)}
              >
                {/* Thumbnail */}
                <img
                  src={video.thumbnail}
                  alt={`Depoimento de ${video.name}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ filter: 'brightness(0.65) saturate(0.80)' }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
                  }}
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, oklch(0.05 0.020 250 / 0.95) 0%, oklch(0.05 0.020 250 / 0.30) 50%, transparent 100%)' }}
                />
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                    style={{
                      background: 'oklch(0.56 0.23 250 / 0.90)',
                      boxShadow: '0 8px 32px oklch(0.56 0.23 250 / 0.55)',
                      border: '2px solid oklch(0.72 0.20 250 / 0.60)',
                    }}
                  >
                    <Play className="w-6 h-6 ml-1" style={{ color: 'white' }} />
                  </div>
                </div>
                {/* Info bottom */}
                <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
                  <p className="text-sm font-bold leading-tight" style={{ color: 'oklch(0.97 0.004 250)', textShadow: '0 1px 4px oklch(0 0 0 / 0.6)' }}>
                    {video.name}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'oklch(0.72 0.10 250)', textShadow: '0 1px 4px oklch(0 0 0 / 0.6)' }}>
                    {video.course}
                  </p>
                </div>
                {/* YouTube badge */}
                <div
                  className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-bold"
                  style={{ background: 'rgba(255,0,0,0.85)', color: 'white', backdropFilter: 'blur(4px)' }}
                >
                  ▶ YouTube
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://www.youtube.com/@YtoNihonTreinamentos/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
              style={{ color: 'oklch(0.65 0.18 250)' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'oklch(0.80 0.20 250)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'oklch(0.65 0.18 250)'; }}
            >
              <PlayCircle className="w-4 h-4" />
              Ver todos os depoimentos no YouTube
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <section
        className="relative py-24 overflow-hidden text-center"
        style={{ background: 'linear-gradient(135deg, oklch(0.14 0.040 250) 0%, oklch(0.10 0.028 250) 100%)' }}
      >
        <div className="orb orb-blue" style={{ width: '600px', height: '500px', top: '-40%', left: '50%', transform: 'translateX(-50%)', opacity: 0.22 }} />
        <div className="container-xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <PlayCircle className="w-16 h-16 mx-auto mb-6" style={{ color: 'oklch(0.72 0.20 250)' }} />
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'oklch(0.93 0.006 250)', fontFamily: 'var(--font-heading)' }}>
              Comece sua evolução hoje mesmo
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'oklch(0.60 0.010 250)' }}>
              Acesso imediato a todos os cursos. Aprenda no seu ritmo e transforme sua carreira em dados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={EDUZZ_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-base font-bold px-10 py-4 rounded-xl transition-all duration-200"
                style={{
                  background: 'linear-gradient(135deg, oklch(0.56 0.23 250) 0%, oklch(0.50 0.26 245) 100%)',
                  color: 'white',
                  boxShadow: '0 8px 32px oklch(0.56 0.23 250 / 0.40)',
                }}
              >
                <ShoppingCart className="w-5 h-5" />
                Assinar agora
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base px-8 py-4">
                <MessageCircle className="w-5 h-5" /> Falar no WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
