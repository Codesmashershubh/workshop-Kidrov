const mongoose = require('mongoose')

async function connectDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    })
    console.log(`✅ MongoDB connected: ${conn.connection.host}`)
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err.message)
    console.log('   The API will still work but enquiries will not be persisted.')
  }
}

module.exports = connectDB
