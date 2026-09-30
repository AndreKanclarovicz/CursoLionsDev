import promptSync from "prompt-sync";
const prompt = promptSync();

const frutas =['Banana', 'Morango', 'Kiwi'];

console.log(`Parte 0 - treino Rapido`);
// 01
console.log(`01 - ${frutas}.`);
// 02
console.log(`02 - ${frutas[1]}.`);
// 03
console.log(`03 - ${frutas.length}.`);
// 04
frutas.push('Mangá');
console.log(`04 - ${frutas}.`);
// 05
frutas.unshift('Uva');
console.log(`05 - ${frutas}.`);
// 06
frutas.pop();
console.log(`06 - ${frutas}.`);
// 07
console.log(`07 - ${frutas[0]}, ${frutas[frutas.length-1]}.`);
// 08
const numeros = [4, 8, 15];
const soma = numeros[0] + numeros[1] + numeros[2];
console.log(`08 - ${soma}`);
// 09
for (let i = 0; i < frutas.length; i++){
console.log(`09 - ${frutas[i]}`);
}
// 10
console.log(frutas.includes('Banana'));

console.log(`\n`);
console.log(`Parte 01 - Complete o código.`);

console.log(`01 - Primeiro e Ultimo.`);
const cidades = ['Curitiba', 'Ponta Grossa', 'Londrina', 'Maringá'];
// let primeira = cidades[0];
// let ultima = cidades.length;

console.log(`Primeira: ${cidades[0]}.`);
console.log(`Ultima: ${cidades[cidades.length-1]}.`);

console.log(`\n`);
console.log(`02 - Fila de suporte.`);

const fila = ['Ana', 'Bruno'];
fila.push('Carla');
fila.unshift('Diego')
fila.shift();

console.log(fila);

console.log(`\n`);
console.log(`03 - Soma das vendas.`);

const vendas = [120, 340, 85, 200, 90];
let total = 0;

for (let i = 0; i < vendas.length; i++) {
    total += vendas[i];
}
console.log(`Faturamento: ${total}.`);

console.log(`\n`);
console.log(`Parte 02 - Ache o bug.`);
console.log(`\n`);

