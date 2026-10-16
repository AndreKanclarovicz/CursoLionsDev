import promptSync from "prompt-sync";
const prompt = promptSync();

console.log("Exercícios: Estrutura de Repetição\n");

console.log("1. Autenticação de Cofre Digital\n");

let senha = "1234";

let tentativa = prompt("Digite a senha: ");

while (tentativa !== senha) {
  console.log("Acesso negado: Senha incorreta");
  tentativa = prompt("Digite a senha: ");
}
console.log("Cofre liberado com sucesso.");

console.log("2. Calibração de Sensores Industriais\n");

let tempAtual = parseFloat(prompt("Informe o valor de temperatura inicial: "));
for (let i = 1; i <= 5; i++) {
  tempAtual += 2;
  console.log(`Temperatura calibrada ${i}: ${tempAtual}°C`);
}

console.log("3. Totem de Pedidos Contínuos\n");

let totalPedidos = 0;
let continuar;

let lanche = prompt("Digite o nome do lanche: ");
let valorLanche = parseFloat(prompt(`Digite o valor do ${lanche} (R$): `));
do {
    let valorItem = parseFloat(prompt("Digite o valor do item a ser adicionado (R$): "));
    totalPedidos += valorItem;
    continuar = prompt("Deseja adicionar mais itens? (sim/nao): ");
} while (continuar === "sim");
let total = valorLanche + totalPedidos;
console.log(`Valor total a pagar: R$ ${total.toFixed(2)}`);

console.log("4. Atualização de Salários no RH\n");

let salarioAtual = [2500, 3200, 4100, 5000, 6200];

for (let i = 0; i < salarioAtual.length; i++) {
  let aumento = salarioAtual[i] * 0.1;
  let novoSalario = salarioAtual[i] + aumento;
  console.log(`Salário atual: R$ ${salarioAtual[i].toFixed(2)}`);
  console.log(`O salário com reajuste: R$ ${novoSalario.toFixed(2)}`);
}

console.log("5. Carregamento de Frota Logística\n");

let capacidadeMaxima = 1000;
let peso = 0;
let caixa = 0;

while (true) {
    let pesoCaixa = parseFloat(prompt("Qual o peso da caixa (kg): "));
    if (peso + pesoCaixa > capacidadeMaxima) {
        console.log("Capacidade máxima atingida. Não é possível adicionar mais caixas.");
        break;
    }
    peso += pesoCaixa;
    caixa++;
}
console.log(`Peso total carregado: ${peso} kg`);
console.log(`Número de caixas carregadas: ${caixa}`);

console.log("6. Desafio Final: Fechamento de Caixa do E-commerce\n");

let carrinhos = [
    {cliente: "João", precos: [120, 80, 50] },
    {cliente: "Jurema", precos: [50, 250] },
    {cliente: "Jurandir", precos: [500, 100, 440]}
];

let clientesConcluidos = [];

for (let i = 0; i < carrinhos.length; i++) {
    let carrinhoAtual = carrinhos[i];
    let totalDevido = 0;

for (let j = 0; j < carrinhoAtual.precos.length; j++) {
    totalDevido += carrinhoAtual.precos[j];
  }

console.log(`\nCarrinho de: ${carrinhoAtual.cliente}`);
console.log(`Total devido: R$ ${totalDevido.toFixed(2)}`);

let totalRecebido = 0;

while (totalRecebido < totalDevido) {
    let restante = totalDevido - totalRecebido;
    let pagamento = parseFloat(prompt(`Informe o valor pago (Faltam R$ ${restante.toFixed(2)}): R$ `));
    totalRecebido += pagamento;
  }

  if (totalRecebido > totalDevido) {
    let troco = totalRecebido - totalDevido;
    console.log(`Troco: R$ ${troco.toFixed(2)}`);
  }

  clientesConcluidos.push(carrinhoAtual.cliente);
  console.log(`Pagamento de ${carrinhoAtual.cliente} concluído com sucesso!`);
}

console.log("Clientes com pagamentos concluídos com sucesso:");
for (let k = 0; k < clientesConcluidos.length; k++) {
  console.log(`- ${clientesConcluidos[k]}`);
}