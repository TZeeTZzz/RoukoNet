
/* La esencia de la lógica en programación */

// Ejercicios CAP 7.

// 1) Leer un número entero y determinar si es un número terminado en 4. 

/* Algoritmo Finish_Four 

 let numInt;

numInt = prompt("Introduzca un número");

// INICIO 

let ud = numInt - parseInt(numInt/10) * 10


if (ud === 4) {
    console.log("El número termina en 4")
} else
    {console.log("El número no termina en 4")
} 

*/

// FIN

// 2) Leer un número entero y determinar si tiene 3 digitos. 

/* Algoritmo tresDigitos 

let num = prompt("Introduzca un número para comprobación");

// INICIO 

if (num > 100 && num < 999 ) {
    console.log("El número ingresado tiene 3 (TRES) dígitos.")
} else {
    console.log("El número ingresado tiene MENOS o MÁS de 3 (TRES) dígitos.")
}

*/

// 3) Leer un número entero y determinar si es negativo. 

/* Algoritmo numNegativo  (Resuelto con DECISIONES en SECUENCIA) 

let numN = parseInt(prompt("Ingrese un número"))

// INICIO 

if (numN < 0) {
    console.log("El número es negativo.")
}
if (numN > 0) {
    console.log("El número no es negativo.")
}
if (numN === 0) {
    console.log("El número es igual a 0 (CERO) por lo tanto no es negativo.")
}

// FIN 

*/

// 4) Leer un número entero de dos dígitos y determinar a cuántp es igual la suma de sus dígitos. 

/* Algoritmo Sum_TwoDigites

// VARIABLES

let num = prompt("Ingrese el número a identificar");
let ud = num - Math.floor(num/10) * 10;
let pd = Math.floor(num/10);

// INICIO 

if (num > 10 && num < 99) {
    const sum = ud + pd; 
    console.log(`La suma de los dos dígitos es de ${sum}`)
} else {
    console.log("El número ingresado no es de dos dígitos.")
} */

// FIN 

// 5) Leer un número entero de dos dígitos y determinar si ambos dígitos son pares. 

/* Algoritmo digitos_PAR 

// VARIABLES

let num = parseInt(prompt("Ingrese un número de dos dígitos"));
let pd = Math.floor(num/10);
let ud = num - Math.floor(num/10) * 10;

// Función para comprobar si un dato es de tipo ENTERO

 const soloNumerosInt = i => {
    if (Number.isInteger(i) == false) {
        console.log("El dato ingresado no es de tipo ENTERO")
    } else {
        console.log("El número ingresado tiene MÁS o MENOS de DOS dígitos")
    }
} 

// INICIO

if (num > 10 && num < 99) {
    if (pd % 2 == 0 && ud % 2 == 0) {
            console.log("Ambos digitos son números PAR")
    } else {
        if (pd % 2 == 0) {
                console.log(`El PRIMER DÍGITO (${pd}) es PAR.`)
        } else {
                console.log(`El PRIMER DÍGITO (${pd}) es IMPAR.`)
        }
        if (ud % 2 == 0) {
                console.log(`El ÚLTIMO DÍGITO (${ud}) es PAR.`)
        } else {
                console.log(`El ÚLTIMO DÍGITO (${ud}) es IMPAR.`)
        }
        }
} else {
     soloNumerosInt(num)
}
*/

