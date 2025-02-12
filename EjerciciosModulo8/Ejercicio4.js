// Ejercicio 4
// Escribe una función que reciba dos cadenas y verifique si son anagramas utilizando un Map.

let mapa = new Map();
function isAnagrama(texto1, texto2) {
  if (texto1.length !== texto2.length) return "No son anagramas";

  texto1 = texto1.toLowerCase();
  texto2 = texto2.toLowerCase();

  for (const character of texto1) {
    if (mapa.has(character)) mapa.set(character, mapa.get(character) + 1);
    else mapa.set(character, 1);
  }
  for (const character of texto2) {
    if (!mapa.has(character)) return "No es un anagrama";
    else mapa.set(character, mapa.get(character) - 1);
  }
  for (const value of mapa.values()) {
    if (value !== 0) return "No es un anagrama";
  }

  return 'Son anagramas';
}


console.log(isAnagrama("amor","roma"));
console.log(isAnagrama("Listen", "Silent"));
console.log(isAnagrama("hola", "mundo"));
console.log(isAnagrama("Anagrama", "Nagarama"));
