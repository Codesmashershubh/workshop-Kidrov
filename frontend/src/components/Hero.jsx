import styles from './Hero.module.css'

const stats = [
  { value: '4 Weeks', label: 'Intensive Program' },
  { value: '8–14', label: 'Age Group (Years)' },
  { value: '₹2,999', label: 'All-Inclusive Fee' },
]

export default function Hero() {
  return (
    <section className={styles.hero}>
      <CircuitBackground />
      <div className={`container ${styles.content}`}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Enrollments Open · Starting 15 July 2026
        </div>

        <h1 className={styles.title}>
          AI &amp; Robotics
          <span className={styles.titleAccent}> Summer Workshop</span>
        </h1>

        <p className={styles.description}>
          Give your child a head start in tomorrow's technology. Our hands-on
          program guides kids through real AI concepts and robotics challenges
          in a structured, fun, online environment.
        </p>

        <div className={styles.actions}>
          <a href="#register" className="btn-primary">
            Enroll Now — ₹2,999
          </a>
          <a href="#details" className="btn-secondary">
            See Curriculum
          </a>
        </div>

        <div className={styles.stats}>
          {stats.map((s) => (
            <div key={s.label} className={styles.statCard}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CircuitBackground() {
  return (
    <svg
      className={styles.circuit}
      viewBox="0 0 1440 700"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {/* Horizontal tracks */}
      <line x1="0" y1="160" x2="400" y2="160" stroke="rgba(0,184,162,0.18)" strokeWidth="1.5" />
      <line x1="400" y1="160" x2="400" y2="300" stroke="rgba(0,184,162,0.18)" strokeWidth="1.5" />
      <line x1="400" y1="300" x2="700" y2="300" stroke="rgba(0,184,162,0.18)" strokeWidth="1.5" />
      <line x1="700" y1="300" x2="700" y2="80" stroke="rgba(0,184,162,0.18)" strokeWidth="1.5" />
      <line x1="700" y1="80" x2="1100" y2="80" stroke="rgba(0,184,162,0.18)" strokeWidth="1.5" />
      <line x1="1100" y1="80" x2="1100" y2="420" stroke="rgba(0,184,162,0.18)" strokeWidth="1.5" />
      <line x1="1100" y1="420" x2="1440" y2="420" stroke="rgba(0,184,162,0.18)" strokeWidth="1.5" />

      {/* Vertical tracks */}
      <line x1="250" y1="0" x2="250" y2="160" stroke="rgba(249,109,43,0.15)" strokeWidth="1.5" />
      <line x1="850" y1="0" x2="850" y2="80" stroke="rgba(249,109,43,0.15)" strokeWidth="1.5" />
      <line x1="1300" y1="200" x2="1300" y2="700" stroke="rgba(249,109,43,0.15)" strokeWidth="1.5" />

      {/* Nodes */}
      {[
        [250, 160], [400, 160], [400, 300], [700, 300], [700, 80], [850, 80],
        [1100, 80], [1100, 420], [1300, 420],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="5" fill="none" stroke="rgba(0,184,162,0.4)" strokeWidth="2" />
      ))}

      {/* Filled accent nodes */}
      {[[400, 300], [1100, 80]].map(([cx, cy], i) => (
        <circle key={`f${i}`} cx={cx} cy={cy} r="4" fill="rgba(249,109,43,0.5)" />
      ))}
    </svg>
  )
}
