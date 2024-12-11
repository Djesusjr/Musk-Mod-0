const readLine = require("readline-sync");
/*
Ejercicio 9
Implementa una función que reciba un número y devuelva una matriz cuadrada en la cual cada
elemento es el producto de sus índices.
 */
function matrizCuadrada(size) {
    let matriz = [];
    for (let i = 0; i < size; i++) {
        matriz.push([])
        for (let j = 0; j < size; j++) {
            matriz[i][j] = i * j;
        }
    }
   return matriz 
}
const size = Number(readLine.question("Introduce el tamaño de la matriz cuadrada: "))
console.log(matrizCuadrada(size))