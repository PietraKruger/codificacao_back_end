const express = require('express')
const app = express()
const port = 3000
let alunos = [
  {id: 1, nome: "Pietra", idade: "16"},
  {id: 2, nome: "Pedro", idade: "16"},
  {id: 3, nome: "Edio", idade: "13556"}
]

app.get('/alunos/:id', (req, res) => {

  const id = parseInt(req.params.id)
  const aluno = alunos.find(a => a.id === id)
  if (!aluno){
    return res.status(404).json({
      sucess: false,
      message: 'aluno não encontrado'
    })
  }res.json({
    sucess: true,
    data: aluno
  })
})

app.post('/alunos' , (req, res) => {
  const {nome,idade} = req.body
  if ( !nome || idade){
    return res.status(404).json({
      sucess: false,
      message: 'nome e idade são obrigatórios'
    })
  }
  const novoAluno = {
    id: alunos.length + 1,
    nome,
    idade
  }
  aluno.push(novoAluno)
  res.status(204).json({
    sucess: true,
    data: novoAluno,
    message: 'certo'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})