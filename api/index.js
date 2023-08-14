import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import themeRouter from './routes/theme.route.js'
import topicRouter from './routes/topic.route.js'
import wordRouter from './routes/word.route.js'

const PORT = 5000
const DB_URL = `mongodb+srv://quro4ka:quro4ka@cluster0.jmdk3r1.mongodb.net/?retryWrites=true&w=majority&dbname=english-words`

const app = express()

app.use(express.json())
app.use(
  cors({
    origin: `http://localhost:3000`,
    credentials: true,
  }),
)

app.use('/api', themeRouter)
app.use('/api', topicRouter)
app.use('/api', wordRouter)

const startApp = async () => {
  try {
    await mongoose.connect(DB_URL)
    app.listen(PORT, () => {
      console.log('server started!')
    })
  } catch (e) {
    console.log(e)
  }
}

startApp()
