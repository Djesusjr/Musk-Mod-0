/*
Ejercicio 5
Implementa una función que reciba por parámetro un array de elementos e imprima por pantalla si
todos los elementos son únicos en la lista u otra lista con los elementos repetidos en caso contrario.
*/
function verificarUnicidad(arrays) {
    if (arrays.length === new Set(arrays).size) {
        return "Todos los elementos son únicos"
    }
    const elementosUnicos = new Set()
    const elementosRepetidos = []

    for (const item of arrays) {
        if (elementosUnicos.has(item)) {
            if (!elementosRepetidos.includes(item))
                elementosRepetidos.push(item)
        } else
            elementosUnicos.add(item)
        
    }
    return elementosRepetidos
    } 
const array1 = [1, 5, 22, 37, 2, 0, 5];
console.log(verificarUnicidad(array1))
const array2 = ["uva", "manzana", "pera", "platano","platano","uva"]
console.log(verificarUnicidad(array2))
