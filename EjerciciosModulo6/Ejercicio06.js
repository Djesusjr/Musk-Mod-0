const rl = require("readline-sync");
/**
Escribe un programa que pida al usuario un año y que imprima por pantalla si dicho año es bisiesto o
no
 */
let input = Number(rl.question("digite el año: "));

if (input % 400 == 0 || (input % 4 == 0 && input % 100 != 0)) {
    console.log("El año es bisiesto")
}else console.log("El año no es bisiesto")