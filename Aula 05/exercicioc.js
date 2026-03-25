// Função que calcula o fatorial de um número
function fatorial(n) {
    let produtorio = 1;
    for (let i = 1; i <= n; i++) {
        produtorio *= i
    }
    return produtorio;
}

console.log(fatorial(5));