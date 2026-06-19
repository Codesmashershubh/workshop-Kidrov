import { useState } from 'react'
import styles from './RegistrationForm.module.css'

const initialValues = { name: '', email: '', phone: '' }
const initialErrors = { name: '', email: '', phone: '' }

function validate(values) {
  const errors = { name: '', email: '', phone: '' }

  if (!values.name.trim()) {
    errors.name = 'Full name is required.'
  } else if (values.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.'
  }

  if (!values.email.trim()) {
    errors.email = 'Email address is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!values.phone.trim()) {
    errors.phone = 'Phone number is required.'
  } else if (!/^[6-9]\d{9}$/.test(values.phone.replace(/\s/g, ''))) {
    errors.phone = 'Enter a valid 10-digit Indian mobile number.'
  }

  return errors
}

function hasErrors(errors) {
  return Object.values(errors).some(Boolean)
}

export default function RegistrationForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState(initialErrors)
  const [touched, setTouched] = useState({ name: false, email: false, phone: false })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [serverMessage, setServerMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    const updated = { ...values, [name]: value }
    setValues(updated)
    if (touched[name]) {
      setErrors(validate(updated))
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched((t) => ({ ...t, [name]: true }))
    setErrors(validate(values))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const allTouched = { name: true, email: true, phone: true }
    setTouched(allTouched)
    const currentErrors = validate(values)
    setErrors(currentErrors)
    if (hasErrors(currentErrors)) return

    setStatus('loading')
    setServerMessage('')

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      const data = await res.json()

      if (res.ok) {
        setStatus('success')
        setServerMessage(data.message || 'Registration successful!')
        setValues(initialValues)
        setTouched({ name: false, email: false, phone: false })
        setErrors(initialErrors)
      } else {
        setStatus('error')
        setServerMessage(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setServerMessage('Unable to reach the server. Please check your connection.')
    }
  }

  if (status === 'success') {
    return (
      <section id="register" className={`section ${styles.section}`}>
        <div className="container">
          <div className={styles.successCard}>
            <div className={styles.successIcon}>🎉</div>
            <h2 className={styles.successTitle}>You're Registered!</h2>
            <p className={styles.successMsg}>
              {serverMessage} We'll send confirmation details to <strong>{values.email || 'your email'}</strong> shortly.
            </p>
            <button className="btn-primary" onClick={() => setStatus('idle')} style={{ marginTop: '8px' }}>
              Register Another Student
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="register" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.infoCol}>
            <span className="section-label">Get Started</span>
            <h2 className="section-title">Reserve Your Spot Today</h2>
            <p className="section-subtitle" style={{ fontSize: '15px' }}>
              Seats are limited to 20 students per batch. Fill in your details and
              our team will reach out within 24 hours to confirm your enrollment.
            </p>

            <div className={styles.highlights}>
              {[
                ['📞', 'We\'ll call you within 24 hours'],
                ['🔒', 'Your data is safe with us'],
                ['✅', 'No payment needed to enquire'],
              ].map(([icon, text]) => (
                <div key={text} className={styles.highlight}>
                  <span>{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.formCard}>
            <h3 className={styles.formTitle}>Enquiry Form</h3>

            {status === 'error' && (
              <div className={styles.alertError} role="alert">
                {serverMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="name">
                  Parent / Guardian Name <span className={styles.req}>*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  className={`${styles.input} ${touched.name && errors.name ? styles.inputError : ''}`}
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="name"
                  disabled={status === 'loading'}
                />
                {touched.name && errors.name && (
                  <span className={styles.errorMsg} role="alert">{errors.name}</span>
                )}
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="email">
                  Email Address <span className={styles.req}>*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="e.g. rahul@email.com"
                  className={`${styles.input} ${touched.email && errors.email ? styles.inputError : ''}`}
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="email"
                  disabled={status === 'loading'}
                />
                {touched.email && errors.email && (
                  <span className={styles.errorMsg} role="alert">{errors.email}</span>
                )}
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="phone">
                  Phone Number <span className={styles.req}>*</span>
                </label>
                <div className={styles.phoneWrapper}>
                  <span className={styles.phonePrefix}>+91</span>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="98XXXXXXXX"
                    className={`${styles.input} ${styles.phoneInput} ${touched.phone && errors.phone ? styles.inputError : ''}`}
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="tel"
                    maxLength={10}
                    disabled={status === 'loading'}
                  />
                </div>
                {touched.phone && errors.phone && (
                  <span className={styles.errorMsg} role="alert">{errors.phone}</span>
                )}
              </div>

              <button
                type="submit"
                className={`btn-primary ${styles.submitBtn}`}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <>
                    <span className={styles.spinner} aria-hidden="true" />
                    Submitting…
                  </>
                ) : (
                  'Submit Enquiry'
                )}
              </button>

              <p className={styles.disclaimer}>
                By submitting, you agree to be contacted by Kidrove regarding this workshop.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
