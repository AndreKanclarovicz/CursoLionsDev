import promptSync from "prompt-sync";
const prompt = promptSync();

console.log(`1. Carrinho de Compras de E-commerce\n`);

let carrinho = {
    nomeCliente: prompt("Digite o nome do cliente: "),
    assinatura: prompt("Digite o tipo de assinatura (prime/padrão): "),
    listaPrecos: [],
}

for (let i = 0; i < 3; i++) {
    carrinho.listaPrecos.push(parseFloat(prompt(`Preço do item ${i + 1}: R$ `)));
}

let totalCarrinho = carrinho.listaPrecos.reduce((total, preco) => total + preco, 0);

if (totalCarrinho > 200 || carrinho.assinatura === "prime") {
    carrinho.frete = true;
    console.log(`O cliente ${carrinho.nomeCliente} tem frete grátis!`);
    carrinho.valorFinal = totalCarrinho;
} else { 
    carrinho.frete = false;
    carrinho.valorFrete = 30;
}
console.log(carrinho);
console.log(`Valor total do carrinho: R$ ${totalCarrinho.toFixed(2)}`);

console.log(`2. Tracker de Atletas Profissionais\n`);

let registroAtletas = {
    nome: prompt("Qual seu nome: "),
    peso: parseFloat(prompt("Qual seu peso atual (kg): ")),
    meta: prompt("Qual sua meta (Performance ou Emagrecimento): "),
    kmCorridas: []
}

for (let i = 1; i <= 3; i++) {
  registroAtletas.kmCorridas.push(parseFloat(prompt(`Distância da maratona ${i} (km): `)));
}

let corridaDistancia = parseFloat(prompt("Digite a distância da corrida de hoje(km): "));
registroAtletas.kmCorridas.push(corridaDistancia);

let ultimas3Corridas = registroAtletas.kmCorridas.slice(-3);
let mediaDistancia = ultimas3Corridas.reduce((total, distancia) => total + distancia, 0) / ultimas3Corridas.length;
let metaFormatada = registroAtletas.meta.toLowerCase();

if (metaFormatada === "emagrecimento" && mediaDistancia > 20) {
    registroAtletas.peso -= 1;
    registroAtletas.selo = 'Meta Atingida';
} else if (metaFormatada === "performance") {
    let corridaAnterior = registroAtletas.kmCorridas[registroAtletas.kmCorridas.length - 2];
    if (corridaDistancia > corridaAnterior) {
        registroAtletas.selo = 'Novo Recorde Pessoal';
    }
}
console.log(registroAtletas);

console.log(`3. Programa de Milhas Aéreas\n`);

let perfilVip = {
    nome: prompt("Digite o nome do passageiro: "),
    historicoVoos: [
        {destino: "São Paulo", milhas: 1500},
        {destino: "Rio de Janeiro", milhas: 1200},
    ]
};

let novoVoo = {
    destino: prompt("Digite o destino do novo voo: "),
    milhas: parseInt(prompt("Digite a quantidade de milhas do novo voo: "))
};

perfilVip.historicoVoos.push(novoVoo);

let totalMilhas = perfilVip.historicoVoos.reduce((total, voo) => total + voo.milhas, 0);

if (totalMilhas > 5000) {
    totalMilhas = totalMilhas - 5000;
    perfilVip.saldoMilhas = totalMilhas;
    perfilVip.categoria = "Platinum";
    console.log(`Parabéns, ${perfilVip.nome}! Você atingiu a categoria Platinum!`);
} else {
    perfilVip.saldoMilhas = totalMilhas;
    perfilVip.categoria = "Gold";
    console.log(`Olá, ${perfilVip.nome}. Você está na categoria Gold. Faltam ${5000 - totalMilhas} milhas para atingir a categoria Platinum.`);
}
console.log(perfilVip);

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

console.log(`5. Sistema de Mentoria Acadêmica\n`);

let fichaProjeto = {
  nomeCoordenador: prompt("Digite o nome do coordenador do projeto: "),
  limiteVagas: parseInt(prompt("Digite o limite de vagas do projeto: ")),
  areaEstudo: prompt("Digite a área estudada do projeto: "),
  mentores: [
    {nome: "Ana", especialidade: "Matemática"},
    {nome: "Bruno", especialidade: "Física"},
  ]
};

let nomeVoluntario = prompt("Nome do novo voluntário: ");
let areaVoluntario = prompt("Área de atuação do voluntário: ");

let vagasDisponiveis = fichaProjeto.mentores.length < fichaProjeto.limiteVagas;
let areaCorresponde = areaVoluntario.toLowerCase() === fichaProjeto.areaEstudo.toLowerCase();

if (vagasDisponiveis && areaCorresponde) {
  console.log("Status: Voluntário aprovado!");
  fichaProjeto.mentores.push(
    {nome: nomeVoluntario,
    especialidade: areaVoluntario});
      } else {
        console.log("Status: Cadastro recusado!");
        fichaProjeto.status = "Bloqueado para Inscrições";
      }

console.log(fichaProjeto);

console.log(`6. Sistema de Segurança de Voo / Aeronave Doméstica\n`);

let turbina = {
  lado: prompt("Digite o motor da turbina (esquerda/direita): "),
  status: prompt("Digite o status da turbina (ligado/desligado): "),
  leituraCritica: [0, 0, 0]
};

let temp = parseFloat(prompt("Temperatura atual (°C): "));
let pressao = parseFloat(prompt("Pressão do óleo (PSI): "));
let combustivel = parseFloat(prompt("Nível de combustível (%): "));

turbina.leituraCritica = [temp, pressao, combustivel];

let tempValida = turbina.leituraCritica[0] >= 20 && turbina.leituraCritica[0] <= 90;
let pressaoValida = turbina.leituraCritica[1] > 50;
let combustivelValido = turbina.leituraCritica[2] > 20;

if (tempValida && pressaoValida && combustivelValido) {
  turbina.status = "Ligado";
} else {
  turbina.status = "Falha Crítica";
  turbina.bloqueioAtivado = true;
}
console.log(turbina);

 console.log(`7. Controle de Imigração Governamental\n`);

 let passageiro = {
   nome: prompt("Digite o nome do passageiro: "),
   nacionalidade: prompt("Digite a nacionalidade do passageiro: "),
   trabalho: prompt("Esta a trabalho? (sim/não): "),
   documentos: ["Passaporte", "Visto"],
 };

 let docSaude = prompt("Comprovação de saúde: ");
passageiro.documentos.push(docSaude);

let brasileiro = passageiro.nacionalidade.toLowerCase() === "brasileiro";

if (!brasileiro) {
  let vistoValido = passageiro.documentos[1] === "Visto";
  let comprovanteSaude = passageiro.documentos[2] && passageiro.documentos[2].toLowerCase() !== "";
  passageiro["Entrada Autorizada"] = vistoValido && Boolean(comprovanteSaude);
} else {
  let temPassaporte = passageiro.documentos[0] === "Passaporte";
  passageiro["Entrada Autorizada"] = temPassaporte;
}
console.log(passageiro);

console.log(`8. Gestão de Eventos para Festival de Música\n`);

let grupo = {
  nomeEmpresa: prompt("Digite o nome da empresa participante do festival: "),
  orcamento: parseFloat(prompt("Digite o orçamento total da noite (R$): ")),
  openBarFechado: false,
  consumoExtra: [],
};

let bebida1 = prompt("Nome da primeira bebida importada: ");
let bebida2 = prompt("Nome da segunda bebida importada: ");
let valorTotalBebidas = parseFloat(prompt("Valor total somado das duas bebidas (R$): "));

grupo.consumoExtra.push({bebida1, bebida2});
grupo.orcamento -= valorTotalBebidas;

if (grupo.orcamento < 0) {
  grupo.openBarFechado = true;
  grupo["Multa excedente"] = `R$ ${500.00.toFixed(2)}`;
}
grupo.orcamentoTotal = `R$ ${grupo.orcamento.toFixed(2)}`;
console.log(grupo);

console.log(`9. Diário de Leituras em Aplicativos de Educação Literária\n`);

let aluno = {
  nome: prompt("Digite o nome do aluno: "),
  pontosDeLeitura: 10,
  historicoDias: [
    { data: "13/10/2026", paginasLidas: 35 },
    { data: "14/10/2026", paginasLidas: 40 }
  ]
};

let dataHoje = prompt("Data da leitura de hoje: ");
let paginasHoje = parseInt(prompt("Quantidade de páginas lidas hoje: "));
aluno.historicoDias.push({
  data: dataHoje,
  paginasLidas: paginasHoje
});

let ultimoRegistro = aluno.historicoDias[aluno.historicoDias.length - 1];
let SuperLeitor = false;

if (ultimoRegistro.paginasLidas > 50 && aluno.pontosDeLeitura > 0) {
  aluno.pontosDeLeitura *= 2;
  SuperLeitor = true;
} else if (ultimoRegistro.paginasLidas < 10) {
  aluno.pontosDeLeitura /= 2;
}
console.log(aluno);
if (SuperLeitor) {
  console.log(`Super Leitor!`) 
}

console.log(`10. Computadores em Cluster / Nuvem Virtual\n`);

let servidor = {
  nome: prompt("Nome do servidor: "),
  capacidadeMaximaGigabytes: parseFloat(prompt("Capacidade máxima do servidor (GB): ")),
  sitesHospedados: [
    { dominio: "LionsDev.com", tamanhoOcupadoGB: 150 }
  ]
};

let novoDominio = prompt("Domínio do novo site: ");
let novoTamanhoGB = parseFloat(prompt("Tamanho do novo projeto (GB): "));

let espacoOcupadoAtual = servidor.sitesHospedados.reduce((total, site) => total + site.tamanhoOcupadoGB, 0);
let espacoTotalPrevisto = espacoOcupadoAtual + novoTamanhoGB;

if (espacoTotalPrevisto <= servidor.capacidadeMaximaGigabytes) {
  servidor.sitesHospedados.push({
    dominio: novoDominio,
    tamanhoOcupadoGB: novoTamanhoGB
  });
  console.log("Upload Concluído! Sistema Operacional");
} else {
  servidor.alertaSobrecarga = true;
  console.log("Falha: Falta de Espaço Físico. Cancele o deploy");
}
console.log(servidor);