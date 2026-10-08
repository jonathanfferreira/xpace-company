import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { Schedule } from '../../components/Schedule';
import { Teachers } from '../../components/Teachers';
import { FAQ } from '../../components/FAQ';
import { FloatingWhatsApp } from '../../components/FloatingWhatsApp';
import { EnrollmentModal } from '../components/EnrollmentFunnel';
import './Escola.css';

const bookingUrl = 'https://agendamento.nextfit.com.br/f9b1ea53-0e0e-4f98-9396-3dab7c9fbff4';
const purchaseUrl = 'https://venda.nextfit.com.br/54a0cf4a-176f-46d3-b552-aad35019a4ff/contratos';
const whatsappUrl = 'https://wa.me/554791700812';

const programs = [
  { number: '01', title: 'DANÇAS URBANAS', detail: 'Ritmo, identidade e liberdade para se expressar.', audience: 'KIDS · TEENS · ADULTOS', className: 'urbanas' },
  { number: '02', title: 'K-POP', detail: 'Coreografias, atitude e a energia de dançar em grupo.', audience: 'INICIANTE · INTERMEDIÁRIO', className: 'kpop' },
  { number: '03', title: 'JAZZ FUNK & HEELS', detail: 'Presença, técnica e personalidade em cada movimento.', audience: 'TURMAS POR NÍVEL', className: 'jazz' },
  { number: '04', title: 'BALLET & CONTEMPORÂNEO', detail: 'Exploração do corpo, musicalidade e expressão artística.', audience: 'DIFERENTES FAIXAS ETÁRIAS', className: 'ballet' }
] as const;

const plans = [
  { name: 'Mensal', badge: 'Flexibilidade', once: 'R$ 130', twice: 'R$ 215', feature: false },
  { name: 'Semestral', badge: 'Para seguir evoluindo', once: 'R$ 115', twice: 'R$ 195', feature: false },
  { name: 'Anual', badge: 'Mais vantajoso', once: 'R$ 100', twice: 'R$ 165', feature: true }
] as const;

export const Escola: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [quizOpen, setQuizOpen] = useState(false);

  const openQuiz = () => { setMenuOpen(false); setQuizOpen(true); };
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="xds-page dark">
      <SEO
        title="XPACE Escola de Dança | Encontre sua turma em Joinville"
        description="Viva a dança na XPACE em Joinville. Conheça modalidades, horários, professores e planos, encontre sua turma e agende uma aula experimental."
        keywords="XPACE, escola de dança em Joinville, hip hop, danças urbanas, jazz funk, ballet, k-pop, aula experimental"
      />
      <a href="#conteudo-escola" className="xds-skip">Ir para o conteúdo</a>
      <header className="xds-header">
        <div className="xds-shell xds-header-inner">
          <Link to="/dance" className="xds-logo" aria-label="XPACE Escola de Dança — início" onClick={closeMenu}>
            <img src="/images/logo/XPACE PERFIL BRANCO.webp" alt="XPACE Escola de Dança" width="160" height="54" />
          </Link>
          <button type="button" className="xds-menu-trigger" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="xds-menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span><span></span><span></span>
          </button>
          <nav id="xds-menu" className={menuOpen ? 'xds-links is-open' : 'xds-links'} aria-label="Navegação da escola">
            <a href="#modalidades" onClick={closeMenu}>Modalidades</a>
            <a href="#schedule" onClick={closeMenu}>Horários</a>
            <a href="#plans" onClick={closeMenu}>Planos</a>
            <a href="#teachers" onClick={closeMenu}>Professores</a>
            <a href="#estudios" onClick={closeMenu}>Estúdios</a>
            <button type="button" className="xds-header-button" onClick={openQuiz}>Encontre sua turma <span aria-hidden="true">↗</span></button>
          </nav>
        </div>
      </header>

      <main id="conteudo-escola">
        <section className="xds-hero" aria-labelledby="xds-hero-heading">
          <div className="xds-hero-image" role="img" aria-label="Dança e movimento na XPACE"></div>
          <div className="xds-hero-gradient" aria-hidden="true"></div>
          <div className="xds-hero-grid" aria-hidden="true"></div>
          <div className="xds-shell xds-hero-inner">
            <div className="xds-hero-copy">
              <div className="xds-kicker"><span className="xds-kicker-dot"></span> XPACE ESCOLA DE DANÇA <span className="xds-kicker-slash">/</span> JOINVILLE, SC</div>
              <h1 id="xds-hero-heading">SEU PRÓXIMO<br /><em>MOVIMENTO</em><br />COMEÇA AQUI.</h1>
              <p>Tem um lugar para você na dança. Do primeiro passo aos grandes palcos, encontre seu ritmo, suas pessoas e sua próxima conquista.</p>
              <div className="xds-hero-actions">
                <button type="button" className="xds-button xds-button-primary" onClick={openQuiz}>Encontre sua turma <span aria-hidden="true">↗</span></button>
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="xds-button xds-button-outline">Agendar aula experimental <span aria-hidden="true">↗</span></a>
              </div>
              <div className="xds-hero-caption"><span>PARA COMEÇAR. PARA EVOLUIR. PARA DANÇAR.</span><span aria-hidden="true">↓</span></div>
            </div>
            <div className="xds-hero-image-label" aria-hidden="true"><span>ARTE EM MOVIMENTO</span><span>XPACE / 2026</span></div>
          </div>
        </section>

        <div className="xds-stripe" aria-label="Informações da escola">
          <div className="xds-shell xds-stripe-inner">
            <span>DANÇA PARA TODOS OS NÍVEIS</span><b aria-hidden="true">✳</b>
            <span>KIDS · TEENS · ADULTOS</span><b aria-hidden="true">✳</b>
            <span>JOINVILLE / SANTA CATARINA</span>
          </div>
        </div>

        <section className="xds-introduction xds-section" id="sobre-escola" aria-labelledby="xds-about-heading">
          <div className="xds-shell xds-intro-layout">
            <div className="xds-section-marker">01 / BEM-VINDO À XPACE</div>
            <div>
              <h2 id="xds-about-heading">AQUI, TODO MUNDO<br /><em>TEM SEU LUGAR.</em></h2>
              <div className="xds-intro-foot">
                <p>Dançar não começa quando você já sabe os passos. Começa quando você decide experimentar.</p>
                <p>Na XPACE, você encontra modalidades, níveis e professores para viver a dança do seu jeito — como descoberta, diversão, técnica ou caminho artístico.</p>
              </div>
              <button type="button" className="xds-inline-button" onClick={openQuiz}>Descubra por onde começar <span aria-hidden="true">↗</span></button>
            </div>
          </div>
        </section>

        <section id="modalidades" className="xds-modalities xds-section" aria-labelledby="xds-modalities-heading">
          <div className="xds-shell">
            <div className="xds-section-topline"><span>02 / DESCUBRA SEU ESTILO</span><span>UM MOVIMENTO PARA CADA PESSOA</span></div>
            <div className="xds-section-heading">
              <h2 id="xds-modalities-heading">QUAL É A<br /><em>SUA VIBE?</em></h2>
              <p>Encontre o estilo que combina com você. Temos turmas para diferentes idades, experiências e objetivos.</p>
            </div>
            <div className="xds-program-grid">
              {programs.map((program) => (
                <a key={program.number} className={'xds-program xds-program-' + program.className} href="#schedule">
                  <div className="xds-program-top"><span>{program.number} / MODALIDADE</span><span aria-hidden="true">↗</span></div>
                  <div className="xds-program-bottom"><h3>{program.title}</h3><p>{program.detail}</p><span className="xds-program-level">{program.audience}</span></div>
                </a>
              ))}
            </div>
            <div className="xds-modality-footer"><p>Não sabe qual modalidade escolher? A gente te ajuda.</p><button type="button" className="xds-inline-button" onClick={openQuiz}>Encontrar minha turma <span aria-hidden="true">↗</span></button></div>
          </div>
        </section>

        <div className="xds-schedule-shell">
          <div className="xds-shell xds-content-heading"><span>03 / SUA ROTINA NA XPACE</span><p>Escolha um dia, explore as aulas e descubra os horários que funcionam para você.</p></div>
          <Schedule />
        </div>

        <section className="xds-mid-cta" aria-label="Agende sua primeira aula">
          <div className="xds-shell xds-mid-inner">
            <div><span className="xds-section-marker">PRONTO PARA COMEÇAR?</span><h2>VEM SENTIR<br /><em>ESSA ENERGIA.</em></h2></div>
            <div><p>Sua primeira aula experimental é gratuita. Escolha seu horário e venha conhecer a XPACE de perto.</p><a className="xds-button xds-button-light" href={bookingUrl} target="_blank" rel="noopener noreferrer">Agendar aula experimental <span aria-hidden="true">↗</span></a></div>
          </div>
        </section>

        <section className="xds-plans xds-section" id="plans" aria-labelledby="xds-plans-heading">
          <div className="xds-shell">
            <div className="xds-section-topline"><span>04 / SUA JORNADA</span><span>PLANOS DE AULAS</span></div>
            <div className="xds-section-heading xds-plan-title"><h2 id="xds-plans-heading">ESCOLHA COMO<br /><em>QUER EVOLUIR.</em></h2><p>Opções para diferentes rotinas. Compare a frequência das aulas e escolha o plano ideal.</p></div>
            <div className="xds-plan-grid">
              {plans.map((plan) => (
                <article key={plan.name} className={plan.feature ? 'xds-plan xds-plan-feature' : 'xds-plan'}>
                  <div className="xds-plan-top"><span>PLANO {plan.name.toUpperCase()}</span>{plan.feature && <span className="xds-plan-best">DESTAQUE</span>}</div>
                  <h3>{plan.name}</h3><p className="xds-plan-badge">{plan.badge}</p>
                  <div className="xds-plan-price"><span>2 AULAS / SEMANA</span><strong>{plan.twice}<small>/mês</small></strong></div>
                  <div className="xds-plan-price xds-plan-price-secondary"><span>1 AULA / SEMANA</span><strong>{plan.once}<small>/mês</small></strong></div>
                  <a className="xds-plan-choose" href={purchaseUrl} target="_blank" rel="noopener noreferrer">Escolher plano <span aria-hidden="true">↗</span></a>
                </article>
              ))}
            </div>
            <div className="xds-premium-plan"><div><span className="xds-section-marker">PARA QUEM QUER MAIS</span><h3>PASSE LIVRE</h3><p>Acesse diferentes modalidades com o plano de aulas ilimitadas.</p></div><div className="xds-premium-right"><strong>R$ 499<small>/mês</small></strong><a href={purchaseUrl} target="_blank" rel="noopener noreferrer">Conhecer Passe Livre <span aria-hidden="true">↗</span></a></div></div>
            <div className="xds-plan-footnote"><span>MATRÍCULA: R$ 80</span><span>MODALIDADE EXTRA: + R$ 75/MÊS</span><span>Condições e disponibilidade sujeitos à confirmação na matrícula.</span></div>
          </div>
        </section>

        <section className="xds-life xds-section" aria-labelledby="xds-life-heading">
          <div className="xds-shell xds-life-layout">
            <div className="xds-life-photo" role="img" aria-label="Vivências da comunidade XPACE"><span>VIVER A DANÇA. VIVER A XPACE.</span></div>
            <div className="xds-life-copy"><span className="xds-section-marker">05 / MAIS QUE UMA AULA</span><h2 id="xds-life-heading">GENTE QUE<br />SE ENCONTRA<br /><em>NO MOVIMENTO.</em></h2><p>A dança cria encontros, histórias e possibilidades. Aqui, cada evolução importa — dentro e fora da sala.</p><Link to="/dance/company" className="xds-inline-button">Conheça nossa Dance Company <span aria-hidden="true">↗</span></Link></div>
          </div>
        </section>

        <div className="xds-team-wrap"><div className="xds-shell xds-team-intro"><span>06 / QUEM MOVE A XPACE</span><p>Professores e artistas que fazem cada aula acontecer.</p></div><Teachers /></div>

        <section className="xds-studios xds-section" id="estudios" aria-labelledby="xds-studios-heading">
          <div className="xds-shell xds-studios-layout">
            <div className="xds-studio-image"><img src="/images/gallery_new/sala1.webp" alt="Sala de dança da XPACE" loading="lazy" decoding="async" /></div>
            <div className="xds-studios-copy"><span className="xds-section-marker">07 / ESPAÇO PARA CRIAR</span><h2 id="xds-studios-heading">SEU ENSAIO<br /><em>TEM LUGAR.</em></h2><p>Além das aulas, nossos estúdios recebem ensaios, práticas e produções artísticas. Consulte disponibilidade e condições de locação.</p><a href={whatsappUrl + '?text=' + encodeURIComponent('Olá! Gostaria de saber mais sobre o aluguel de salas na XPACE.')} target="_blank" rel="noopener noreferrer" className="xds-inline-button">Consultar locação <span aria-hidden="true">↗</span></a></div>
          </div>
        </section>

        <div className="xds-faq-wrap"><div className="xds-shell xds-faq-label">08 / AINDA TEM DÚVIDAS?</div><FAQ /></div>

        <section className="xds-final-cta" aria-labelledby="xds-final-heading">
          <div className="xds-shell xds-final-inner"><span className="xds-section-marker">XPACE / JOINVILLE</span><h2 id="xds-final-heading">O PRIMEIRO PASSO<br /><em>É SEU.</em></h2><div className="xds-final-bottom"><p>Você não precisa saber dançar para começar. Precisa só chegar.</p><button type="button" className="xds-button xds-button-light" onClick={openQuiz}>Encontre sua turma <span aria-hidden="true">↗</span></button></div></div>
        </section>
      </main>

      <footer className="xds-footer"><div className="xds-shell">
        <div className="xds-footer-top"><Link to="/dance" aria-label="XPACE Escola de Dança — início"><img src="/images/logo/XPACE PERFIL BRANCO.webp" alt="XPACE" width="180" height="62" /></Link><p>Um lugar para viver a dança.<br />Rua Tijucas, 401 — Joinville, SC.</p></div>
        <div className="xds-footer-links"><a href="#modalidades">Modalidades</a><a href="#schedule">Horários</a><a href="#plans">Planos</a><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a><a href="https://instagram.com/xpaceescoladedanca" target="_blank" rel="noopener noreferrer">Instagram</a><Link to="/">XPACE Company</Link></div>
        <div className="xds-footer-bottom"><span>© {new Date().getFullYear()} XPACE Escola de Dança.</span><Link to="/privacy">Privacidade</Link></div>
      </div></footer>

      <FloatingWhatsApp />
      <EnrollmentModal isOpen={quizOpen} onClose={() => setQuizOpen(false)} />
    </div>
  );
};
