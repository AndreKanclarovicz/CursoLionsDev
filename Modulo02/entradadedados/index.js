import promptSync from "prompt-sync";
const prompt = promptSync();


let nomePet = prompt("Qual é o nome do seu pet? R: ");
let idadePet = prompt("Qual é a idade do seu pet? R: ");
console.log(`O ${nomePet} tem ${idadePet} anos!`);