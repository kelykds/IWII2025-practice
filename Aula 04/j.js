function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let num4 = aleatorio(1, 10);
alert("Adivinhe o número entre 1 e 10:");
let palpite = parseInt(prompt("Digite seu palpite: "));
while (palpite !== num4) {
    if (palpite < num4) {
        alert("Tente um número maior.");
    } else {
        alert("Tente um número menor.");
    }
    palpite = parseInt(prompt("Digite seu palpite: "));
    }

alert("Parabéns! Você acertou o número " + num4 + "!");