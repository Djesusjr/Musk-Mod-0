const rl = require("readline-sync");
/*
Ejercicio 3
Implementa una función que reciba por parámetro el radio de un círculo y que pinte por pantalla la
circunferencia y el área del círculo.
*/
function calcularCircunferencia(radio) {
    const circunferencia = 2 * Math.PI * radio
    console.log("La circunferencia es " + circunferencia);
}
function calcularArea(radio) {
    const area = Math.PI*(radio**2)
    console.log("El área del círculo es " + area);
}
function describirCirculo(radio) {
    calcularCircunferencia(radio);
    calcularArea(radio);
}

const radio = Number(rl.question("Introduce el radio: "))
describirCirculo(radio);