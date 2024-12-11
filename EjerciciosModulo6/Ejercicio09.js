const rl = require("readline-sync");
/**
Escribe un programa que solicite un número al usuario (del 0 al 10) y devuelva el número escrito en
letras. Si el valor introducido no está dentro del rango 0-10 o no es un número se deberá volver a
solicitar un número.
 */


let input = parseInt(rl.question("Ingresa un numero del uno 1 al 10: "));
while (input <=0 || input >10 || isNaN(input)) {
    input = parseInt(rl.question("Ingresa un numero del uno 1 al 10: "));
}
switch (input) {
    case 1:
        console.log("Uno");
        break;
    case 2:
        console.log("Dos");
        break;
    case 3:
        console.log("Tres");
        break;
    case 4:
        console.log("Cuatro");
        break;
    case 5:
        console.log("Cinco");
        break;
    case 6:
        console.log("Seis");
        break;
    case 7:
        console.log("Siete");
        break;
    case 8:
        console.log("Ocho");
        break;
    case 9:
        console.log("Nueve");
        break;
    case 10:
        console.log("Diez");
        break;
    default:
        console.log("Esto no se imprimira ya que el bucle while fuerza a recibir un numero en el rango 1-10")
        break;
}

//ALTERNATIVA AL SWITCH EN ESTE EJERCICIO MARCOS(haber que opinas)
/*
const numerosEnLetras = ["Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis", "Siete", "Ocho", "Nueve", "Diez"];
let numero = parseInt(rl.question("Ingresa un numero del uno 1 al 10: "));
while (numero <=0 || numero >10 || isNaN(numero)) {
    numero = parseInt(rl.question("Ingresa un numero del uno 1 al 10: "));
}
console.log(numerosEnLetras[numero-1]);
*/