import React, { useMemo, useState, useEffect } from 'react'
import './services.css'

const pad2 = (n) => String(n).padStart(2, '0')

export default function Services() {
  const features = useMemo(() => ([
    { title: 'Modalidad Full', desc: 'Doble remolque para mayor capacidad y eficiencia en rutas largas.' },
    { title: 'Modalidad Sencillo', desc: 'Remolque único ideal para operaciones estándar y entregas regionales.' },
    { title: 'Transporte en Tolvas', desc: 'Soluciones para carga a granel: granos, minerales y materiales sólidos.' },
    { title: 'Transporte de Contenedores', desc: 'Movilización de contenedores de 20/40 ft con servicio intermodal.' },
  ]), [])

  const pageSize = 3
  const totalPages = Math.ceil(features.length / pageSize)
  const [page, setPage] = useState(0)

  const start = page * pageSize
  const visible = features.slice(start, start + pageSize)
  const progress = totalPages > 1 ? (page / (totalPages - 1)) * 100 : 100

  const prev = () => setPage((p) => Math.max(0, p - 1))
  const next = () => setPage((p) => Math.min(totalPages - 1, p + 1))

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [totalPages])

  return (
    <section className="services-section" id="servicios" role="region" aria-label="Servicios de transporte">
      <div className="services-container">
        <div className="services-header" aria-live="polite">
          <span className="services-badge">Transporte de mercancías</span>
          <h2 className="services-title">Servicios: Full, Sencillo, Tolvas y Contenedores</h2>
          <div className="services-meta" aria-describedby="services-meta-desc">
            <span id="services-meta-desc" className="meta-label">Explora nuestros servicios</span>
            <div className="meta-controls">
              <span className="meta-count">{pad2(page + 1)}</span>
              <div className="meta-progress" aria-hidden>
                <div className="meta-progress-fill" style={{ width: `${progress}%` }} />
              </div>
              <span className="meta-total">{pad2(totalPages)}</span>
              <button className="meta-btn" aria-label="Anterior" onClick={prev} disabled={page === 0}>
                <span className="chev">←</span>
              </button>
              <button className="meta-btn" aria-label="Siguiente" onClick={next} disabled={page === totalPages - 1}>
                <span className="chev">→</span>
              </button>
            </div>
          </div>
        </div>

        <div className="features-grid">
          {visible.map((f, i) => (
            <article
              className="feature-card"
              style={{ ['--d']: `${i * 90}ms` }}
              key={`${f.title}-${i}`}
            >
              <div className="feature-icon" aria-hidden>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M8 12l2 2 4-4" />
                </svg>
              </div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
