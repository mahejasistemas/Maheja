import './navbar.css';
import MahejaLogo from './assets/Maheja.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={MahejaLogo} alt="Maheja" className="navbar-logo-img" />
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#how-it-works" className="navbar-link">Inicio</a>
          </li>
          <li className="navbar-item">
            <a href="#what-we-test" className="navbar-link">Servicios</a>
          </li>
          <li className="navbar-item">
            <a href="#reviews" className="navbar-link">Galeria</a>
          </li>
        </ul>
        <div className="navbar-auth">
          <a href="#login" className="navbar-login">Cotizar</a>
          <a href="#try-superpower" className="navbar-cta">Contacto</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;