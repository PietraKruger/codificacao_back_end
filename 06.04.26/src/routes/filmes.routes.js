import express from 'express'
import { frutasService } from '../services/filmes.service.js'

const routeFilme = express.Router()

routeFilme.patch("/:id", (req, res) => {
    const { id } = req.params;
    const { nome } = req.body;

    const filmeUpdate = frutasService.updatePatch(id, nome);

    if (!frutaUpdate) {
        return res.status(404).json({ message: "Fruta não encontrada, não foi possivel realizar a atualização." })
    }

    res.json(frutaUpdate)

});

routeFrutas.put("/:id", (req, res) => {
    const { id } = req.params;
    const { nome } = req.body;

    
    if (!nome) {
        return res.status(404).json({ message: "Dados insuficientes, o campo nome é obrigatorio." })
    }

    const frutaUpdated = frutasService.updatePut(id, {nome});
    
    res.json(frutaUpdated)

});

export default routeFrutas