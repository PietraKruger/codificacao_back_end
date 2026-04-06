import express from "express";
import route from "./routes/filmes.routes.js";
const app = express();
const port = 3000;

app.use(express.json())

app.get('/' , (req,res) =>{
  res.json("filmes")
})

app.use("/filmes", filmesRoutes)


app.listen(port, () => {
  console.log('Example app listening on port ${port}')
})