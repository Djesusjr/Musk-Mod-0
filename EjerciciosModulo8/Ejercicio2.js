// Ejercicio 2
// Implementa una función que reciba dos arrays de números y devuelva un array con los elementos
// que están en el primer array pero que no están en el segundo. Pruébala con valores aleatorios.

const array1 = [1, 3, 4, 7, 8];
const array2 = [3, 5, 6, 8];

function diferenceArrays(arr1, arr2) {
    const set = new Set(arr2)
    return arr1.filter((item) => !set.has(item));
}

console.log("la diferencia de ambos arrays es: ",diferenceArrays(array1, array2));
