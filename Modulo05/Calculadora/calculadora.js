import promptSync from "prompt-sync";

import numeros from "./numeros.js";
import adicionarNumeros from "./adicionar.js";
import removerNumero from "./remover.js";
import calcularMedia from "./media.js";

const prompt = promptSync();


let opcao = -1;
let num = -1;

do {
    console.log("--------MENU--------");
    console.log("1 - adicionar número");
    console.log("2 - remover número");
    console.log("3 - Listar números");
    console.log("4 - Calcular média");
    console.log("5 - Calcular mediana");
    console.log("0 - Sair");

opcao = parseInt(prompt("Escolha uma opção: "));

switch (opcao) {
    case 1:
        console.log("Qual número você deseja adicionar?")
        num = parseFloat(prompt("R: "));
        adicionarNumeros(num);
        break;
    case 2:
        removerNumero();
        break;
    case 3:
        console.table(numeros);
        break;
    case 4:
        console.log(`A media é: ${calcularMedia()}`);
        break;
    case 0:
        console.log("Fechando programa");
        break;
    default:
        console.log("Opção inválida");
        break;
}

} while (opcao !== 0);