import express from "express";
import { filmesService } from "../services/filmes.service.js";

const routeFilmes = express.Router();

routeFilmes.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;

  const filmesUpdate = frutasService.updatePatch(id, nome);

  if (!filmesUpdate) {
    return res
      .status(404)
      .json({
        message:
          "filme não encontrada, não foi possivel realizar a atualização.",
      });
  }

  res.json(filmesUpdate);
});

routeFilmes.put("/:id", (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;

  if (!nome) {
    return res
      .status(404)
      .json({ message: "Dados insuficientes, o campo nome é obrigatorio." });
  }

  const filmesUpdated = filmesService.updatePut(id, { nome });

  res.json(filmesUpdated);
});

export default routeFilmes;
