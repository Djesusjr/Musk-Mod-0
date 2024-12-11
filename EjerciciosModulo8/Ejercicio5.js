// Ejercicio 5
// Implementa una función que invierta el orden de una palabra usando una pila (stack).


function inverterWithStack(word) {
  let stack = [];
  let wordInverter = "";
    word = word.split('')
  for (let i = 0; i < word.length; i++) {
      stack.push(word[i])
  }
  while (stack.length > 0) {
    wordInverter+=stack.pop()
  }
    return wordInverter
}
console.log(inverterWithStack('amor'));
