import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <a href="/" className={styles.logo}>
            <span className={styles.logoMark}>K</span>
            <span className={styles.logoText}>idrove</span>
          </a>
          <p className={styles.tagline}>
            Building tomorrow's innovators, one workshop at a time.
          </p>
        </div>

        <div className={styles.links}>
          <div className={styles.linkGroup}>
            <span className={styles.groupTitle}>Workshop</span>
            <a href="#details">Details</a>
            <a href="#outcomes">Curriculum</a>
            <a href="#faq">FAQs</a>
            <a href="#register">Register</a>
          </div>
          <div className={styles.linkGroup}>
            <span className={styles.groupTitle}>Contact</span>
            <a href="mailto:hello@kidrove.com">hello@kidrove.com</a>
            <a href="https://www.kidrove.com" target="_blank" rel="noreferrer">
              kidrove.com
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <span>© {new Date().getFullYear()} Kidrove. All rights reserved.</span>
          <span className={styles.sep}>·</span>
          <span>AI &amp; Robotics Summer Workshop</span>
        </div>
      </div>
    </footer>
  )
}
