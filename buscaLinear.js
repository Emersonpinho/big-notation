function busca_linear(lista, e) {
    let encontrado = false
    for (let i of lista) {
        if (e == i) {
            encontrado = true
            break
        }
    }
    return encontrado
}

    lista = [1, 4, 8, 3, 7, 4, 9, 13, 5, 9, 3]
    console.log(`busca_linear(10): ${busca_linear(lista, 10)}`);
    console.log(`busca_linear(9): ${busca_linear(lista, 9)}`);
