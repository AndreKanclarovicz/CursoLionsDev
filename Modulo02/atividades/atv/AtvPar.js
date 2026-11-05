import promptSync from "prompt-sync";
const prompt = promptSync();

let num1 = parseInt(prompt("Digite um número: "));

if (num1 === 0) {
    console.log(`Esse número é 0.`);
} else if (num1 % 2 == 0) {
    console.log(`Esse número é par.`);
} else {
    console.log(`Esse número é ímpar.`);
}