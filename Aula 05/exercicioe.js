// Converte Celsius para Fahreinheit
function ctof(tempc) {
    tempc = Number(tempc);
    if (isNaN(tempc)) return 'Inválido';
    const tempf = (tempc * (9 / 5)) + 32;
    return tempf;
}

console.log(ctof(1));