// Função que retorna a média de uma lista de números
function media(numeros = []) {
    let quantidade = numeros.length;
    let soma = 0;
    for (let i = 0; i < quantidade; i++) {
        soma += Number(numeros[i]);
    }
    let mediageral = soma / quantidade;
    return mediageral;
}

console.log(media([2, 3, 4, 5, 6, 7, 8, 10]));