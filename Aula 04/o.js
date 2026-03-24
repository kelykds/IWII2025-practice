let impar = prompt("Digite um número e darei todos os ímpares até ele:");
impar = parseInt(impar);
console.log("Números ímpares de 1 a " + impar + ":");
for (let i = 1; i <= impar; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}