import React from 'react'
import './contacto.css'

export default function Contacto() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <main className="contacto-page">
      <section className="contact-grid">
        <div className="contact-left">
          <h1 className="contact-title">Contacta con nosotros</h1>

          <ul className="contact-features" role="list">
            <li className="feature-item" role="listitem">
              <span className="feature-icon" />
              <span>Horario de atención: Lunes a Viernes, 9:00 AM - 6:00 PM</span>
            </li>
            <li className="feature-item" role="listitem">
              <span className="feature-icon" />
              <span>Correo electrónico: info@maheja.com</span>
            </li>
            <li className="feature-item" role="listitem">
              <span className="feature-icon" />
              <span>Teléfono: (555) 123-4567</span>
            </li>
            <li className="feature-item" role="listitem">
              <span className="feature-icon" />
              <span>Dirección: Calle Ficticia 123, Colonia Centro, Ciudad, País</span>
            </li>
          </ul>

          <a className="contact-email" href="mailto:info@maheja.com">info@maheja.com</a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input className="contact-input" type="text" name="name" placeholder="NOMBRE" required />
          <input className="contact-input" type="tel" name="phone" placeholder="TELEFONO (OPCIONAL)" />
          <input className="contact-input" type="email" name="email" placeholder="CORREO ELECTRONICO" required />
          <textarea className="contact-textarea" name="message" placeholder="MENSAJE (ESCRIBE TU MENSAJE AQUÍ)" rows={6} />
          <button className="contact-submit" type="submit">ENVIAR</button>
        </form>
      </section>
    </main>
  )
}
