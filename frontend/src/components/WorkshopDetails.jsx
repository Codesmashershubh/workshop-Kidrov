import styles from './WorkshopDetails.module.css'

const details = [
  {
    icon: '👦',
    label: 'Age Group',
    value: '8 – 14 Years',
    note: 'Designed for middle-school curious minds',
  },
  {
    icon: '📅',
    label: 'Duration',
    value: '4 Weeks',
    note: '5 sessions per week, 90 min each',
  },
  {
    icon: '💻',
    label: 'Mode',
    value: 'Online (Live)',
    note: 'Interactive Zoom sessions with mentors',
  },
  {
    icon: '💰',
    label: 'Workshop Fee',
    value: '₹2,999',
    note: 'Includes all materials & certificate',
  },
  {
    icon: '🚀',
    label: 'Start Date',
    value: '15 July 2026',
    note: 'Registration closes 10 July 2026',
  },
  {
    icon: '🏅',
    label: 'Certificate',
    value: 'Included',
    note: 'Digital certificate on completion',
  },
]

export default function WorkshopDetails() {
  return (
    <section id="details" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Workshop Details</span>
          <h2 className="section-title">Everything You Need to Know</h2>
          <p className="section-subtitle">
            A structured 4-week journey covering AI fundamentals, machine learning
            concepts, and hands-on robotics — all from the comfort of home.
          </p>
        </div>

        <div className={styles.grid}>
          {details.map((item) => (
            <div key={item.label} className={styles.card}>
              <div className={styles.cardIcon}>{item.icon}</div>
              <div className={styles.cardBody}>
                <span className={styles.cardLabel}>{item.label}</span>
                <span className={styles.cardValue}>{item.value}</span>
                <span className={styles.cardNote}>{item.note}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
