function búsquedaBinaria(listaOrdenada, objetivo) {
    let inicio = 0
    let fin = listaOrdenada.length - 1
    while (inicio <= fin) {
        const medio = Math.floor((inicio + fin) / 2)    
        if (listaOrdenada[medio]==objetivo) {
            return true
        } else if (listaOrdenada[medio] <= objetivo) {
            inicio = medio+1
        } else {
            fin = medio -1
        }
    }
    return false
}
const lista = [1,2,3,4,5,6,7,8,9]
console.log(búsquedaBinaria(lista,9))