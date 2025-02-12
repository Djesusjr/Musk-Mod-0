const rl = require("readline-sync");
// Ejercicio 9
// Implementa una función que, dado un texto con paréntesis, indique si dichos paréntesis están
// balanceados (se cierran todos los que se abren)
// (()(()))
//  )(()()))
const secuencia = rl.question("Digite el numero a verificar: ");

function validarSecuencia(secuencia) {
  const stack = [];
  for (let i = 0; i < secuencia.length; i++) {
    if (secuencia[i] === "(") {
      stack.push(secuencia[i]);
    } else if (secuencia[i] === ")") {
      if (stack.length > 0) {
        stack.pop();
      } else {
        return "No estan balanceados";
      }
      }   
  }
  return stack.length === 0 ? "estan balanceados" : "no estan balanceados";
}
console.log(validarSecuencia(secuencia));