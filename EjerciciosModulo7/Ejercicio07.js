const readLine = require("readline-sync");
/*
Ejercicio 7
Implementa una función que reciba un texto (string) y que devuelva una matriz bidimensional de
ancho 5 y de alto indeterminado que incorpore las palabras (elementos separados por espacios) del
texto una por una de izquierda a derecha y de arriba a abajo.
*/
function matrizDePalabras(texto) {
    let arrayDeTexto = texto.split(' ');
    let array = [];
    for (let i = 0; i < arrayDeTexto.length; i += 5) {
        array.push(arrayDeTexto.slice(i, i + 5))
    }
    return array 
}
let inputUser = readLine.question("Introduce un texto: ")

console.log(matrizDePalabras(inputUser))
// mary tenia un corderito su piel era blanca como la nieve soy una tetera