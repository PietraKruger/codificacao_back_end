const express = require('express')
const app = express()
const port = 3000
let frutas = [
  {id: 1, nome: "Banana"},
  {id: 2, nome: "Maçã"},
  {id: 3, nome: "Laranja"}
]

app.get('/frutas/:id', (req, res) => {

  const id = parseInt(req.params.id)
  const fruta = frutas.find(a => a.id === id)
  if (!fruta){
    return res.status(404).json({
      sucess: false,
      message: 'fruta não encontrada'
    })
  }res.json({
    sucess: true,
    data: fruta
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})