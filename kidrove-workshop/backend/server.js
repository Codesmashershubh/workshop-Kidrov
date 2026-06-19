require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
const enquiryRoutes = require('./routes/enquiry')

const app = express()
const PORT = process.env.PORT || 5000

// ── Connect to MongoDB (optional) ──────────────────────────────────────────
if (process.env.MONGO_URI) {
  connectDB()
} else {
  console.log('ℹ️  MONGO_URI not set — running without MongoDB (in-memory mode)')
}

// ── Middleware ──────────────────────────────────────────────────────────────
app.use(cors({
  origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}))

app.use(express.json())

// ── Routes ──────────────────────────────────────────────────────────────────
app.use('/api/enquiry', enquiryRoutes)

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// 404 fallback
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found.' })
})

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err)
  res.status(500).json({ success: false, message: 'Internal server error.' })
})

// ── Start ───────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})
