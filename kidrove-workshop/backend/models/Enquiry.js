const mongoose = require('mongoose')

const enquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email'],
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
      match: [/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian mobile number'],
    },
    workshop: {
      type: String,
      default: 'AI & Robotics Summer Workshop 2026',
    },
    status: {
      type: String,
      enum: ['new', 'contacted', 'enrolled', 'dropped'],
      default: 'new',
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Enquiry', enquirySchema)
