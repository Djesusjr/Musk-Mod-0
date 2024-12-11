const rl = require("readline-sync");
/*
Ejercicio 1
Implementa una función que reciba por parámetro el radio de un círculo y que devuelva la longitud de
la circunferencia.
*/
function calcularCircunferencia(radio) {
    let circunferencia = 2 * Math.PI * radio
    console.log("La circunferencia es " + circunferencia);
}

const radio = Number(rl.question("Introduce el radio: "))

calcularCircunferencia(radio);