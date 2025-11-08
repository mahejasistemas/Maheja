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
            <h1 className="hero-title animate-fade-up" style={{ background: 'linear-gradient(90deg, #ff416c, #ff0000)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
             Transporte de carga rapido, seguro  y sin complicaciones
            </h1>
            <p className="hero-subtitle animate-fade-up-delay-1" style={{ color: 'white' }}>
              Transporte de Mercancias en modadidad full o sencillos<br />
              Tolvas y Contenedores 
            </p>
            <div className="hero-actions animate-fade-up-delay-2">
              <a href="#join" className="hero-cta">
                Cotiza ahora
                <svg className="hero-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L15 8L8 15M15 8H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <div className="hero-eligibility">
                <svg className="eligibility-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="2"/>
                  <path d="M6 8L7 9L10 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>En todo Mexico </span>
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