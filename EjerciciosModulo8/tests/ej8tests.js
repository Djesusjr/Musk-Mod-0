function esPrimo(numero) {
  // Los números menores o iguales a 1 no son primos
  if (numero <= 1) return false;

  // Verificar divisores desde 2 hasta la raíz cuadrada del número
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false; // Si es divisible por i, no es primo
    }
  }

  // Si no se encontró ningún divisor, es primo
  return true;
}

// Ejemplo de uso
console.log(esPrimo(1009)); // true
console.log(esPrimo(27)); // false
console.log(esPrimo(17)); // true
console.log(esPrimo(100)); // false
