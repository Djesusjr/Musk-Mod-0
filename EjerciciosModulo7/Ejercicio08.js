/*
Ejercicio 8
Implementa una función que reciba un string y devuelva si es o no un palíndromo
(independientemente de los espacios).
*/
function verificarPolindromo(texto){
    let polindromo = texto.split("").reverse().join('')
    polindromo = polindromo.replace(/\s+/g,'').toLowerCase()
    texto =  texto.replace(/\s+/g,'').toLowerCase()
    let resultado = polindromo===texto ? 'Sí es palíndromo' : 'No es palíndromo'
    return resultado
}

let texto = "Dabale arroz a la zorra el abad";
console.log(verificarPolindromo(texto))