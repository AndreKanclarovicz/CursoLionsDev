//importar a biblioteca prompt-sync para receber entradas
// declarar variável para a nota 1, convertendo para float com parsefloat()
// declarar variável para a nota 2, convertendo para float com parsefloat()
// criar uma variável para calcular e armazenar a média aritmética
// imprimir a mensagem final exibindo o resultado da méida

import promptSync from "prompt-sync";
const prompt = promptSync();

let nota1 = parseFloat(prompt("Qual a nota 1? R: "));
let nota2 = parseFloat(prompt("Qual a nota 2? R: "));

let media = (nota1 + nota2) / 2;
console.log(`A media da sua nota é ${media}!`);