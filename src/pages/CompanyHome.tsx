import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
const companyLogo = '/brand/xpace-company-white.png';
import './CompanyHome.css';

const ecapxLogo = '/brand/ecapx.png';
const xtageLogo = '/brand/xtage-color.png';

export const CompanyHome: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="xco-site" id="inicio">
      <SEO
        title="XPACE Company | Cultura, movimento e tecnologia"
        description="Conheça a XPACE Company: a origem na dança, a XTAGE para festivais e eventos, a ECAPX para tecnologia e os próximos projetos do nosso ecossistema."
        keywords="XPACE Company, XPACE Dance, XTAGE, ECAPX, escola de dança, tecnologia, festivais"
      />
      <a className="xco-skip" href="#conteudo">Ir para o conteúdo</a>
      <header className="xco-header">
        <div className="xco-shell xco-header-inner">
          <Link className="xco-brand" to="/" aria-label="XPACE Company — início" onClick={closeMenu}>
            <img src={companyLogo} alt="XPACE Company" />
          </Link>
          <button
            className="xco-mobile-toggle"
            type="button"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            aria-controls="xco-main-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span><span></span><span></span>
          </button>
          <nav id="xco-main-menu" className={`xco-navigation${menuOpen ? ' is-open' : ''}`} aria-label="Navegação institucional">
            <a href="#origem" onClick={closeMenu}>Nossa origem</a>
            <a href="#ecossistema" onClick={closeMenu}>Ecossistema</a>
            <a href="#conexoes" onClick={closeMenu}>O que nos conecta</a>
            <a className="xco-nav-action" href="mailto:ecapxtech@gmail.com?subject=Contato%20XPACE%20Company" onClick={closeMenu}>
              Vamos conversar <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      </header>

      <main id="conteudo">
        <section className="xco-hero" aria-labelledby="xco-hero-title">
          <div className="xco-gridlines" aria-hidden="true"></div>
          <div className="xco-hero-disc" aria-hidden="true">
            <span className="xco-hero-x">X</span>
            <span className="xco-orbit xco-orbit-one"></span>
            <span className="xco-orbit xco-orbit-two"></span>
          </div>
          <div className="xco-shell xco-hero-content">
            <div className="xco-eyebrow"><span className="xco-orange-dot"></span> XPACE COMPANY <span className="xco-eyebrow-divider">/</span> CULTURA × TECNOLOGIA</div>
            <h1 id="xco-hero-title">NASCEMOS<br />PARA <em>MOVER.</em></h1>
            <p>Da dança à tecnologia, criamos experiências e soluções que conectam pessoas, transformam ideias e abrem novos caminhos.</p>
            <div className="xco-hero-buttons">
              <a className="xco-button xco-button-orange" href="#ecossistema">Explore o ecossistema <span aria-hidden="true">↗</span></a>
              <a className="xco-text-link" href="#origem">Entenda nossa história <span aria-hidden="true">↘</span></a>
            </div>
          </div>
          <div className="xco-shell xco-hero-bottom">
            <span>JOINVILLE — SANTA CATARINA</span>
            <span>IDEIAS EM MOVIMENTO <span aria-hidden="true">↓</span></span>
          </div>
        </section>

        <div className="xco-ticker" aria-label="Áreas de atuação">
          <div className="xco-shell xco-ticker-content">
            <span>CULTURA</span><span className="xco-ticker-cross" aria-hidden="true">✳</span>
            <span>EDUCAÇÃO</span><span className="xco-ticker-cross" aria-hidden="true">✳</span>
            <span>TECNOLOGIA</span><span className="xco-ticker-cross" aria-hidden="true">✳</span>
            <span>EXPERIÊNCIAS</span>
          </div>
        </div>

        <section className="xco-origin xco-section" id="origem" aria-labelledby="xco-origin-title">
          <div className="xco-shell xco-origin-grid">
            <div className="xco-section-label"><span className="xco-index">01 / NOSSA ORIGEM</span><span className="xco-line"></span></div>
            <div className="xco-origin-body">
              <h2 id="xco-origin-title">UMA ORIGEM.<br /><span>MUITOS CAMINHOS.</span></h2>
              <div className="xco-origin-details">
                <p>A XPACE nasceu do movimento: pessoas, expressão, ensino e encontro. Foi dessa experiência real que surgiu uma visão maior.</p>
                <p>Hoje, levamos a mesma energia para criar produtos, plataformas e experiências em diferentes universos. Cada projeto tem sua identidade. Todos compartilham a vontade de fazer acontecer.</p>
              </div>
              <div className="xco-origin-caption">O MOVIMENTO É A NOSSA ORIGEM. A CRIAÇÃO É O QUE NOS LEVA ADIANTE.</div>
            </div>
          </div>
        </section>

        <section className="xco-ecosystem xco-section" id="ecossistema" aria-labelledby="xco-ecosystem-title">
          <div className="xco-shell">
            <div className="xco-section-intro">
              <div className="xco-section-label"><span className="xco-index">02 / NOSSO ECOSSISTEMA</span><span className="xco-line"></span></div>
              <h2 id="xco-ecosystem-title">UM UNIVERSO.<br /><span>VÁRIAS FORMAS DE CRIAR.</span></h2>
              <p>Negócios independentes, conectados por uma mesma visão. Descubra o papel de cada um.</p>
            </div>

            <article className="xco-product xco-dance" aria-labelledby="xco-dance-title">
              <div className="xco-dance-photo" role="img" aria-label="Registro de apresentações de dança da XPACE"></div>
              <div className="xco-dance-overlay"></div>
              <div className="xco-product-inner">
                <div className="xco-product-meta"><span>01 / CULTURA & EDUCAÇÃO</span><span>ONDE TUDO COMEÇOU</span></div>
                <div className="xco-product-copy">
                  <div className="xco-product-pill">MOVIMENTO QUE TRANSFORMA</div>
                  <h3 id="xco-dance-title">XPACE<br /><span>DANCE.</span></h3>
                  <p>Escola de dança, formação artística e experiências no palco. Nosso ponto de partida — e uma das formas mais verdadeiras de criar conexões.</p>
                  <div className="xco-product-actions">
                    <Link to="/dance" className="xco-product-cta">Conheça a escola <span aria-hidden="true">↗</span></Link>
                    <Link to="/dance/company" className="xco-minor-link">Dance Company <span aria-hidden="true">↗</span></Link>
                  </div>
                </div>
              </div>
            </article>

            <article className="xco-product xco-xtage" aria-labelledby="xco-xtage-title">
              <div className="xco-product-inner">
                <div className="xco-product-meta"><span>02 / PLATAFORMA DE EVENTOS</span><span>PRODUTO DIGITAL</span></div>
                <div className="xco-xtage-grid">
                  <div className="xco-product-copy">
                    <div className="xco-product-pill xco-pill-dark">TECNOLOGIA PARA O PALCO</div>
                    <h3 id="xco-xtage-title">O EVENTO<br />ACONTECE.<br /><span>A XTAGE CONECTA.</span></h3>
                    <p>Uma plataforma para quem realiza festivais e eventos de dança. Inscrições, organização, ingressos e operação em um único ecossistema.</p>
                    <a href="https://xtage.app" target="_blank" rel="noopener noreferrer" className="xco-product-cta xco-cta-dark">Conheça a XTAGE <span aria-hidden="true">↗</span></a>
                  </div>
                  <div className="xco-xtage-brand-panel">
                    <div className="xco-xtage-ticket" aria-hidden="true">
                      <span className="xco-ticket-top">XTAGE / CULTURA EM REDE</span>
                      <span className="xco-ticket-mark">✳</span>
                      <span className="xco-ticket-bottom">EVENTOS · INSCRIÇÕES · INGRESSOS</span>
                    </div>
                    <img src={xtageLogo} alt="Logotipo oficial XTAGE" loading="lazy" />
                    <div className="xco-xtage-pink-block" aria-hidden="true"></div>
                  </div>
                </div>
              </div>
            </article>

            <article className="xco-product xco-ecapx" aria-labelledby="xco-ecapx-title">
              <div className="xco-product-inner">
                <div className="xco-product-meta"><span>03 / ESTÚDIO & TECNOLOGIA</span><span>CRIAÇÃO DIGITAL</span></div>
                <div className="xco-ecapx-grid">
                  <div className="xco-ecapx-visual">
                    <div className="xco-ecapx-visual-top"><span>BUILDING WHAT'S NEXT</span><span aria-hidden="true">✳</span></div>
                    <div className="xco-ecapx-logo-wrap"><img src={ecapxLogo} alt="Logotipo oficial ECAPX" loading="lazy" /></div>
                    <span className="xco-ecapx-visual-foot">DESIGN / SOFTWARE / EXPERIÊNCIAS DIGITAIS</span>
                  </div>
                  <div className="xco-product-copy">
                    <div className="xco-product-pill xco-pill-dark">IDEIAS EM PRODUTOS REAIS</div>
                    <h3 id="xco-ecapx-title">DA IDEIA<br />AO DIGITAL.</h3>
                    <p>Nosso estúdio de design e tecnologia. Criamos identidades, sites, plataformas, sistemas e automações para marcas que querem evoluir.</p>
                    <a href="https://ecapx.tech" target="_blank" rel="noopener noreferrer" className="xco-product-cta xco-cta-dark">Conheça a ECAPX <span aria-hidden="true">↗</span></a>
                  </div>
                </div>
              </div>
            </article>

            <div className="xco-next" aria-labelledby="xco-next-title">
              <div className="xco-next-left"><span className="xco-index">04 / PRÓXIMOS MOVIMENTOS</span><h3 id="xco-next-title">O QUE VEM<br /><em>DEPOIS?</em></h3></div>
              <div className="xco-next-right"><span className="xco-next-status"><span aria-hidden="true">●</span> EM DESENVOLVIMENTO</span><p>Estamos estudando novas soluções para ajudar escolas e profissionais a organizar seus negócios. Por enquanto, é um projeto em evolução — sem anúncio de lançamento.</p></div>
            </div>
          </div>
        </section>

        <section className="xco-connections xco-section" id="conexoes" aria-labelledby="xco-connections-title">
          <div className="xco-shell">
            <div className="xco-section-label"><span className="xco-index">03 / O QUE NOS CONECTA</span><span className="xco-line"></span></div>
            <div className="xco-connections-grid">
              <h2 id="xco-connections-title">NEGÓCIOS<br />DIFERENTES.<br /><em>A MESMA ENERGIA.</em></h2>
              <div className="xco-connection-copy"><p>Começamos com pessoas em movimento. E continuamos criando para pessoas.</p><p>É isso que atravessa tudo o que fazemos: entender necessidades reais e transformá-las em experiências que funcionam.</p></div>
            </div>
            <div className="xco-values"><span>CRIATIVIDADE</span><span>01</span><span>CONEXÃO</span><span>02</span><span>EVOLUÇÃO</span><span>03</span></div>
          </div>
        </section>

        <section className="xco-outro" aria-labelledby="xco-outro-title">
          <div className="xco-shell xco-outro-inner">
            <span className="xco-index">04 / VAMOS NOS CONECTAR</span>
            <h2 id="xco-outro-title">BOAS IDEIAS<br />PRECISAM DE<br /><em>MOVIMENTO.</em></h2>
            <div className="xco-outro-bottom">
              <p>Conheça nossos projetos, descubra novas possibilidades ou venha construir algo com a gente.</p>
              <a href="mailto:ecapxtech@gmail.com?subject=Contato%20XPACE%20Company" className="xco-button xco-button-white">Vamos conversar <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>
      </main>
      <footer className="xco-footer">
        <div className="xco-shell">
          <div className="xco-footer-top">
            <Link to="/" aria-label="XPACE Company — início"><img src={companyLogo} alt="XPACE Company" /></Link>
            <div className="xco-footer-links">
              <Link to="/dance">XPACE Dance</Link><a href="https://xtage.app" target="_blank" rel="noopener noreferrer">XTAGE</a><a href="https://ecapx.tech" target="_blank" rel="noopener noreferrer">ECAPX</a>
            </div>
          </div>
          <div className="xco-footer-bottom"><span>© {new Date().getFullYear()} XPACE Company. Joinville, SC.</span><span>UMA ORIGEM. MUITOS CAMINHOS.</span><Link to="/privacy">Privacidade</Link></div>
        </div>
      </footer>
    </div>
  );
};
