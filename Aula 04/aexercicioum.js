let numero1 = prompt("Digite um número para verificar se é par ou ímpar:");
numero1 = parseInt(numero1);
if (numero1 % 2 === 0) {
    alert("O número " + numero1 + " é par.");
} else {
    alert("O número " + numero1 + " é ímpar.");
}