import Theme from '../models/theme.model.js'

class ThemeController {
  async create(req, res) {
    try {
      const { title, description, img } = req.body
      const post = await Theme.create({ title, description, img })
      res.json(post)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  async getAll(req, res) {
    try {
      const themes = await Theme.find()
      return res.json(themes)
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

      const theme = await Theme.findById(id)
      return res.json(theme)
    } catch (e) {
      res.status(500).json(e)
    }
  }
}

export default new ThemeController()
