import promptSync from "prompt-sync";
const prompt = promptSync();

console.log("Lista de Código: Laços de Repetição\n");

console.log("Parte 0: Exercícios de fixação\n");

console.log("1. Contagem de 1 a 5:")
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.log("\n2. Contagem regressiva de 10 a 1:");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

console.log("\n3. Números pares de 0 a 10:");
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

console.log("\n4. Tabuada do 3:");
for (let i = 1; i <= 10; i++) {
  console.log(`3 x ${i} = ${3 * i}`);
}

console.log("\n5. Soma de 1 a 10:");
let soma5 = 0;
for (let i = 1; i <= 10; i++) {
  soma5 += i;
}
console.log("Total:", soma5);

console.log("\n6. Contagem de 1 a 5 com while:");
let contWhile = 1;
while (contWhile <= 5) {
  console.log(contWhile);
  contWhile++;
}

console.log("\n7. Contagem regressiva de 3 a 1 com while:");
let contRegressivo = 3;
while (contRegressivo >= 1) {
  console.log(contRegressivo);
  contRegressivo--;
}
console.log("Já!");

console.log("\n8. Repetição de texto:");
for (let i = 0; i < 3; i++) {
  console.log("LionsDev");
}

console.log("\n9. Múltiplos de 5 (1 a 20):");
for (let i = 5; i <= 20; i += 5) {
  console.log(i);
}

console.log("\n10. Teste do...while com condição false:");
do {
  console.log("Rodou");
} while (false);

console.log("Parte 1: Complete o código\n");
console.log("1. Contagem de 1 a 10")

for (let i = 0; i <= 10; i++) {
console.log(i);
}
// Saída esperada: 1, 2, 3, ... 10 (um por linha)

console.log("2. Soma dos Números")

let soma = 0;
for (let i = 1; i <= 100; i++) {
    soma += i;// TODO: acumule 'i' em 'soma'
}
console.log("Soma total:", soma);
// Saída esperada: Soma total: 5050

console.log("3. Contagem Regressiva")

let n = 5;
while (n > 0/* TODO: enquanto n for maior que 0 */) {
console.log(n);
n--;
// TODO: diminua n
}
console.log("Fim!");
// Saída: 5, 4, 3, 2, 1, Fim!

console.log("Parte 2: Ache o bug\n");
console.log("4. Loop Infinito")

let i = 0;
while (i < 5) {
console.log(i);
i++;// BUG: falta algo aqui
}

console.log("5. Fora do intervalo")

for (let i = 1; i <= 10; i++) { // BUG na inicialização e no limite = trocar o 0 por 1
console.log(`7 x ${i} = ${7 * i}`);
}
// Esperado: 7 x 1 = 7 ... 7 x 10 = 70

console.log("Parte 3: Prever a saída\n");
console.log("6. Quantas linhas e quais valores?")

for (let i = 0; i < 6; i += 2) {
console.log(i);
}
let k = 3;
do {
console.log("valor:", k);
k--;
} while (k > 3);
// saida é 0, 2, 4, valor: 3

console.log("Parte 4: Escreva do zero\n");
console.log("7. Média com Entrada Dinâmica")

let quantidadeNotas = parseInt(prompt("Quantas notas você vai digitar? "));
let somaNotas = 0;

for (let i = 1; i <= quantidadeNotas; i++) {
  const nota = parseFloat(prompt(`Digite a nota ${i}: `));
  somaNotas += nota;
}
let media = somaNotas / quantidadeNotas;
console.log(`Média: ${media}\n`);

console.log("8. Caça ao Número Secreto (Desafio)")

let numSecreto = 7;
let palpite;
let tentativas = 0;

do {
  palpite = parseInt(prompt("Palpite: "));
  tentativas++;

  if (palpite !== numSecreto) {
    console.log("Tente novamente");
  }
} while (palpite !== numSecreto);

console.log(`Você acertou! Tentativas: ${tentativas}`);