import dotenv from 'dotenv';
dotenv.config({});

import express from "express";
import conectarBanco from "./db.js";
conectarBanco();

import agendamento from "./models/agendamento.js";
import {servicoValor} from "./function.js";

const app = express();
const port = Number(process.env.PORT);

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Api PetShop CatDog!");
});

//create
app.post("/agendamentos", async (req, res) => {
    try {
        const { nomePet, especie, nomeDono, telefoneDono, servico, dataAgendamento} = req.body;
        const valor = servicoValor(servico, especie);

        const dados = req.body
        const novo_agendamento = {
            nomePet: dados.nomePet,
            especie: dados.especie,
            nomeDono: dados.nomeDono,
            telefoneDono: dados.telefoneDono,
            servico: dados.servico,
            dataAgendamento: dados.data,
            valor
        }
        console.log(novo_agendamento);

        const novoAgendamento = new agendamento(novo_agendamento);
        await novoAgendamento.save();
        res.status(201).json(novoAgendamento);
    } catch (error) {
        console.error(error)
        res.status(400).json({ mensagem: `Erro ao fazer o agendamento: ${error.mensagem}`})
    }
});

//listar
app.get("/agendamentos", async (req, res) => {
    try {
        const agendamentos = await agendamento.find();
        res.status(200).json(agendamentos);
    } catch (error) {
        res.status(400).json({ mensagem: `Erro ao buscar pedidos: ${error.message}` });
    }
});

//buscar
app.get("/agendamentos/busca", async (req, res) => {
    try {
        const query = req.query.pet;
        let filter = {};
        if (query) {
            filter = { nomePet: query };
        }
        const agendamentos = await agendamento.find(filter);
        res.status(200).json(agendamentos);
    } catch (error){
        console.error(error)
        res.status(400).json({ mensagem: `Erro ao buscar pedido: ${error.message}` });
    }
});

//atualizar
app.patch("/agendamentos/status/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const status = req.body.status;
        const agendamentos = await agendamento.findByIdAndUpdate(id, { status }, { new: true, runValidators: true });
        res.status(200).json(agendamentos);
    } catch (error) {
        console.error(error);
        res.status(400).json({ mensagem: `Erro ao atualizar agendamento: ${error.message}` });
    }
});

// Deletar
app.delete("/agendamentos/:id", async (req, res) => {
    try {
        const deletado = await agendamento.findByIdAndDelete(req.params.id);
        if (!deletado) {
            return res.status(404).json({ mensagem: "Agendamento não encontrado!" });
        }
        res.status(200).json({ mensagem: "Agendamento deletado com sucesso!" });
    } catch (error) {
        res.status(400).json({ mensagem: `Erro ao deletar agendamento: ${error.message}` });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em ${port}`);
});
