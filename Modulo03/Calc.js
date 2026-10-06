import promptSync from "prompt-sync";
const prompt = promptSync();

console.log("========== CALCULADORA ==========")

function adicao(a, b) {
    return a + b;
}
function subtracao(a, b) {
    return a - b;
}
function multiplicacao(a, b) {
    return a * b;
}
function divisao(a, b) {
    return a / b;
}

function calcular(a, operacao, b) {
    switch (operacao) {
        case '+':
            return adicao(a, b);
        case '-':
            return substracao(a, b);
        case '*':
            return multiplicacao(a, b);
        case '/':
            return divisao(a, b);
        default:
            console.log("Digite operador correto.")
    }
}


const n1 =prompt("Qual o primeiro numero: ");
const operacao =prompt("Qual operação? ");
const n2 =prompt("Qual o segundo numero: ");

const num1 = parseFloat(n1);
const num2 = parseFloat(n2);

if (isNaN(num1) || isNaN(num2)) {
         console.log("Da proxima vez digite um número válido!");
     } else {
         const resultado = calcular(num1, operacao, num2);
         console.log(`\nResultado: ${resultado}`);
     }
