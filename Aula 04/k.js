let n5 = prompt("Digite um número para calcular seu fatorial: ");
n5 = parseInt(n5);
let fatorial = 1;
for (let q = 1; q <= n5; q++) {
    fatorial *= q;
}
console.log("O fatorial de " + n5 + " é: " + fatorial);