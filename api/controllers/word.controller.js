import Word from '../models/word.model.js'

const getRandomInRange = (min = 0, max) => {
  console.log(min, max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
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
      const RANDOM = 5
      const randomWords = []
      const words = await Word.find()

      if (id) {
        const wordsById = words.filter((word) => word?.topic_id === id)
        return res.json(wordsById)
      }

      console.log(words.length)

      for (let i = 0; i < RANDOM; i++) {
        const randomIndex = getRandomInRange(0, words.length)
        console.log(randomIndex)
        randomWords.push(words[randomIndex])
      }

      return res.json(randomWords)
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
