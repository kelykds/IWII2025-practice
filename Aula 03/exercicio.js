alert("Bem vindo(a)!");

var nome = prompt("Qual é o seu nome?");
alert("Olá, " + nome + "!");

let idade1 = prompt("Qual é a sua idade?");
if (idade1 >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

let resposta = confirm("Você deseja prosseguir?");
if (resposta) {
    console.log("Que ótimo! Vamos estudar juntos.");
} else {
    console.log("Tudo bem, estudaremos depois.");
}

let numero1 = prompt("Digite um número:");
let numero2 = prompt("Digite outro número:");
let soma = parseFloat(numero1) + parseFloat(numero2);
alert("A soma dos números é: " + soma);

let numero = prompt("Digite um número: ");
numero = parseFloat(numero);
numero *= 2;
alert("O dobro do número é: " + numero);

let nome2 = prompt("Digite seu nome: ");
let idade2 = prompt("Digite sua idade: ");
idade2 = parseInt(idade2);
alert("Olá, " + nome2 + "! Você tem " + idade2 + " anos.");
