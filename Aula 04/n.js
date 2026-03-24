let notas = [100, 50, 20, 10, 5, 2, 1];
let valor = prompt("Qual o valor do saque?");
valor = parseFloat(valor);
if (isNaN(valor) || valor <= 0) {
    alert("Valor inválido. Por favor, digite um valor positivo.");
} else {
    let resultado = "Notas necessárias para o saque de R$ " + valor + ": ";
    for (let i = 0; i < notas.length; i++) {
        let quantidade = Math.floor(valor / notas[i]);
        if (quantidade > 0) {
            resultado += quantidade + " nota(s) de R$ " + notas[i] + ", ";
            valor -= quantidade * notas[i];
        }
    }
    alert(resultado.slice(0, -2)); // Remove a última vírgula e espaço
}

let notas2 = [100, 50, 20, 10, 5, 2, 1];
let valor2 = prompt("Qual o valor do saque?");
valor2 = parseFloat(valor2);
if (valor2 > 0) {
    if (valor2 % 100 === 0 || valor2 % 50 === 0 || valor2 % 20 === 0 || valor2 % 10 === 0 || valor2 % 5 === 0 || valor2 % 2 === 0 || valor2 % 1 === 0) {
        console.log("é possível sacar o valor solicitado.");
    } else {
        console.log("não é possível sacar o valor solicitado.");
    }
}