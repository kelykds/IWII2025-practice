let valid = 10
let nota = prompt("Digite uma nota entre 0 e 10:");
nota = parseFloat(nota);
while (isNaN(nota) || nota < 0 || nota > valid) {
    alert("Nota inválida. Por favor, digite uma nota entre 0 e 10.");
    nota = prompt("Digite uma nota entre 0 e 10:");
    nota = parseFloat(nota);
}
alert("A nota digitada e válida é: " + nota);
