const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  date_uploaded: {
    type: Date,
    default: Date.now,
    required: true
  },
  date_modified: {
    type: Date,
    default: Date.now,
    required: true
  },
  tag: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Image', imageSchema)
