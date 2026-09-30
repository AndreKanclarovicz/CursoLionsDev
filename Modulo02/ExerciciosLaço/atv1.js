import promptSync from "prompt-sync";
const prompt = promptSync();

let num1=parseFloat(prompt("Qual número você quer a tabuada? "));
let i

for (i = 0; i <= 100; i++) {
console.log(`${num1} x ${i} = ${i * num1}`);
}