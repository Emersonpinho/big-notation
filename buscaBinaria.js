function busca_binaria(lista, e) {
    function busca (lista, e, inicio, fim) {
        if (inicio == fim) {
            return lista[inicio] == e
        }
        let meio = Math.floor((inicio + fim) / 2)
        if (lista[meio] == e) {
            return true
        } else if (lista[meio] > e) {
            if (inicio == meio) {
                return false
            } else {
                return busca(lista, e, inicio, meio - 1)
            }
        }

        if (lista.length == 0) {
            return false
        } else {
            return busca(lista, e, 0, lista.length - 1)
        }
    }
}

lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
console.log(`Busca binária(10): ${busca_binaria(lista, 10)}`);
console.log(`Busca binária(21): ${busca_binaria(lista, 21)}`);