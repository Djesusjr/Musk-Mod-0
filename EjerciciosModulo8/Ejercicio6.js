// Ejercicio 6:
// Implementa el algoritmo de ordenacin bubble sort y comprueba cunto tarda en ejecutarse sobre un
// array de numeros aleatorios de tamao 100.000.
function BubbleShort(arr) {
  const sizeArr = arr.length;
  for (let i = 0; i < sizeArr - 1; i++) {
    let swapped = false;
    for (let j = 0; j < sizeArr - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}
const randomNumbers = Array.from({ length: 100_000 }, () =>
  Math.floor(Math.random() * 1001)
);
const startTime = performance.now(); // Capturar inicio en milisegundos
BubbleShort(randomNumbers);
const endTime = performance.now(); // Capturar fin en milisegundos

const totalTime = ((endTime - startTime) / 1000).toFixed(3); // Convertir a segundos con 3 decimales
console.log(
  `El algoritmo Bubble Sort ha tardado ${totalTime} segundos en ordenar 100,000 elementos.`
);
console.time;
console.log(randomNumbers);
