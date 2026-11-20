// Parte 0: Exercícios de fixação

//1.
const express = require('express');
const app = express();
app.listen(3000)

//2.
app.use(express.json());

//3.
app.get('/', (req, res) => {
  res.send('API no ar!');
});

//4.
app.get('/ping', (req, res) => {
    res.send('pong');
});

//5.
app.post('/produtos', (req, res) => {
    console.log(req.body);
    res.status(201).send();
});

//6.
app.get('/produtos/:id', (req, res) => {
    console.log(req.params.id);
    res.send();
});

//.7
res.status(201).send({ mensagem: "Criado com sucesso", dados: req.body });

//8.
res.status(400).json({ erro: "Não encontrado" });

//9.
if (!req.body.nome){
    return res.status(400).json({ erro: "Campo 'nome' é obrigatório" });
}

//10.
app.get('/produtos/:id', (req, res) => {
    const id = Number(req.params.id);
    return res.json({id});
});

//Parte 1: Complete o código
const produtos = [{ id: 1, nome: "Mouse" }];
app.get("/produtos", (req, res) => {
    // TODO: responda status 200 com o array "produtos"
    res.status(200).json(produtos);
});

//2. Rota de criação
app.post("/produtos", (req, res) => {
const { nome, preco } = req.body;
/* TODO: nome OU preco não enviados */
if (!nome || !preco) {
return res.status(400).send({ erro: "nome e preco são obrigatórios" });
}
const novo = { id: produtos.length + 1, nome, preco };
produtos.push(novo);
// TODO: responda status 201 com o novo produto
res.status(201).json(novo);
});

//3. Rota por ID
app.get("/produtos/:id", (req, res) => {
const id = Number(req.params.id);
const produto = produtos.find((p) => p.id === id);
if (!produto) {
// TODO: responda 404 com mensagem
return res.status(404).json({ erro: "Produto não encontrado" });
}
// TODO: responda 200 com o produto
res.status(200).json(produto);
});

//Parte 2: Ache o bug

//4. req.body vazio

const app = express();
// ??? -> faltou algo aqui
app.use(express.json());
app.post("/itens", (req, res) => {
console.log(req.body); // undefined
res.send("ok");
});

//5. Sem status de erro
app.get("/itens/:id", (req, res) => {
const item = itens.find((i) => i.id === Number(req.params.id));
if (!item) {
res.send({ erro: "não encontrado" }); // BUG: falta status e falta return
return res.status(404).json({ erro: "Item não encontrado" });
}
res.send(item);
});

//Parte 3: Prever o comportamento

//6. Qual a resposta?
app.get("/usuarios/:id", (req, res) => {
const u = usuarios.find((x) => x.id === Number(req.params.id));
if (!u) return res.status(404).send({ erro: "não encontrado" });
res.status(200).send(u);
});
//(a) GET /usuarios/1 = "Ana"
//(b) GET /usuarios/9 = { erro: "não encontrado" }

//Parte 4: Escreva do zero

//7. API de Tarefas (Desafio)
const express = require("express");
const app = express();
app.use(express.json());

let tarefas = [];
let proximoId = 1;

app.get("/tarefas", (req, res) => {
    res.status(200).json(tarefas);
});

app.get("/tarefas/:id", (req, res) => {
    const id = Number(req.params.id);
    const tarefa = tarefas.find((t) => t.id === id);
    if (!tarefa) {
        return res.status(404).json({ erro: "Tarefa não encontrada" });
    }
    return res.status(200).json(tarefa);
});

app.post("/tarefas", (req, res) => {
    const { titulo, concluida } = req.body;
    if (!titulo || typeof concluida !== "string" || titulo.trim() === "") {
        return res.status(400).json({ erro: "Título e concluída são obrigatórios" });
    }
    const novaTarefa = { id: proximoId++, titulo, concluida };
    tarefas.push(novaTarefa);
    return res.status(201).json(novaTarefa);
});

app.put("/tarefas/:id", (req, res) => {
    const id = Number(req.params.id);
    const tarefaIndex = tarefas.findIndex((t) => t.id === id);
    if (tarefaIndex === -1) {
        return res.status(404).json({ erro: "Tarefa não encontrada" });
    }
    const tarefa = tarefas[tarefaIndex];
    const { titulo, concluida } = req.body;
    if (titulo !== undefined) {
        if (typeof titulo !== "string" || titulo.trim() === "") {
            return res.status(400).json({ erro: "Título inválido" });
        }
        tarefa.titulo = titulo.trim();
    }
    if (concluida !== undefined) {
        tarefa.concluida = Boolean(concluida);
    }
    return res.status(200).json(tarefa);
});

app.delete("/tarefas/:id", (req, res) => {
    const id = Number(req.params.id);
    const indice = tarefas.findIndex((t) => t.id === id);
    if (indice === -1) {
        return res.status(404).json({ erro: "Tarefa não encontrada" });
    }
    tarefas.splice(indice, 1);
    return res.status(200).json({ mensagem: "Tarefa deletada com sucesso" });
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});