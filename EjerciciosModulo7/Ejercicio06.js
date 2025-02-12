const readLine = require("readline-sync");
/*
Ejercicio 6
Implementa una función que reciba un número n por parámetro y devuelva una matriz cuadrada n x
n con números enteros consecutivos de izquierda a derecha y de arriba a abajo. 
*/

function generarMatriz(n) {
    let array = [];
    let contador = 1;
    for (let i = 0; i < numero; i++) {
        array.push([])
        for (let j = 0; j < numero; j++) {
            array[i][j] = contador
            contador++;
        }
    }
    array.forEach(element => console.log(element));
}
const numero = Number(readLine.question("Introduce el tamaño de la matriz cuadrada: "));


generarMatriz(numero);
