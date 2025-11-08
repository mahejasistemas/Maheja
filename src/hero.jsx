import './hero.css';


const Hero = () => {
  return (
    <>
      <section className="hero">
      {/* Image Background */}
      <div className="hero-image-container">
        <div className="hero-image"></div>
        <div className="hero-overlay"></div>
      </div>
      
      {/* Content Overlay */}
      <div className="hero-container">
        <div className="hero-content-side">
          <div className="hero-content">
            <span className="hero-badge animate-fade-up">
              <span className="hero-badge-dot" aria-hidden></span>
              Logística Profesional
            </span>
            <h1 className="hero-title animate-fade-up">
              Transportamos
              <span className="hero-accent">Tu Futuro</span>
            </h1>
            <p className="hero-subtitle animate-fade-up-delay-1">
              Soluciones de transporte de carga con más de 15 años de experiencia.
              Conectamos tu negocio con el mundo de manera eficiente y confiable.
            </p>
            <div className="hero-actions animate-fade-up-delay-2">
              <a href="#cotizar" className="hero-btn primary">
                Solicitar Cotización
                <svg className="hero-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L15 8L8 15M15 8H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#servicios" className="hero-btn secondary">Conocer Servicios</a>
            </div>
            <div className="hero-metrics animate-fade-up-delay-2" aria-hidden>
              <div className="metric">
                <div className="metric-value">+15</div>
                <div className="metric-label">Años de Experiencia</div>
              </div>
              <div className="metric">
                <div className="metric-value">500+</div>
                <div className="metric-label">Clientes Satisfechos</div>
              </div>
              <div className="metric">
                <div className="metric-value">24/7</div>
                <div className="metric-label">Atención al Cliente</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;
