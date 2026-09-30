let somaPares = 0;
let somaImpares = 0;
let totalPares = 0;
let totalImpares = 0;

for (let i = 0; i <= 999; i++){
    if (i % 2 == 0){
        somaPares += i;
        totalPares++;
    } else {
        somaImpares += i;
        totalImpares++;
    }
}

console.log(`Números pares: ${totalPares}`);
console.log(`Números impares: ${totalImpares}`);
console.log(`Soma pares: ${somaPares}`);
console.log(`Soma impares: ${somaImpares}`);

// Desafio Media

let mediaPares = somaPares / totalPares;
let mediaImpares = somaImpares / totalImpares;

console.log(`Média pares: ${mediaPares}`);
console.log(`Média impares: ${mediaImpares}`);

if (somaPares > somaImpares) {
    console.log(`A soma dos pares teve o maior total.`);
} else if (somaImpares > somaPares) {
    console.log(`A soma dos impares teve o maior total.`);
} else {
    console.log(`As somas foram iguais.`);
}