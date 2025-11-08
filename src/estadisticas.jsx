import React, { useEffect, useRef, useState } from 'react'
import './estadisticas.css'

export default function Stats() {
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.25 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const Metric = ({ to, suffix, label, decimals = 0, delay = 0 }) => {
    const [val, setVal] = useState(0)
    const raf = useRef()
    useEffect(() => {
      if (!inView) return
      const start = performance.now()
      const dur = 1200
      const step = (now) => {
        const t = Math.min(1, (now - start) / dur)
        const eased = 1 - Math.pow(1 - t, 3)
        setVal(to * eased)
        if (t < 1) raf.current = requestAnimationFrame(step)
      }
      raf.current = requestAnimationFrame(step)
      return () => cancelAnimationFrame(raf.current)
    }, [inView, to])
    const formatted = decimals ? val.toFixed(decimals) : Math.round(val)
    return (
      <div className="est-metric" style={{ ['--d']: `${delay}ms` }}>
        <div className="est-metric-value">{formatted}{suffix}</div>
        <div className="est-metric-label">{label}</div>
      </div>
    )
  }

  const Card = ({ title, text, Icon, delay = 0 }) => (
    <div className="est-card" style={{ ['--d']: `${delay}ms` }}>
      <div className="est-card-icon"><Icon /></div>
      <div>
        <h3 className="est-card-title">{title}</h3>
        <p className="est-card-text">{text}</p>
      </div>
    </div>
  )

  const IconBox = () => (
    <svg width="36" height="36" viewBox="0 0 32 32" aria-hidden>
      <path d="M16 2l12 7v14l-12 7-12-7V9z" fill="#000" />
    </svg>
  )

  return (
    <section
      className="est-section"
      ref={sectionRef}
      role="region"
      aria-label="Estadísticas y beneficios"
      data-inview={inView}
    >
      <div className="est-grid">
        <div className="est-left">
          <span className="est-badge">Estadisticas</span>
          <h2 className="est-title">Transporta tu carga con confianza</h2>
          <p className="est-sub">
            Con mas de 15 años de experiencia en el transporte de mercancias, ofrecemos soluciones seguras y eficientes para tu carga.
          </p>
          <div className="est-metrics">
            <Metric to={50} suffix="+" label="Usuarios Satisfechos" decimals={0} delay={0} />
            <Metric to={100} suffix="%" label="Calidad" decimals={0} delay={120} />
            <Metric to={15} suffix="años" label="Experiencia" decimals={0} delay={240} />
          </div>
        </div>
        <div className="est-right">
          <Card title="Transporte de Mercancias" text="Ofrecemos un servicio de transporte de mercancias en modalidad full o sencilla, tanto para tolvas como para contenedores." Icon={IconBox} delay={0} />
          <Card title="24/7 Servicio" text="Nuestro servicio está disponible 24 horas por día, 7 días por semana, para satisfacer tus necesidades de transporte." Icon={IconBox} delay={120} />
          <Card title="Seguridad" text="Nos tomamos muy en serio la seguridad de nuestros clientes y sus mercancías. Utilizamos tecnología de vanguardia para proteger tus datos y tu carga." Icon={IconBox} delay={240} />
          <Card title="Soporte Técnico" text="Nuestro equipo de soporte técnico está disponible 24 horas por día, 7 días por semana, para ayudarte en todo lo que necesites." Icon={IconBox} delay={360} />
        </div>
      </div>
    </section>
  )
}

