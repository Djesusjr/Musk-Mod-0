// Ejercicio 3
// Implementa una función que reciba una cadena y devuelva un Map con la frecuencia de cada carácter
// en la cadena (las veces que se repite).

function concurrenciLetter(texto) {
  const mapa = new Map();
  for (const word of texto) {
    mapa.set(word, (mapa.get(word) || 0) + 1);
  }
  return mapa
}
const texto = "Hola mundo";
console.log(concurrenciLetter(texto));