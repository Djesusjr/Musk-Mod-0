const cola = []

cola.push(1, 2, 3, 4, 5, 6)
console.log(cola)
cola.unshift(7, 8)
console.log(cola)
// cola.shift() shit elimina el primer elemento de un array devolviendo un nuevo array con el resto de elementos
cola.pop()
console.log(cola)
// las colas siguen el principio FIFO(first in, first out) primero en entrar primero en salir