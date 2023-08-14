import mongoose from 'mongoose'
import { Schema } from 'mongoose'

const Word = new Schema({
  word: {
    en: {
      type: String,
      required: true,
    },
    ru: {
      type: String,
      required: true,
    },
  },
  transcription: {
    type: String,
    required: true,
  },
  sentences: [
    {
      en: {
        type: String,
        required: true,
      },
      ru: {
        type: String,
        required: true,
      },
    },
  ],
  topic_id: String,
  img: {
    type: String,
  },
})

export default mongoose.model('Word', Word)
