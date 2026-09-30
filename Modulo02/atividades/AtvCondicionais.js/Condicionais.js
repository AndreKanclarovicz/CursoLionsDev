import promptSync from "prompt-sync";
const prompt = promptSync();

// console.log(`Parte 0 - treino Rapido\n`);
// // 01
// console.log("01.");
// let idad = 20;
// if (idad >= 18) {console.log("Maior de idade.")}
// // 02
// console.log("02.");
// let nota = 5;
// if (nota >= 6){console.log("Aprovado.")
// } else {console.log("Reprovado.")}
// // 03
// console.log("03.");
// let numero = -4;
// if (numero > 0) {console.log("Positivo.")
// } else {console.log("Negativo.")}
// // 04
// console.log("04.");
// let numero7 = 7;
// if (numero7 % 2 === 0) {console.log("Par");
// } else {console.log("Ímpar.")}
// // 05
// console.log("05.");
// let a = 10;
// let b = 3;
// if (a > b) {console.log(`${a}`);
// } else {console.log(`${b}`);}
// // 06
// console.log("06.");
// let sald = 50;
// let prec = 80;
// if (sald >= prec) {console.log("Pode comprar.")
// } else {console.log("Não compre.");}
// // 07
// console.log("07.");
// let senha = 1234
// if (senha === 1234) {console.log("Acesso liberado");
// } else {console.log("Acesso negado")}
// // 08
// console.log("08.");
// let temCarteira = true;
// let idade8 = 19;
// if (temCarteira = true || idade8 >= 18) {console.log("Pode dirigir.")
// } else {console.log("Não pode dirigir.")}
// // 09
// console.log("09.");
// let dia = "sabado";
// if (dia = "sabado" && "domingo") {console.log("Fim de semana.")
// } else {console.log("Dia da semana")};
// // 10
// console.log("10.");
// let logado = false;
// if (logado !== true) {console.log("Faça login.")
// } else {console.log("Logado.")}

// console.log(`\nParte 1 - Complete o código\n`);
// console.log(`01. Maior de Idade\n`);

// let idade = Number(prompt("Sua idade: "));
// if (idade >= 18) {
// console.log("Acesso permitido.");
// } else {
// console.log("Acesso negado: menor de idade.");
// }

// console.log(`\n02. Aprovado, Recuperação ou Reprovado\n`);

// let media = Number(prompt("Média do aluno: "));
// if (media >= 7) {
// console.log("Aprovado");
// } else if (media >= 5 || media <= 7) {
// console.log("Recuperação");
// } else {
// console.log("Reprovado");
// }

// console.log(`\n03. Liberação de Compra\n`);

// let saldo = Number(prompt("Saldo: "));
// let preco = Number(prompt("Preço do produto: "));
// let negativado = prompt("Está negativado? (sim/nao): ");
// if (saldo >= preco && negativado !== "sim") {
// console.log("Compra aprovada!");
// } else {
// console.log("Compra negada.");
// }

// console.log(`\nParte 2 - Ache o bug\n`);
// console.log(`04. O = traiçoeiro\n`);

// let numer = 3;
// if (numer >= 10) { // faltou o sinal de ">"
// console.log("É maior ou igual a 10");
// } else {
// console.log("É menor que 10");
// }

// console.log(`05. Faixa quebrada\n`);

// let temp = 30;
// if (temp > 25) {
// console.log("Quente"); // foi trocado de lugar a condição
// } else if (temp > 0) {
// console.log("Acima de zero");
// } else {
// console.log("Frio");
// }

// console.log(`\nParte 3 - Prever a saída\n`);
// console.log(`06. Verdadeiro ou Falso?\n`);

// let a = 10;
// let b = 5;
// let ligado = true;
// console.log(a > b && b > 0); // (true)
// console.log(a < b || ligado); // (true)
// console.log(!ligado); // (false)
// console.log(a === "10"); // (false)
// console.log(a !== b && !false); // (true)

// console.log(`\nParte 4 - Escreva do zero\n`);
// console.log(`07. Classificador de IMC\n`);

// let peso = parseFloat(prompt("Qual o seu peso? "));
// let altura = parseFloat(prompt("Qual a sua altura? "));
// let imc = peso / (altura * altura);
// console.log(`${imc}`);
// if (imc < 18.5) {
//     console.log("Abaixo do peso");
// } else if ( imc >= 18.5 && imc <= 24.9) {
//     console.log("Peso normal");
// } else if (imc >= 25 && imc <= 29.9) {
//     console.log("Sobrepeso");
// } else {
//     console.log("Obesidade");
// }

console.log(`08. Portão da balada\n`);

let idade = Number(prompt("Bem vindo! Qual a sua idade? "));
let lista = (prompt("Nome na lista?(sim/nao) "));
if (idade < 18) {
    console.log("Entrada não permitida.")
} else if (idade >= 18 && lista === 'sim') {
    console.log("Bem vindo a área VIP!")
} else {
    console.log("Entrada liberada(área comum).")
}