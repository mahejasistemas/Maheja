import React from 'react'
import './cta.css'

export default function CTA() {
  const bg = '/src/img/fondo.jpg'
  return (
    <section className="cta-section" aria-label="Call to action">
      <div className="cta-container">
        <div className="cta-card" style={{ ['--cta-bg']: `url(${bg})` }} aria-labelledby="cta-title" aria-describedby="cta-sub">
          <div className="cta-overlay">
            <h2 id="cta-title" className="cta-title">Start your free trial today.</h2>
            <p id="cta-sub" className="cta-sub">Start with a 14-day free trial. No credit card required. No setup fees. Cancel anytime.</p>
            <div className="cta-actions" role="group" aria-label="Acciones CTA">
              <a className="cta-btn primary" href="#contacto" aria-label="Comenzar prueba">Get Started</a>
              <a className="cta-btn secondary" href="#servicios" aria-label="Conocer más servicios">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
