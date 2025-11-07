import React from 'react'
import './contacto.css'

export default function Contacto() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <main className="contacto-page">
      <section className="contact-grid">
        {/* Columna izquierda: título y beneficios */}
        <div className="contact-left">
          <h1 className="contact-title">Contacta con nosotros</h1>

          <ul className="contact-features" role="list">
            <li className="feature-item" role="listitem">
              <span className="feature-icon" />
              <span>24/7 Soporte</span>
            </li>
            <li className="feature-item" role="listitem">
              <span className="feature-icon" />
              <span>Respuesta rápida dentro de 2 horas</span>
            </li>
            <li className="feature-item" role="listitem">
              <span className="feature-icon" />
              <span>Consulta experta disponible</span>
            </li>
            <li className="feature-item" role="listitem">
              <span className="feature-icon" />
              <span>Asesoría gratuita de proyecto</span>
            </li>
          </ul>

          <a className="contact-email" href="mailto:hi@shadcnblocks.com">contacto@maheja.com</a>
        </div>

        {/* Columna derecha: formulario */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input className="contact-input" type="text" name="name" placeholder="NOMBRE" required />
          <input className="contact-input" type="tel" name="phone" placeholder="TELÉFONO (OPCIONAL)" />
          <input className="contact-input" type="email" name="email" placeholder="EMAIL" required />
          <textarea className="contact-textarea" name="message" placeholder="MENSAJE (TELL US ABOUT YOUR PROJECT)" rows={6} />
          <button className="contact-submit" type="submit">ENVIAR AHORA</button>
        </form>
      </section>
    </main>
  )
}