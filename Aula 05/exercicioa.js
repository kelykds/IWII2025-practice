// Recebe dois números e retorna o maior
function maior(num1, num2) {
    let maiornum = 0;
    if (num1 > num2) {
        maiornum = num1;
    }
    else if (num2 > num1) {
        maiornum = num2;
    }
    else {
        maiornum = "São iguais.";
        
    }
    return maiornum;
}

console.log(maior(2,4));

// OU

function maiorq(n1, n2) {
    if (n1 > n2) {
        return n1;
    } 
    else if (n2 > n1) {
        return n2
    }
    else {
        return "são iguais.";
    }
}

console.log(maiorq(2, 4));