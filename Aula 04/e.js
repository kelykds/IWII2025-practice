let numero2 = prompt("Tabuada de que número você deseja ver?");
numero2 = parseInt(numero2);
for (let j = 1; j <= 10; j++) {
    console.log(numero2 + " x " + j + " = " + (numero2 * j));
}