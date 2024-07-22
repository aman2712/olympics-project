import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import userRoutes from './routes/userRoutes.js'
import gameRoutes from './routes/gameRoutes.js'
import playerRoutes from './routes/playerRoutes.js'
import hotelRoutes from './routes/hotelRoutes.js'
import miscRoutes from './routes/miscRoutes.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/users', userRoutes)
app.use('/api/games', gameRoutes)
app.use('/api/players', playerRoutes)
app.use('/api/hotels', hotelRoutes)
app.use('/api/misc', miscRoutes)

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server is up and listening on port ${port}`)
})