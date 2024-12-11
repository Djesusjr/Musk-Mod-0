// Ejercicio 10
// Implementa una función que verifique si una secuencia de paréntesis, corchetes,
// y llaves es válida.
// Es decir, se abren tantos como se cierran y cada secuencia está siempre
// contenida.

function validarSecuenciaCompleja(secuencia) {
  const stack = [];
  const pares = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let i = 0; i < secuencia.length; i++) {
    const caracter = secuencia[i];

    if (caracter === "(" || caracter === "[" || caracter === "{") {
      stack.push(caracter);
    } else if (caracter === ")" || caracter === "]" || caracter === "}") {
      if (stack.length === 0 || stack.pop() !== pares[caracter]) {
        return "Secuencia incorrecta";
      }
    }
  }
     return stack.length === 0 ? "Secuencia correcta" : "Secuencia incorrecta";
}

console.log(validarSecuenciaCompleja("({[()]})")); // Secuencia correcta
console.log(validarSecuenciaCompleja("{[(])}")); // Secuencia incorrecta
