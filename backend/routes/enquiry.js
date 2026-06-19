const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const { validateEnquiry } = require('../middleware/validate')

// Lazy-load model so the file can be imported even without Mongoose connected
let Enquiry
function getModel() {
  if (!Enquiry) Enquiry = require('../models/Enquiry')
  return Enquiry
}

/**
 * POST /api/enquiry
 * Accept a workshop enquiry, validate, and persist (if MongoDB is connected).
 */
router.post('/', validateEnquiry, async (req, res) => {
  const { name, email, phone } = req.validatedBody

  const mongoConnected =
    mongoose.connection.readyState === 1 // 1 = connected

  if (mongoConnected) {
    try {
      const Model = getModel()

      // Prevent duplicate enquiries from the same email
      const existing = await Model.findOne({ email })
      if (existing) {
        return res.status(409).json({
          success: false,
          message: `An enquiry from ${email} already exists. Our team will reach out soon!`,
        })
      }

      const enquiry = await Model.create({ name, email, phone })

      return res.status(201).json({
        success: true,
        message: `Thank you, ${name}! We've received your enquiry and will contact you within 24 hours.`,
        data: {
          id: enquiry._id,
          name: enquiry.name,
          email: enquiry.email,
          createdAt: enquiry.createdAt,
        },
      })
    } catch (err) {
      console.error('DB error on enquiry save:', err)
      return res.status(500).json({
        success: false,
        message: 'Failed to save your enquiry. Please try again.',
      })
    }
  }

  // ── In-memory fallback (no MongoDB) ──────────────────────────────────────
  console.log('📋 New enquiry (not persisted):', { name, email, phone })
  return res.status(201).json({
    success: true,
    message: `Thank you, ${name}! We've received your enquiry and will contact you within 24 hours.`,
    data: { name, email },
  })
})

/**
 * GET /api/enquiry
 * List all enquiries — useful for admin/testing.
 * In production, protect this route with auth middleware.
 */
router.get('/', async (req, res) => {
  const mongoConnected = mongoose.connection.readyState === 1

  if (!mongoConnected) {
    return res.status(503).json({
      success: false,
      message: 'MongoDB not connected. No enquiries to list.',
    })
  }

  try {
    const Model = getModel()
    const enquiries = await Model.find().sort({ createdAt: -1 }).limit(100)
    res.json({ success: true, count: enquiries.length, data: enquiries })
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to fetch enquiries.' })
  }
})

module.exports = router
