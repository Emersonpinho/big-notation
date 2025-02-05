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