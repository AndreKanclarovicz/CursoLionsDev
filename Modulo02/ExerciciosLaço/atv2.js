import promptSync from "prompt-sync";
const prompt = promptSync();

const listaDeCompras = ['Arroz', 'Feijão', 'Macarrão', 'Carne'];

for (let i = 0; i < listaDeCompras.length; i++) {
console.log(`item: ${listaDeCompras[i]}`);
}