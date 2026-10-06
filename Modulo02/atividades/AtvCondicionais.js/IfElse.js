import promptSync from "prompt-sync";
const prompt = promptSync();

// console.log(`\n01. Margem de lucro\n`);

// let custo = parseFloat(prompt("Qual o custo de produção do lote? R$:"));
// let venda = parseFloat(prompt("Qual valor de venda do lote? R$: "));

// const bruto = venda - custo;
// if (bruto < 500) {
//     console.log("Atenção: Margem de lucro perigosamente baixa")
// } else {
//     console.log(`Margem de lucro saudável: R$ ${bruto}`)
// }

// console.log(`\n02. Orçamento de projetos\n`);

// let horas = parseFloat(prompt("Qual a quantidade de horas trabalhadas? "));
// let ong = parseFloat(prompt("Faz parte de uma ONG?(sim/nao) R:"));
// let valor = 45.00;
// let total = valor * horas;

// if (total > 5.000 || ong === 'sim') {
//     const desconto= total * 0.90
//     console.log(`Valor final com desconto: ${desconto}`)
// } else {
//     console.log(`Valor sem desconto: R$:${total}`)
// }

// console.log(`\n03. Rendimento de Fundos Imobiliários\n`);

// let cotas = parseFloat(prompt("Qual a quantida de cotas? R:"));
// let valor = parseFloat(prompt("Qual o valor do dividendo por cotas? R:"));
// let rendimento = valor * cotas;

// if (rendimento >= 100) {
//     console.log("Você já tem saldo suficiente para comprar uma nova cota e reinvestir!")
// } else {
//     console.log(`Rendimento recebido: R$${rendimento}. Acumule mais para reinvestir.`)
// }

// console.log(`\n04. Consumo de Automóvel\n`);

// let km = parseFloat(prompt("Qual a distância percorrida? R:"));
// let litros = parseFloat(prompt("Quantidade de combustível consumido(em litros)? R:"));
// let consumo = km / litros;
// if (consumo < 10) {
//     console.log("Alerta: Veículo consumindo muito combustível. Necessário agendar revisão mecânica.")
// } else {
//     console.log("Consumo dentro do padrão operacional.")
// }

// console.log(`\n05. Análise de Risco de Crédito Bancário\n`);

// let salario = parseFloat(prompt("Qual o seu salário líquido? R:"));
// let parcela = parseFloat(prompt("Qual o valor da parcela do empréstismo desejado? R:"));
// let restricao = (prompt("O cliente possui restrição no nome?(sim/nao) R:"));
// let limite = salario * 0.30;

// if (parcela <= limite && restricao === 'nao') {
//     console.log("Crédito Aprovado!");
// } else if (parcela > limite || restricao === 'sim') {
//     console.log("Crédito Negado: Parcela acima do limite ou restrição no CPF.")
// };

// console.log(`\n06. Gestão de Ponto e Horas Extras\n`);

// let valorHora = parseFloat(prompt("Qual o valor ganho por hora? R:"));
// let horaExtra = parseFloat(prompt("Qual a quantidade de horas extras? R:"));
// let calcHoraExtra = horaExtra *(valorHora * 1.5);

// console.log(`O valor a receber de horas extras este mês é: R$${calcHoraExtra}`);

// console.log(`\n07. Alerta de Reposição de Estoque\n`);

// let quantProduto = parseFloat(prompt("Qual a quantidade atual do produto? R:"));
// let quantMinima = parseFloat(prompt("Qual a quantidade miníma para esse produto? R:"));
// let calcProduto = quantMinima - quantProduto

// if (quantProduto < quantMinima) {
//     console.log(`Alerta: Estoque baixo! É necessário solicitar a compra de ${calcProduto} unidades".`)
// } else ("Estoque regularizado.")

// console.log(`\n08. Cálculo de Frete Logístico\n`);

// let km = parseFloat(prompt("Qual a distância(km) ate o cliente? R:"));
// let risco = (prompt("A entrega é considerada de risco ou urgente?(sim/nao) R:"));
// let taxaFixa = 20.00;
// let precoKm = 1.50;
// let calcFrete = taxaFixa + (km * precoKm);
// let urgente = risco === 'sim';

// if (km > 100 || urgente) {
//     calcFrete += 15.00;
// }
// console.log(`Valor do frete: R$${calcFrete.toFixed(2)}.`);

// console.log(`\n9. Sistema de Comissão de Vendas\n`);

// let valorVendas = parseFloat(prompt("Qual o valor de total de vendas que realizou esse mês? R:"));
// let comissao
// if (valorVendas >= 20000.00) {
//     valorVendas = valorVendas * 0.05
// } else (valorVendas < 20.000)
//     valorVendas = valorVendas * 0.02
// console.log(`Valor da comissão: R$${valorVendas}.`);

console.log(`\n10. Multa por Atraso no Condomínio.\n`);

