import express from 'express';
import {filmesService } from '../services/filmes.service.js';

const route = express.Router()

route.get("/", (req, res) => {
    res.json(filmesService.getAll())
})

route.get('/:id', (req, res) => {

  const {id} = req.params.id
  const filmes = filmesService.getById(id)
  if (!filmes){
    return res.status(404).json({
      sucess: false,
      message: 'filme não encontrado;('
    })
  }res.json({
    sucess: true,
    data: filmes
  })
})

export default route