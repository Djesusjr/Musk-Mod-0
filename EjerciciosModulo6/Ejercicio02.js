const readline = require("readline-sync");
/**
Escribe un programa que pida al usuario tres números y que pinte por pantalla si al menos uno de
ellos es par.
*/
let i = 1;
let pares = 0;

while (i <= 3) {
    
    let numero = Number(readline.question("Ingresa un numero: "));
    if(!isNaN(numero)) {
        if (numero % 2 === 0) {
            pares += 1;
        }
        i++;
    }else {
        console.log("Entrada no válida. Por favor ingresa un número.");
    }
    
}
console.log(pares >= 1 ? "hay al menos un numero par" : "no hay pares");