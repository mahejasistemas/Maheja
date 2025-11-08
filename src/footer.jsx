import './footer.css';
import MahejaLogo from './assets/Maheja.svg';

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo" aria-label="Pie de página">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={MahejaLogo} alt="Maheja" className="footer-logo-img" />
            </div>
            <p className="footer-tagline">Componentes hechos fácil.</p>
          </div>
          
          <nav className="footer-links" aria-label="Enlaces del sitio">
            <div className="footer-column scroll-fade-up">
              <h3 className="footer-column-title">Enlaces Rápidos</h3>
              <ul className="footer-column-list">
                <li><a href="#inicio" className="footer-link">Inicio</a></li>
                <li><a href="#servicios" className="footer-link">Servicios</a></li>
                <li><a href="#galeria" className="footer-link">Galeria</a></li>
                <li><a href="#contacto" className="footer-link">Contacto</a></li>
                <li><a href="#contactar" className="footer-link">Contactar</a></li>
              </ul>
            </div>
            
            <div className="footer-column scroll-fade-up">
              <h3 className="footer-column-title">Empresa</h3>
              <ul className="footer-column-list">
                <li><a href="#about" className="footer-link">Acerca de</a></li>
                <li><a href="#contact" className="footer-link">Contacto</a></li>
                <li><a href="#privacy" className="footer-link">Privacidad</a></li>
              </ul>
            </div>
            
            <div className="footer-column scroll-fade-up">
              <h3 className="footer-column-title">Recursos</h3>
              <ul className="footer-column-list">
                <li><a href="#help" className="footer-link">Ayuda</a></li>
                <li><a href="#sales" className="footer-link">Ventas</a></li>
                <li><a href="#advertise" className="footer-link">Publicidad</a></li>
              </ul>
            </div>
            
            <div className="footer-column scroll-fade-up">
              <h3 className="footer-column-title">Síguenos</h3>
              <ul className="footer-column-list">
                <li><a href="#twitter" className="footer-link">TikTok</a></li>
                <li><a href="#instagram" className="footer-link">Instagram</a></li>
                <li><a href="#linkedin" className="footer-link">Facebook</a></li>
              </ul>
            </div>
          </nav>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">© 2024 Maheja.com. Todos los derechos reservados.</p>
          <div>
            <a href="MW" className="footer-legal-link" target="_blank" rel="noopener noreferrer">Made By MetaWeb Dev Solutions</a>
          </div>
          <div className="footer-legal">
            <a href="#terms" className="footer-legal-link">Términos y Condiciones</a>
            <a href="#privacy-policy" className="footer-legal-link">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
