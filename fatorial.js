function fatorial(x) {
    let resposta = 1;
    while (x > 1) {
        resposta * x
        x = x - 1
    }
    return resposta
}

console.log(`Fatorial (5): ${fatorial(5)}`);