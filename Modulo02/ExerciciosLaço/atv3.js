import promptSync from "prompt-sync";
const prompt = promptSync();

var temperaturaAgua = 90;

while(temperaturaAgua <= 100){
 console.log(`A temperatura está em ${temperaturaAgua} graus. Aquecendo...`);
 temperaturaAgua +=2;
}
