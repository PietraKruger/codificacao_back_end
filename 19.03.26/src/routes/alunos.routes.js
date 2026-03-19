import express from 'express';
import {alunoService, AlunoService} from '../services/aluno.service.js';

const route = express.Router()

route.get("/", (req, res) => {
    const data = alunoService.getAll()
    res.json(data)
})