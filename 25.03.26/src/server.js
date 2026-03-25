import express from 'express'
import route from './routes/filmes.routes.js'
const app = express()
const port = 3000

app.get('/', (req, res) => {
})

app.use('/filmes', route)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//DB > Service > Routes > server.js