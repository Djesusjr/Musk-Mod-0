const rl = require("readline-sync");
/*
Escribe un programa que tome un número como entrada y calcule su factorial.
*/
let result = 1;
let input = Number(rl.question("Ingresa un numero: "));

// Validamos si la entrada es un número entero no negativo
if (!isNaN(input) && input >=0 && Number.isInteger(input)) {
    for (let i = 1; i <= input; i++) {
        result *= i;
    }
    console.log(`El factorial de ${input} es: ${result}`);
} else {
    console.log("Por favor ingresa un número entero no negativo.");
}
