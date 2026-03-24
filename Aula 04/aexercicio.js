let numero1 = prompt("Digite um número para verificar se é par ou ímpar:");
numero1 = parseInt(numero1);
if (numero1 % 2 === 0) {
    alert("O número " + numero1 + " é par.");
} else {
    alert("O número " + numero1 + " é ímpar.");
}

let idadeUsuario = prompt("Digite sua idade para verificar se é maior ou menor de idade:");
idadeUsuario = parseInt(idadeUsuario);
if (idadeUsuario >= 18) {
    alert("Você é maior de idade.");
} else {
    alert("Você é menor de idade.");
}

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

let contagem = prompt("Digite um número para contagem regressiva:");
contagem = parseInt(contagem);
while (contagem >= 0) {
    console.log(contagem);
    contagem--;
}

let numero2 = prompt("Tabuada de que número você deseja ver?");
numero2 = parseInt(numero2);
for (let j = 1; j <= 10; j++) {
    console.log(numero2 + " x " + j + " = " + (numero2 * j));
}

let k = prompt("Somar de 1 a qual número?");
k = parseInt(k);
let soma = 0;
for (let m = 1; m <= k; m++) {
    soma += m;
}
console.log("A soma de 1 a " + k + " é: " + soma);

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

let nomeUsuario = prompt("Digite seu nome de usuário: ");
let senhaUsuario = prompt("Digite sua senha: ");
if (nomeUsuario === "admin" && senhaUsuario === "1234") {
    alert("Login bem-sucedido!");
} else {
    alert("Nome de usuário ou senha incorretos.");
    nomeUsuario = prompt("Digite seu nome de usuário: ");
    senhaUsuario = prompt("Digite sua senha: ");
}


let n3 = prompt("Digite um número positivo para somar: ");
n3 = parseFloat(n3);
soma = 0;
while (n3 >= 0) {
    soma += n3;
    n3 = prompt("Digite outro número positivo para somar (ou um número negativo para parar): ");
    n3 = parseFloat(n3);
}
console.log("A soma dos números digitados é: " + soma);

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

let n5 = prompt("Digite um número para calcular seu fatorial: ");
n5 = parseInt(n5);
let fatorial = 1;
for (let q = 1; q <= n5; q++) {
    fatorial *= q;
}
console.log("O fatorial de " + n5 + " é: " + fatorial);

let valid = 10
let nota = prompt("Digite uma nota entre 0 e 10:");
nota = parseFloat(nota);
while (isNaN(nota) || nota < 0 || nota > valid) {
    alert("Nota inválida. Por favor, digite uma nota entre 0 e 10.");
    nota = prompt("Digite uma nota entre 0 e 10:");
    nota = parseFloat(nota);
}
alert("A nota digitada e válida é: " + nota);

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

let impar = prompt("Digite um número e darei todos os ímpares até ele:");
impar = parseInt(impar);
console.log("Números ímpares de 1 a " + impar + ":");
for (let i = 1; i <= impar; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}