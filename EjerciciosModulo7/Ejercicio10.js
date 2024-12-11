
/**
 Ejercicio 10
Implementa una función que reciba una matriz como parámetro y devuelva la matriz traspuesta.
 */
function matrizTranspuesta(array) {
    let nuevaMatriz = []
    for (let i = 0; i < array[0].length; i++) {
        nuevaMatriz[i] = []
        for (let j = 0; j < array.length; j++) {
            nuevaMatriz[i][j] = array[j][i];
        }
    }
    nuevaMatriz = nuevaMatriz.map((num) => console.log(num));
    return nuevaMatriz
}

const matrizOriginal = [[ 1, 2, 3 ],[ 4, 5, 6]]
// console.log(matrizTranspuesta(matrizOriginal))
matrizTranspuesta(matrizOriginal)