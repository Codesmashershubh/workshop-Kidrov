/**
 * Validates the enquiry request body.
 * Runs server-side regardless of any client-side validation.
 */
function validateEnquiry(req, res, next) {
  const { name, email, phone } = req.body
  const errors = {}

  // Name
  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    errors.name = 'Full name is required (min 2 characters).'
  }

  // Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
    errors.email = 'A valid email address is required.'
  }

  // Phone — 10-digit Indian mobile number starting with 6-9
  const phoneDigits = typeof phone === 'string' ? phone.replace(/\s/g, '') : ''
  if (!phoneDigits || !/^[6-9]\d{9}$/.test(phoneDigits)) {
    errors.phone = 'A valid 10-digit Indian mobile number is required.'
  }

  if (Object.keys(errors).length > 0) {
    return res.status(422).json({
      success: false,
      message: 'Validation failed. Please check the fields below.',
      errors,
    })
  }

  // Sanitise and attach to request
  req.validatedBody = {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    phone: phoneDigits,
  }

  next()
}

module.exports = { validateEnquiry }
