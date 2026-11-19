import dotenv from "dotenv";

// Carregar configurações de variaveis de ambiente (.env da pasta onde ex)
dotenv.config({});

import express from "express";
import conectarBanco from "./database.js";
conectarBanco();

import Contato from "./models/contatos.js";

// Conectar ao banco de dados
conectarBanco();

const app = express();
const port = Number(process.env.PORT);

// Middlaware para o Express entender Json no corpo das requisições
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Contatos!");
});

app.get("/contatos", async (req, res) => {
    const todos_contatos = await Contato.find();
    res.status(200).json(todos_contatos);
});

//listar o contato da agenda pelo ID
app.get("/contatos/:id", async (req, res) => {
    try {
        const contato = await Contato.findById(req.params.id);
        if (!contato) {
            return res.status(404).json({ mensagem: "Contato não encontrado!" });
        }
        res.status(200).json(contato);
    } catch (error) {
        res.status(400).json({ mensagem: `Erro ao buscar contato: ${error.message}` });
    }
});

// Atualizar o contato da agenda pelo ID
app.put("/contatos/:id", async (req, res) => {
        try {
            const atualizado = await Contato.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
            if (!atualizado) {
                return res.status(404).json({ mensagem: "Contato não encontrado!" });
            }
            res.status(200).json({baralho: atualizado});
        } catch (error) {
            res.status(400).json({ mensagem: `Erro ao atualizar contato: ${error.message}` });
        }
});

// Deletar o contato da agenda pelo ID
app.delete("/contatos/:id", async (req, res) => {
    try {
        const deletado = await Contato.findByIdAndDelete(req.params.id);
        if (!deletado) {
            return res.status(404).json({ mensagem: "Contato não encontrado!" });
        }
        res.status(200).json({ mensagem: "Contato deletado com sucesso!" });
    } catch (error) {
        res.status(400).json({ mensagem: `Erro ao deletar contato: ${error.message}` });
    }
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
        if (error.code === 11000) {
                res.status(409).json({ mensagem: "Erro: Email já cadastrado!" });
            } else {
                res.status(400).json({ mensagem: `Erro ao cadastrar contato: ${error.message}` });
            }
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em ${port}`);
});