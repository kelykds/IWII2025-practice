let nota1 = prompt("Digite a primeira nota:");
nota1 = parseFloat(nota1);
let nota2 = prompt("Digite a segunda nota:");
nota2 = parseFloat(nota2);
let nota3 = prompt("Digite a terceira nota:");
nota3 = parseFloat(nota3);
let media = (nota1 + nota2 + nota3) / 3;
if (media >= 7) {
    alert("Aprovado! Sua média é: " + media.toFixed(2));
} else if (media >= 5) {
    alert("Recuperação! Sua média é: " + media.toFixed(2));
} else {
    alert("Reprovado! Sua média é: " + media.toFixed(2));
}