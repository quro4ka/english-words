import express from 'express'
import WordController from '../controllers/word.controller.js'

const router = express.Router()

router.post('/words', WordController.create)
router.get('/words', WordController.getAll)

export default router
