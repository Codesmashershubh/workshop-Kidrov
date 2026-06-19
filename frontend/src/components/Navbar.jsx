import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'About', href: '#details' },
    { label: 'Curriculum', href: '#outcomes' },
    { label: 'FAQs', href: '#faq' },
    { label: 'Register', href: '#register' },
  ]

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="/" className={styles.logo}>
          <span className={styles.logoMark}>K</span>
          <span className={styles.logoText}>idrove</span>
        </a>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.navLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#register" className="btn-primary" style={{ padding: '10px 20px', fontSize: '14px' }}>
            Enroll Now
          </a>
        </nav>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barTop : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barMid : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barBot : ''}`} />
        </button>
      </div>
    </header>
  )
}
