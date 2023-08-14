import mongoose from 'mongoose'
import { Schema } from 'mongoose'

const Theme = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
})

export default mongoose.model('Theme', Theme)
