const crypto = require("crypto")

/**
Búsqueda Secuencial
Descripción: Recorrido de un array desordenado elemento por elemento hasta encontrar el
valor buscado

Implementación:
a.Crear un array con 10 millones de elementos aleatorios.
b.Utilizar un bucle while para recorrer el array.
c.Comparar cada elemento con el valor buscado.
d.Salir del bucle si el elemento es encontrado.
Complejidad: O(n)

*/
const random = []
for (let i = 0; i < 1_000_000; i++) {
    random.push(crypto.randomInt(1000).toString())
}
let busqueda = "1";
let i = 0;
let encontrado = false
console.time("busqueda secuencial")
while (!encontrado && i < random.length) {
    if (random[i]==busqueda) {
        encontrado = true
    }
    i++;
}
if (encontrado) {
    console.log("elemento encontrador en la posicicion",i-1)
}
console.timeEnd("busqueda secuencial")