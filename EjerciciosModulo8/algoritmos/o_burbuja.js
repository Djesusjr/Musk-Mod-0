function ordenaciónBurbuja(lista) {
    let n = lista.length
    for (let i = 0; i < n-1; i++) {
        for (let j = 0; j < n-i-1; j++) {
            if (lista[j] > lista[j + 1]) {
                let temp = lista[j]
                lista[j] = lista[j + 1]
                lista[j+1]=temp
            }
            
        }    
    }
    return lista
}
let lista = [1, 5, 4, 6, 3, 2, 8, 7, 9]
console.log(lista)
console.log(ordenaciónBurbuja(lista))
