

let listaAlunos = ["João", "Maria"];

let novoAluno = prompt("Digite o nome do novo aluno: ");
listaAlunos.push(novoAluno);
console.log(`Lista de alunos atualizada: ${listaAlunos.join(", ")}.`);

console.log(`2. Baixa no Estoque\n`);

let estoqueTamanho = [10, 15, 8];

let vendidasP = Number(prompt("Digite a quantidade de camisetas tamanho P vendidas hoje: "));
estoqueTamanho[0] -= vendidasP;
if (estoqueTamanho[0] < 5) {
    console.log(`Estoque de camisetas tamanho P está baixo. Estoque atual: ${estoqueTamanho[0]}.`);
} else {
    console.log(`Estoque atualizado. Estoque atual: ${estoqueTamanho[0]}.`);
}

console.log(`3. Ficha Médica Veterinária\n`);

let nomeAnimal = prompt("Digite o nome do animal: ");
let especieAnimal = prompt("Digite a espécie do animal: ");
let idadeAnimal = Number(prompt("Digite a idade do animal: "));

let paciente = {}
paciente.nome = nomeAnimal;
paciente.raca = racaAnimal;
paciente.idade = idadeAnimal;

if (paciente.idade >= 8) {
    console.log(`O paciente ${paciente.nome} já é sênior e precisa de exames de rotina.`);
} else {
    console.log(`O paciente ${paciente.nome} está na faixa de idade regular`);
}

console.log(`4. Orçamento de Projetos\n`);

let filaProjetos = [];

let empresaCliente = prompt("Digite o nome da empresa cliente: ");
let valorProjeto = parseFloat(prompt("Digite o valor do projeto: R$ "));

let projeto = {
    cliente: empresaCliente,
    valorEstimado: valorProjeto
};
filaProjetos.push(projeto);

let urgente = prompt("O projeto tem entrega urgente? (sim/não): ");
if (urgente === "sim" && filaProjetos[0].valorEstimado > 3000) {
    filaProjetos[0].valorEstimado *= 1.15;
}
console.log(`Projeto do cliente ${filaProjetos[0].cliente} com valor estimado de R$ ${filaProjetos[0].valorEstimado.toFixed(2)}.`);

console.log(`5. Estação de Monitoramento\n`);

let estacao = {
    id: "Sensor-01",
    local: "Laboratório",
    temperatura: []
}

let temp1 = parseFloat(prompt("Digite a primeira temperatura registrada: "));
let temp2 = parseFloat(prompt("Digite a segunda temperatura registrada: "));
let temp3 = parseFloat(prompt("Digite a terceira temperatura registrada: "));
estacao.temperatura.push(temp1, temp2, temp3);

let mediaTemp = (estacao.temperatura[0] + estacao.temperatura[1] + estacao.temperatura[2]) / 3;
if (mediaTemp > 35) {
    estacao.alerta = true;
    console.log(`Perigo! A média de temperatura extrema ${estacao.id} no local ${estacao.local} é de ${mediaTemp.toFixed(2)}°C.`);
} else {
    estacao.alerta = false;
    console.log(`Temperaturas dentro da normalidade.`);
}
console.log(estacao);