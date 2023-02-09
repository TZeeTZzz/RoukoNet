// CICLOS: EJEMPLOS UTILIZANDO ESTRUCTURAS DE CICLOS. 

/* 1) Leer un número entero y determinar cuántos dígitos tiene */

/* Con WHILE 

let numero = parseInt(prompt("Dígite un número entero"));
let cuentaDígitos = 0;

// INICIO 

while (numero >= 1 || numero <= -1) {
    cuentaDígitos = cuentaDígitos + 1;
    numero = numero/10;
}

// FIN

console.log(cuentaDígitos) // No lo pude hacer igual que en el libro ya que, con esa resolución (poniendo el 0 como comparativo) me daba números raros.
*/

/* Con DO WHILE 

let numero = parseInt(prompt("Dígite un número entero"));
let cuentaDígitos = 0;

// INICIO

do {
    cuentaDígitos = cuentaDígitos + 1;
    numero = numero/10;
} while (numero >= 1);


// FIN

numero = parseInt(prompt("Por favor, repita el número")) // Funciona para en el template de abajo muestre el número que se ingresó; pero no es tan funcional ya que te podes confundir el número y te mostrará otra cosa.

const numeroIngresado = function () {
    console.log(`El número ingresado (${numero})  tiene "${cuentaDígitos}" dígitos.`)
}

numeroIngresado()

*/

/* 2) Leer dos números enteros y mostrar todos los enteros comprendidos entre el menor y el mayor. */

/* Con WHILE 

let numero1 = parseInt(prompt("Dígite su primer número entero."));
let numero2 = parseInt(prompt("Dígite su segundo número entero."))
let aux; 

// INICIO 

if (numero1 < numero2) {
    aux = numero1;
    while (aux <= numero2) {
        console.log(aux)
        aux = aux + 1;
    } // Fin_while
} // Fin_if

if (numero2 < numero1) {
    aux = numero2;
    while (aux <= numero1) {
        console.log(aux)
        aux = aux + 1;
    } // Fin_while
} // Fin_if

if (numero1 === numero2) {
    console.log("Los números son iguales.")
}
*/

/* Con FOR 

let numero1 = parseInt(prompt("Dígite su primer número entero."));
let numero2 = parseInt(prompt("Dígite su segundo número entero."))
let aux; 

// INICIO 

if (numero1 < numero2) {
    for (let aux = numero1; aux <= numero2; aux++) {
        console.log(aux)
    } // Fin_For
} else {
    for (let aux = numero2; aux <= numero1; aux++) {
        console.log(aux)
    } // Fin_For
} // En este caso utilice la función de la estructura de decisiones if - else y no dos if en secuencia como anteriormente. 

// FIN.

*/

/* Con DO WHILE */

let numero1 = parseInt(prompt("Dígite su primer número entero."));
let numero2 = parseInt(prompt("Dígite su segundo número entero."))
let aux;

if (numero1 < numero2) {
    aux = numero1
    do {
        console.log(aux)
        aux = aux + 1;
    } while (aux <= numero2);
} 
if (numero2 < numero1) {
    aux = numero2
    do {
        console.log(aux)
        aux = aux + 1;
    } while (aux <= numero1);
}
if (numero1 === numero2) {
    console.log("Los números son iguales.")
}


