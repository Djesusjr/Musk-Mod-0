const rl = require("readline-sync");

/**
Escribe un programa que reciba dos números por consola que serán la base y la altura de un
rectángulo de asteriscos que se deberá pintar por pantalla.
 */

const altura = Number(rl.question("Digite la altura: "));
const ancho = Number(rl.question("Digite la anchura: "));

for (let i = 1; i <= altura ; i++) {
    if (i===1 || i===altura) {
        console.log('*'.repeat(ancho));    
    } else
        console.log('*' + ' '.repeat(ancho - 2) + '*');
    
    
    
}