import express from 'express'
import TopicController from '../controllers/topic.controller.js'

const router = express.Router()

router.post('/topics', TopicController.create)
router.get('/topics', TopicController.getAll)

export default router
