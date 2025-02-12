const readline = require("readline-sync");
/*
Escribe un programa que pida al usuario un número e imprima por pantalla si el número es par o
impar y si es positivo o negativo. Si la entrada no es un número, se deberá pintar “No es un
número”.
*/

//Solicitamos y guardamos la entrada del Usuario
const input = readline.question("Introduce un numero: ");

//parseamos la entrada a un numero
let num = parseInt(input);

/* 
Negamos la condicion de manera que si no se cumple lanzamos el mensaje "no es un numero"
y nos evitamos ejecutar el resto del codigo
*/
if (!isNaN(num)) {
    //Asignamos a la variable parOrImpar si num es par o impar
    let parOrImpar = num %2 === 0 ? 'par' : 'impar';
    //Validamos si numero es positivo o no y lo concatenamos con la variable parOrImpar
    if(num >= 0 ){ 
        console.log("positivo y " + parOrImpar) 
    }else 
    console.log("negativo y " + parOrImpar)
}else{
    console.log("no es numero");
}