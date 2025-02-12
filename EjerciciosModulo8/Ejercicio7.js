// Ejercicio 7
// Implementa el algoritmo de ordenación quicksort y comprueba cuánto tarda en
// ejecutarse sobre un array de números aleatorios de tamaño 100.000

function quickSort(array) {
  // Caso base: si el array tiene 0 o 1 elemento, ya está ordenado
  if (array.length <= 1) return array;

  
  const pivot = array[array.length - 1]; // Elegimos el pivote (en este caso, el último elemento)

  const left = []; // Subarreglo para elementos menores al pivote
  const right = []; // Subarreglo para elementos mayores al pivote

  for (let i = 0; i < array.length - 1; i++) {
    // Recorremos los elementos excepto el pivote
    if (array[i] <= pivot) {
      left.push(array[i]); // elementos menores o iguales al pivote
    } else {
      right.push(array[i]); // elementos mayores al pivote
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

const arrayRandom = Array.from({ length: 100_000 }, () =>
  Math.floor(Math.random() * 1001)
);

const startTime = performance.now();
const sortedArray = quickSort(arrayRandom);
const endTime = performance.now();
const totalTime = ((endTime - startTime) / 1000).toFixed(3);
console.log(
  `El algoritmo QuickSort ha tardado ${totalTime} segundos en ordenar 100,000 elementos.`,
  sortedArray
);
