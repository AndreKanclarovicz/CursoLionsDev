import promptSync from "prompt-sync";
const prompt = promptSync();

let opcao = -1;

do {
    console.log("MENU");
    console.log("1 - adicionar número");
    console.log("2 - remover número");
    console.log("3 - Listar números");
    console.log("4 - Calcular média");
    console.log("5 - Calcular mediana");
    console.log("0 - Sair");

opcao = parseInt(prompt("Escolha uma opção: "));

} while (opcao !== 0);