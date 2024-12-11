const rl = require("readline-sync");
/**
Escribe un programa que genere un número aleatorio del 1 al 10.
Haz que el programa pregunte al usuario números hasta que acierte el número aleatorio generado.
El programa debe mantener una cuenta de cuántos intentos han hecho falta hasta acertar el número.
Cuando el usuario acierte el número aleatorio, el programa mostrará por pantalla el número de
intentos.
 */

const randomNumber = Math.floor(Math.random() * 10) + 1;
let inputUser = parseInt(rl.question("He pensado un número del 1 al 10. ¡Intenta adivinarlo!: "));
let intentos = 0;
/*
se que el enucnciado dice que pidamos de nuevo el numero si no coincide 
pero intente hacerlo a prueba de errores(agradezco tu feedback Marcos!!)
*/
while (inputUser <= 0 || inputUser > 10 || isNaN(inputUser) || inputUser != randomNumber) {
    intentos += 1;
    console.log("¡Fallo!")
    inputUser = parseInt(rl.question("Ingresa un numero del 1 al 10: "));
}

console.log("¡Correcto! Has necesitado " + intentos + " intentos ")




