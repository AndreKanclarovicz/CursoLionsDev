import promptSync from "prompt-sync";
const prompt = promptSync();

const prova1 = parseFloat(prompt("Qual a nota da primeira prova? "));
const prova2 = parseFloat(prompt("Qual a nota da segunda prova? "));

const notas = [];
notas.push(prova1);
notas.push(prova2);

const media = (notas[0] + notas[1]) / notas.length;
console.log(`A média é: ${media}`);
console.table(notas);