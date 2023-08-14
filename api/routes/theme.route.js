import express from 'express'
import ThemeController from '../controllers/theme.controller.js'

const router = express.Router()

router.post('/themes', ThemeController.create)
router.get('/themes', ThemeController.getAll)
router.get('/themes/:id', ThemeController.getOne)

export default router
