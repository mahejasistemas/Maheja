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

  const Metric = ({ to, suffix, label, decimals = 0 }) => {
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
      <div className="est-metric">
        <div className="est-metric-value">{formatted}{suffix}</div>
        <div className="est-metric-label">{label}</div>
      </div>
    )
  }

  const Card = ({ title, text, Icon }) => (
    <div className="est-card">
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
    <section className="est-section" ref={sectionRef}>
      <div className="est-grid">
        <div className="est-left">
          <span className="est-badge">Features</span>
          <h2 className="est-title">Transform Your Digital Experience Today Together</h2>
          <p className="est-sub">Leverage cutting-edge technology to streamline your workflow and unlock new possibilities in the digital landscape.</p>

          <div className="est-metrics">
            <Metric to={2.5} suffix="M+" label="Users Served" decimals={1} />
            <Metric to={99.9} suffix="%" label="Uptime" decimals={1} />
            <Metric to={4.8} suffix="" label="User Score" decimals={1} />
          </div>
        </div>

        <div className="est-right">
          <Card title="Cloud Integration" text="Seamless cloud solutions for modern business needs" Icon={IconBox} />
          <Card title="24/7 Monitoring" text="Round-the-clock system monitoring and support" Icon={IconBox} />
          <Card title="AI-Powered Tools" text="Advanced machine learning algorithms delivering intelligent insights" Icon={IconBox} />
          <Card title="Enterprise Security" text="Military-grade encryption and advanced threat protection" Icon={IconBox} />
        </div>
      </div>
    </section>
  )
}

