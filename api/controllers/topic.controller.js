import Topic from '../models/topic.model.js'

class TopicController {
  async create(req, res) {
    try {
      const { title, description, img } = req.body
      const post = await Topic.create({ title, description, img })
      res.json(post)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  async getAll(req, res) {
    try {
      const topics = await Topic.find()
      return res.json(topics)
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

      const topic = await Topic.findById(id)
      return res.json(topic)
    } catch (e) {
      res.status(500).json(e)
    }
  }
}

export default new TopicController()
