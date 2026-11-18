
import dotenv from "dotenv";
dotenv.config();

import express from "express";

import conectarBanco from "./database.js";
conectarBanco();

import Contato from "./models/contatos.js";

const app = express();
const port = Number(process.env.PORT);

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Contatos!");
});

app.post("/contatos", async (req, res) => {
    try {
        const dados = req.body;
        const novo_contato = {
            nome: dados.nome,
            email: dados.email,
            telefone: dados.telefone,
        };
        const contato = await Contato.create(novo_contato);
        res.status(201).json(contato);
    } catch (error) {
        res.status(400).json({ mensagem: `Erro ao cadastrar contato: ${error.message}` });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em ${port}`);
});