const rl = require("readline-sync");
/**
Escribe un programa que tome una cadena como entrada y cuente el número de vocales (a, e, i, o, u)
en la cadena.
*/
let input = rl.question("Ingresa una palabra: ");
let vocales = 0;
for (let i = 0; i < input.length; i++) {
    if (input[i] === 'a' || input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'u') {
        vocales += 1;
    }
}
console.log(vocales);