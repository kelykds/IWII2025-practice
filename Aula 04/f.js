let k = prompt("Somar de 1 a qual número?");
k = parseInt(k);
let soma = 0;
for (let m = 1; m <= k; m++) {
    soma += m;
}
console.log("A soma de 1 a " + k + " é: " + soma);