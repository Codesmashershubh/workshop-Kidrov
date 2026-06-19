import styles from './LearningOutcomes.module.css'

const weeks = [
  {
    week: 'Week 1',
    theme: 'Foundations of AI',
    outcomes: [
      'Understand what Artificial Intelligence is and how it works in everyday life',
      'Explore real-world applications: recommendation systems, image recognition, voice assistants',
      'Build a basic decision-making algorithm using block-based coding',
    ],
  },
  {
    week: 'Week 2',
    theme: 'Machine Learning Basics',
    outcomes: [
      'Learn how machines learn from data with supervised and unsupervised models',
      'Train a simple image classifier using Google Teachable Machine',
      'Understand the concept of training data, accuracy, and model testing',
    ],
  },
  {
    week: 'Week 3',
    theme: 'Robotics & Automation',
    outcomes: [
      'Explore how sensors and actuators work together in robotic systems',
      'Program a simulated robot to navigate a maze using logic and loops',
      'Understand the difference between pre-programmed and AI-driven robots',
    ],
  },
  {
    week: 'Week 4',
    theme: 'Build & Present',
    outcomes: [
      'Integrate AI logic into a mini robotics project of the student\'s choice',
      'Develop problem-solving and critical thinking through real engineering challenges',
      'Present the project to peers and receive structured mentor feedback',
    ],
  },
]

export default function LearningOutcomes() {
  return (
    <section id="outcomes" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Curriculum</span>
          <h2 className="section-title">What Your Child Will Learn</h2>
          <p className="section-subtitle">
            A week-by-week progression from core concepts to a fully built project —
            structured so every child can follow along and thrive.
          </p>
        </div>

        <div className={styles.timeline}>
          {weeks.map((w, i) => (
            <div key={w.week} className={styles.weekBlock}>
              <div className={styles.weekSide}>
                <div className={styles.weekBadge}>
                  <span className={styles.weekNum}>{String(i + 1).padStart(2, '0')}</span>
                </div>
                {i < weeks.length - 1 && <div className={styles.connector} />}
              </div>
              <div className={styles.weekContent}>
                <div className={styles.weekMeta}>
                  <span className={styles.weekLabel}>{w.week}</span>
                  <h3 className={styles.weekTheme}>{w.theme}</h3>
                </div>
                <ul className={styles.outcomeList}>
                  {w.outcomes.map((o) => (
                    <li key={o} className={styles.outcomeItem}>
                      <span className={styles.check} aria-hidden="true">✓</span>
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
