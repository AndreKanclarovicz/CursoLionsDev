import promptSync from "prompt-sync";
const prompt = promptSync();

const nome=prompt("Qual seu nome? ")
const idade =parseInt(prompt("Qual sua idade? "));

if (idade >= 18) {
    console.log(`${nome} Você é maior de idade!`);
} else {
    const idadeMenor = 18 - idade;
    console.log(`${nome} Você é menor de idade, e falta ${idadeMenor} anos para ser maior de idade.`);
}