const rl = require("readline-sync");
// Ejercicio 8
// Implementa una función que reciba un número y devuelva si dicho número es primo
// o no.
const number = Number(rl.question("Digite el numero a verificar: "));

function esPrimo(number) {
  if (number <= 1) return `${number} no es primo`;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return `${number} no es primo`;
  }
  return `${number} Es primo`;
}
console.log(esPrimo(number));
