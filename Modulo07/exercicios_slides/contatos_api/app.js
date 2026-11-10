import express from "express";
import contatos from "./contatos.js";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/contatos", (req, res) => {
  res.status(200).json(contatos);
});

app.get("/contatos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const contato = contatos.find((c) => c.id === id);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});