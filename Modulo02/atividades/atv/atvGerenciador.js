import promptSync from "prompt-sync";
const prompt = promptSync();

let listaTarefas = [];

const tarefa1 = prompt("Tarefa 1: ");
listaTarefas.push(tarefa1);

const tarefa2 = prompt("Tarefa 2: ");
listaTarefas.push(tarefa2);

const tarefa3 = prompt("Tarefa 3: ");
listaTarefas.push(tarefa3);

console.table(listaTarefas);

console.log(`Você tem ${listaTarefas.length} tarefas na sua lista.`);
listaTarefas.pop();

console.table(listaTarefas);