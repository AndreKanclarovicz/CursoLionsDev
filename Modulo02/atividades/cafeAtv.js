import promptSync from "prompt-sync";
const prompt = promptSync();

let cafe = (prompt("Você gosta de café? (sim/não): "));
let gostaDeCafe = cafe === "sim";
if (cafe !== 'sim' && cafe !== 'nao') {
    console.log("Resposta invalida");
} else if (gostaDeCafe) {
    console.log(`Que ótimo, eu tambem gosto.`);
} else {
    console.log(`Paião`);
}
