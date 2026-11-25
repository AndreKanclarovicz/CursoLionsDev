import dotenv from 'dotenv';
dotenv.config({});

import express from "express";
import conectarBanco from "./db.js";
conectarBanco();

import Pedido from "./models/pedidos.js";
import {valorUnitario, calcularValorTotal, desconto} from "./function.js";

const app = express();
const port = Number(process.env.PORT);

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Api Cantina!");
});

//create
app.post("/pedidos", async (req, res) => {
    try {
        const { nomeCliente, item, quantidade, formaPagamento, observacoes} = req.body;
        const unitario = valorUnitario(item);
        const total = calcularValorTotal(item, quantidade);
        const descto = desconto(quantidade, item);

        const dados = req.body;
        const novo_pedido = {
            nomeCliente: dados.nomeCliente,
            item: dados.item,
            quantidade: dados.quantidade,
            formaPagamento: dados.formaPagamento,
            observacoes: dados.observacoes,
            valorUnitario: unitario,
            valorTotal: total - descto,
        }
    
        const novoPedido = new Pedido(novo_pedido);
        await novoPedido.save();
        res.status(201).json(novoPedido);
    } catch (error) {
        res.status(400).json({ mensagem: `Erro ao criar pedido: ${error.message}` });
    }
});

//listar
app.get("/pedidos", async (req, res) => {
    try {
        const pedidos = await Pedido.find();
        res.status(200).json(pedidos);
    } catch (error) {
        res.status(400).json({ mensagem: `Erro ao buscar pedidos: ${error.message}` });
    }
});

//buscar
app.get("/pedidos/busca", async (req, res) => {
    try {
        const query = req.query.cliente;
        let filter = {};
        if (query) {
            filter = { nomeCliente: query };
        }
        const pedido = await Pedido.find(filter);
        res.status(200).json(pedido);
    } catch (error) {
        res.status(400).json({ mensagem: `Erro ao buscar pedido: ${error.message}` });
    }
});

//atualizar
app.patch("/pedidos/status/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const status= req.body.status;
        const pedido = await Pedido.findByIdAndUpdate(id, { status }, { new: true, runValidators: true });
        res.status(200).json(pedido);
    } catch (error) {
        res.status(400).json({ mensagem: `Erro ao atualizar pedido: ${error.message}` });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em ${port}`);
});