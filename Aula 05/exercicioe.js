// Converte Celsius para Fahreinheit
function ctof(tempc) {
    Number(tempc);
    const tempf = (tempc * (9 / 5)) + 32;
    return tempf;
}

console.log(ctof(1));