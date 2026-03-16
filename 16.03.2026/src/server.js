const express = require('express')
const app = express()
const port = 3000
let frutas = [
  {id: 1, nome: "Pietra", idade: "16"},
  {id: 2, nome: "Pedro", idade: "16"},
  {id: 3, nome: "Edio", idade: "13556"}
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