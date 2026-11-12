import express from "express";
import contatos from "./contatos.js";
import removeContato from "./excluir_contatos.js";
import adicionarContato from "./criar_contato.js";
import atualizarContato from "./atualizar_contatos.js";

const app = express();
const port = 3000;

app.use(express.json());

function validaId(req, res, next) {
  const id = parseInt(req.params.id);

    if (Number.isNaN(id)) {
    return res.status(400).send("id tem que ser um numero");
  }

  next();
}

app.get("/contatos", (req, res) => {
  res.status(200).json(contatos);
});

app.get("/contatos/:id", validaId, (req, res) => {
  const id = parseInt(req.params.id);

  const contato = contatos.find((contato) => contato.id === id);

  if (!contato) {
    return res.status(404).send("Contato não encontrado");
  }

  res.json(contato);
});

app.post("/contatos", (req, res) => {
  const novoContato = req.body;

  const criado = adicionarContato(contatos, novoContato);

  if (!criado) {
    return res.status(400).send("Erro ao adicionar contato");
  }

  res.status(201).send("Contato adicionado com sucesso");
});

app.delete("/contatos/:id", validaId, (req, res) => {
  const id = parseInt(req.params.id);

  const excluido = removeContato(contatos, id);

  if (!excluido) {
     res.status(400).send("Contato não encontrado");
  }
  
  res.status(200).send("Contato removido com sucesso");
});

app.put("/contatos/:id", validaId, (req, res) => {
  const contatoAtualizado = req.body;
  const id = parseInt(req.params.id);

  const atualizado = atualizarContato(contatos, id, contatoAtualizado);

  if (!atualizado) {
    return res.status(400).send("Email ou ID não existe");
  }

  res.status(200).send("Contato atualizado com sucesso");
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});