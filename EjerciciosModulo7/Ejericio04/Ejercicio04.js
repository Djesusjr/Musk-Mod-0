/*
Ejercicio 4
Implementa una función que reciba por parámetro un array de números y que imprima por pantalla
la suma y la media aritmética de sus elementos.
*/

function calcularDatos(array) {
    if (array.length === 0) {
        console.log("El array está vacío. No se puede calcular la suma ni la media aritmética.");
    }
    let suma = 0;
    
    for (const element of array) {
        suma += element;
    } 
    console.log("la suma es " + suma);
    console.log("la media aritmetica es " + suma/array.length);
}

const array = [10,2,5,33,1,27,31];
calcularDatos(array);