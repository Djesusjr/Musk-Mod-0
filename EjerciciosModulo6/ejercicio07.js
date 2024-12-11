const readline = require("readline-sync");
/**
Escribe un programa que reciba un número del usuario y pinte un triángulo de asteriscos cuya altura
sea el número recibido.
 */
let input = Number(readline.question("Ingresa un numero: "))
for (let i = 1; i <= input; i++) {
    console.log(' '.repeat(input - i ) + '*'.repeat(2*i-1));
}

    