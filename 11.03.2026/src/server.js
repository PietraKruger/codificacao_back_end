const express = require('express')
const app = express()
const port = 3000
let alunos = [
  {id: 1, nome: "Pietra", idade: "16"},
  {id: 2, nome: "Pedro", idade: "16"},
  {id: 3, nome: "Edio", idade: "13556"}
]
let frutas = [
  {id: 1, nome: "banana"},
  {id: 2, nome: "laranja"},
  {id: 3, nome: "maçã"}
]

app.get('/', (req, res) => {
  res.send('oi')
})

app.get('/alunos/getAll', (req, res) => {
res.json({
sucess:true,
data:alunos
})
})

app.get('/frutas/getAll', (req, res) => {
res.json({
sucess:true,
data:frutas
})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})