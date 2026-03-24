let n3 = prompt("Digite um número positivo para somar: ");
n3 = parseFloat(n3);
soma = 0;
while (n3 >= 0) {
    soma += n3;
    n3 = prompt("Digite outro número positivo para somar (ou um número negativo para parar): ");
    n3 = parseFloat(n3);
}
console.log("A soma dos números digitados é: " + soma);