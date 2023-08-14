import mongoose from 'mongoose'
import { Schema } from 'mongoose'

const Topic = new Schema({
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

export default mongoose.model('Topic', Topic)
