const rl = require("readline-sync");
/*
Escribe un programa que tome un número como entrada e imprima la tabla de multiplicar de ese
número del 1 al 10.
*/
let input = Number(rl.question("Ingrese un numero: "));

if (!isNaN(input) && input>=0) {
    for (let i = 1; i <= 10; i++) {
    console.log(`${input} x ${i} = ${input * i}`);
    }    
}else {
    console.log("Ingresaste un caracter o un numero negativo")
}
