let n = prompt("Digite um número para verificar se é primo:");
n = parseInt(n);
let ePrimo = true;
if (n <= 1) {
    ePrimo = false;
} else {
    for (let p = 2; p < n; p++) {
        if (n % p === 0) {
            ePrimo = false;
            break;
        }
    }
}
if (ePrimo) {
    alert("O número " + n + " é primo.");
} else {
    alert("O número " + n + " não é primo.");
}