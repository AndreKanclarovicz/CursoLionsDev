import promptSync from "prompt-sync";
const prompt = promptSync();

const anoAtual= 2026;
const nome = prompt("Qual o seu nome? ");
const idade = parseInt(prompt("Qual a sua idade? "));

const anoNascimento = anoAtual - idade;

console.log(`Nome : ${nome}`);
console.log(`Ano Nascimento: ${anoNascimento}`);

if (anoNascimento === anoAtual) {
    console.log("Ainda não fez aniversário.");
} else {
    console.log("Já fez aniversário.");
}

