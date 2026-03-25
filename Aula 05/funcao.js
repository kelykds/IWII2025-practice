// Função simples
function saudacao() {
    console.log("Olá! Bem-vindo ao curso de JavaScript!");
}

saudacao(); // Chama a função para exibir a saudação

// Função com parâmetros
function saudacaoPersonalizada(nome) {
    console.log("Olá, " + nome + "! Bem-vindo ao curso de JavaScript!");
}

saudacaoPersonalizada("Kely"); // Chama a função com o nome "Kely"

// Função com retorno de valor
function soma(a, b) {
    return a + b; // Retorna a soma dos dois números
}

let resultado = soma(13, 6); // Chama a função soma e armazena o resultado
console.log("O resultado da soma é: ", resultado); // Exibe o resultado da soma

// Função com valor padrão para um parâmetro
function potencia(base, expoente = 2) {
    return Math.pow(base, expoente); // Retorna a base elevada ao expoente
}

console.log(potencia(3)); // Usa o expoente padrão (2)
console.log(potencia(3, 3)); // Passa um novo valor para o expoente

// Função que retorna o quociente e o resto de uma divisão
function divisao(dividendo, divisor) {
    let quociente = Math.floor(dividendo / divisor);
    let resto = dividendo % divisor;
    return [quociente, resto];
}

let [q, r] = divisao(10, 3);
console.log("Quociente:", q);
console.log("Resto:", r);

// Definindo uma função arrow para calcular o dobro de um número
const dobro = x => x *2;

console.log(dobro(4));