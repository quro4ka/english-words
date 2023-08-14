import Word from '../models/word.model.js'

class WordController {
  async create(req, res) {
    try {
      const { word, transcription, sentences, topic_id, img } = req.body
      const post = await Word.create({ word, transcription, sentences, img, topic_id })
      res.json(post)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  async getAll(req, res) {
    try {
      const { id } = req.query
      const words = await Word.find()
      const wordsById = words.filter((word) => word?.topic_id === id)
      return res.json(wordsById)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params

      if (!id) {
        res.status(400).json({ message: 'id not found' })
      }

      const word = await Word.findById(id)
      return res.json(word)
    } catch (e) {
      res.status(500).json(e)
    }
  }
}

export default new WordController()
