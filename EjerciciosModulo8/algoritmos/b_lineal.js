function busquedaLineal(lista, objetivo) {
    for (const element of lista) {
        if (element == objetivo) {
            return true
        } 
    }return false
}

const lista = [1,2,3,4,5,6,7,8,9]
console.log(busquedaLineal(lista,9))