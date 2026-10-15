import promptSync from "prompt-sync";
const prompt = promptSync();

// console.log(`1. Carrinho de Compras de E-commerce\n`);

// let carrinho = {
//     nomeCliente: prompt("Digite o nome do cliente: "),
//     assinatura: prompt("Digite o tipo de assinatura (prime/padrão): "),
//     listaPrecos: [],
// }

// for (let i = 0; i < 3; i++) {
//     carrinho.listaPrecos.push(parseFloat(prompt(`Preço do item ${i + 1}: R$ `)));
// }

// let totalCarrinho = carrinho.listaPrecos.reduce((total, preco) => total + preco, 0);

// if (totalCarrinho > 200 || carrinho.assinatura === "prime") {
//     carrinho.frete = true;
//     console.log(`O cliente ${carrinho.nomeCliente} tem frete grátis!`);
//     carrinho.valorFinal = totalCarrinho;
// } else { 
//     carrinho.frete = false;
//     carrinho.valorFrete = 30;
// }
// console.log(carrinho);
// console.log(`Valor total do carrinho: R$ ${totalCarrinho.toFixed(2)}`);

// console.log(`2. Tracker de Atletas Profissionais\n`);

// let registroAtletas = {
//     nome: prompt("Qual seu nome: "),
//     peso: parseFloat(prompt("Qual seu peso atual (kg): ")),
//     meta: prompt("Qual sua meta (Performance ou Emagrecimento): "),
//     kmCorridas: []
// }

// for (let i = 1; i <= 3; i++) {
//   registroAtletas.kmCorridas.push(parseFloat(prompt(`Distância da maratona ${i} (km): `)));
// }

// let corridaDistancia = parseFloat(prompt("Digite a distância da corrida de hoje(km): "));
// registroAtletas.kmCorridas.push(corridaDistancia);

// let ultimas3Corridas = registroAtletas.kmCorridas.slice(-3);
// let mediaDistancia = ultimas3Corridas.reduce((total, distancia) => total + distancia, 0) / ultimas3Corridas.length;
// let metaFormatada = registroAtletas.meta.toLowerCase();

// if (metaFormatada === "emagrecimento" && mediaDistancia > 20) {
//     registroAtletas.peso -= 1;
//     registroAtletas.selo = 'Meta Atingida';
// } else if (metaFormatada === "performance") {
//     let corridaAnterior = registroAtletas.kmCorridas[registroAtletas.kmCorridas.length - 2];
//     if (corridaDistancia > corridaAnterior) {
//         registroAtletas.selo = 'Novo Recorde Pessoal';
//     }
// }
// console.log(registroAtletas);

// console.log(`3. Programa de Milhas Aéreas\n`);

// let perfilVip = {
//     nome: prompt("Digite o nome do passageiro: "),
//     historicoVoos: [
//         {destino: "São Paulo", milhas: 1500},
//         {destino: "Rio de Janeiro", milhas: 1200},
//     ]
// };

// let novoVoo = {
//     destino: prompt("Digite o destino do novo voo: "),
//     milhas: parseInt(prompt("Digite a quantidade de milhas do novo voo: "))
// };

// perfilVip.historicoVoos.push(novoVoo);

// let totalMilhas = perfilVip.historicoVoos.reduce((total, voo) => total + voo.milhas, 0);

// if (totalMilhas > 5000) {
//     totalMilhas = totalMilhas - 5000;
//     perfilVip.saldoMilhas = totalMilhas;
//     perfilVip.categoria = "Platinum";
//     console.log(`Parabéns, ${perfilVip.nome}! Você atingiu a categoria Platinum!`);
// } else {
//     perfilVip.saldoMilhas = totalMilhas;
//     perfilVip.categoria = "Gold";
//     console.log(`Olá, ${perfilVip.nome}. Você está na categoria Gold. Faltam ${5000 - totalMilhas} milhas para atingir a categoria Platinum.`);
// }
// console.log(perfilVip);

console.log(`4. Sistema de Lanchonete de Fast Food\n`);

let pedido = {
    nomeCliente: prompt("Digite o nome do cliente: "),
    valorHamburguerPremium: 30.00,
    quantidade: parseInt(prompt("Digite a quantidade de lanches: ")),
    ingredientesExtras: []
};

let somaValorExtrasUnitario = 0;
while (true) {
  let nomeExtra = prompt("Digite o nome do ingrediente extra (ou 'fim' para encerrar): ");
  
  if (!nomeExtra || nomeExtra.toLowerCase() === "fim") {
    break;
  }
  
  let valorExtra = parseFloat(prompt(`Digite o valor do extra "${nomeExtra}": R$ `));
  
  pedido.ingredientesExtras.push({
    nome: nomeExtra,
    valor: valorExtra });
}

let somaExtrasUnitario = pedido.ingredientesExtras.reduce((soma, item) => soma + item.valor, 0);
let subtotalExtras = somaExtrasUnitario * pedido.quantidade;
let totalPedido = (pedido.valorHamburguerPremium + somaExtrasUnitario) * pedido.quantidade;

if (pedido.ingredientesExtras.length === 2 && pedido.quantidade > 2) {
    totalPedido = totalPedido * 0.8;
}
console.log("Cliente:", pedido.nomeCliente);
console.log("Quantidade de lanches:", pedido.quantidade);
console.log("Ingredientes extras adicionados:", pedido.ingredientesExtras);
console.log("Subtotal dos extras: R$", subtotalExtras.toFixed(2));
console.log("Total a pagar: R$", totalPedido.toFixed(2));