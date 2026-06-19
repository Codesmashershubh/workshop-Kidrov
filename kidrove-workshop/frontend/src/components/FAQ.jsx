import { useState } from 'react'
import styles from './FAQ.module.css'

const faqs = [
  {
    q: 'Does my child need any prior coding or robotics experience?',
    a: 'Not at all! The workshop is designed for complete beginners. We start from the very basics and build up progressively. All your child needs is curiosity and a laptop with a stable internet connection.',
  },
  {
    q: 'What tools or equipment does my child need?',
    a: 'Everything is online and software-based — no physical kits required. Your child will need a computer (Windows/Mac/Linux) with Chrome or Firefox, and a reliable internet connection. All software tools we use are free and browser-based.',
  },
  {
    q: 'What are the session timings? Are classes recorded?',
    a: 'Live sessions are held Monday to Friday, 5:00 PM – 6:30 PM IST. Yes, all sessions are recorded and made available within 24 hours so your child can revise at their own pace. Recordings are accessible for 60 days after the workshop ends.',
  },
  {
    q: 'Will there be a certificate at the end?',
    a: 'Yes! Students who complete 80% or more of the sessions and submit their final project will receive a verified digital certificate from Kidrove. It can be downloaded, printed, and shared on LinkedIn or school portfolios.',
  },
  {
    q: 'What is the refund policy if my child cannot attend?',
    a: 'We offer a full refund if you cancel at least 5 days before the start date (July 15). Cancellations within 5 days are eligible for a 50% refund or a credit toward any future Kidrove workshop. No refunds are provided after the workshop begins.',
  },
  {
    q: 'How many students are in each batch?',
    a: 'Each batch is capped at 20 students to ensure every child gets personal attention from mentors. We maintain a mentor-to-student ratio of 1:10 throughout the program.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  const toggle = (i) => setOpen(open === i ? null : i)

  return (
    <section id="faq" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.sideCol}>
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Questions Parents Ask</h2>
            <p className="section-subtitle" style={{ fontSize: '15px' }}>
              Can't find your answer here? Reach out to us at{' '}
              <a href="mailto:hello@kidrove.com" style={{ color: 'var(--orange)' }}>
                hello@kidrove.com
              </a>
            </p>
          </div>

          <div className={styles.accordionCol}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`${styles.item} ${open === i ? styles.itemOpen : ''}`}
              >
                <button
                  className={styles.question}
                  onClick={() => toggle(i)}
                  aria-expanded={open === i}
                >
                  <span>{faq.q}</span>
                  <span className={styles.chevron} aria-hidden="true">
                    {open === i ? '−' : '+'}
                  </span>
                </button>
                {open === i && (
                  <div className={styles.answer}>
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
