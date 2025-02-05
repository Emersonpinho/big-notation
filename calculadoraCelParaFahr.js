function calc_c_to_f(c) {
    let f = (c * 9 / 5) + 32 // tenho uma soma, uma divisão, uma multiplicação, uma tribuição e retornei f. então é igual a 5 operações ou seja, n = 5
    return f;
}

console.log(`celsius para fahrenheit (39): ${calc_c_to_f(39)}`);