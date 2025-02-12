const rl = require("readline-sync");
/*
Ejercicio 2
Implementa una función que reciba por parámetro el radio de un círculo y que devuelva su área.
*/
function calcularArea(radio) {
    const area = Math.PI*(radio**2)
    console.log("El área del círculo es " + area);
}

const radio = Number(rl.question("Introduce el radio: "))

calcularArea(radio);