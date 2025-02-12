let texto =
  "Recordar es fácil para quien tiene memoria, olvidar es difícil para quien tiene corazón, olvidar";
let textoSplit = texto.replace(/,/g, "").split(" ");

let conteoPalabras = new Map();
let palabrasRepetidas = [];

// Contamos las ocurrencias de cada palabra
for (const word of textoSplit) {
  // nos ubicamos en conteopalabras en la key [word]por ejemplo 'es' 
  // verifica si conteopalabras contiene[word] o es 0 y le suma 1
  conteoPalabras[word] = (conteoPalabras[word] || 0) + 1;
}

// Filtramos solo las palabras que se repiten
Object.keys(conteoPalabras).filter(
  (word) => (conteoPalabras[word] > 1)
);


