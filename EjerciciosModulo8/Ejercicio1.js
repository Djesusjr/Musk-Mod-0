/**
Ejercicio 1
Implementa una función que reciba un texto y devuelva las palabras que se repiten en dicho texto
Introduce un texto: Recordar es fácil para quien tiene memoria, olvidar es
difícil para quien tiene corazón
Se repiten las siguientes palabras: es, para, quien, tiene
 */
function findWordsRepeat(texto) {

    let textoSplit = texto.replace(/,/g, "").toLowerCase().split(" ");
    let textoOriginal = new Set();
    let wordRepeat = new Set();
    for (const word of textoSplit) {
      if (textoOriginal.has(word)) {
          wordRepeat.add(word) 
      } else {
        textoOriginal.add(word);
      }
    }
    return "Se repiten las siguientes palabras: "+Array.from(wordRepeat)
}

let texto = 'Recordar es fácil para quien tiene memoria, olvidar es difícil para quien tiene corazón, olvidar'
console.log(findWordsRepeat(texto));