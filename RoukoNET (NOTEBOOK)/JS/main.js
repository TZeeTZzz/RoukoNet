// Boludeando con JavaScript - Parte 1. 

const miguelFunction = (a , b) => {
    if (a < b) {
        console.log("Si cacho, es menor que b")
    } else {
        console.log("No, le erraste")
    }
};

miguelFunction(10, 5);
miguelFunction(2, 10)

const properthyMethod = {
    Nombre : "Francisco", 
    Apellido : "Adoué",
    Edad : 23, 
    Pelo : hairLenght =>
        console.log(`Hoy tiene el pelo ${hairLenght}`),
}
properthyMethod.Pelo("corto");

console.log(properthyMethod);

console.log(properthyMethod.Nombre);

properthyMethod.Pelo("largo")


// Funciones que retornan valores (se guardan)

function multiply(num1 = 0, num2 = 0) {
    return num1 * num2
};

const resultado1 = multiply(2, 4);
const resultado2 = multiply(2, 8)

console.log(resultado1 * 2); // Aquí utilice el valor que se guardó en la variable resultado (2 * 4) y lo multipliqué por 2.
console.log(resultado2 * resultado1); 

// Acá un quilombo 

const resultado1_Guardado = resultado1 * 2

const resultado3 = resultado1_Guardado + resultado2 + resultado1

console.log(resultado3) 

// For Loop 

for (i = 0; i <= 50; i++) {
    console.table(i)
};



for (i = 1; i <= 200; i++) {
    if(i % 2 == 0) {
        console.log(`El número ${i} es PAR`)
    } else {
        console.log(`El número ${i} es IMPAR`)
    }
}

// Programación Orientada a Objetos (POO)

/** Object Literal **/

const perro = {
        nombre: "Rouko",
        edad: 15, 
        raza: "Spaniel Bretón",
        color: "Blanco y marrón",
        activo: true,
}

/** Obect Constructor **/

function Perro(nombre, edad, raza, color, activo) {
    this.nombre = nombre;
    this.edad = edad;
    this.raza = raza;
    this.color = color;
    this.activo = activo
}

const perro1 = new Perro("Rouko", 15, "Spaniel Bretón", "Blanco y marrón", true)
const perro2 = new Perro("Panchito", 13, "NN", "Marrón claro", true)
const perro3 = new Perro("Luna", 8, "NN", "Blanco y negro", true)
const perro4 = new Perro("Oreja", 12, "NN", "Marrón y negro", false)

console.table(perro1)
console.table(perro2)
console.table(perro3)
console.table(perro4)

// Prototypes // En este caso creamos una función asociada al objeto "Perro" creado arriba. No se podrá utilizar en otro objeto.

Perro.prototype.nombreYEdad = function() {
    return `El perro/a se llama ${this.nombre} y su edad es de ${this.edad} años`
}

console.log(perro1.nombreYEdad())
console.log(perro2.nombreYEdad())
console.log(perro3.nombreYEdad())
console.log(perro4.nombreYEdad())

// Prompt-eando un poco.


let nombreMascota; 
let edadMascota; 

// nombreMascota = prompt("Introduzca el nombre de su mascota:", "" /* Luego de la coma irá el valor por defecto, aquí lo dejamos vacío para que no haya ninguno*/);
// edadMascota = prompt("Introduzca la edad de su mascota:", "");

// document.write("Su mascota se llama: ", nombreMascota, ".", "<br>");
// document.write("La edad de su mascota es de ", edadMascota, " años.");


// Classes

class Producto {
    constructor(nombre, métodoCocción, elementsNeeded, tiempoCocción) {
        this.nombre = nombre;
        this.métodoCocción = métodoCocción;
        this.elementsNeeded = elementsNeeded;
        this.tiempoCocción = tiempoCocción
    }

    /* Aquí puedo integrar una función para esta clase */

    elementosRequeridosFalafel() {
        return `Se necesitan los siguientes elementos: ${this.elementsNeeded}`
    }

}

const producto1 = new Producto("Falafel", "Freír", ["Garbanzos", " Ajo", " Cebolla", " Limón"], "15min") 
const producto2 = new Producto("Tortas negras", "Hornear", ["Harina", "Azúcar", "Azúcar negra", "Agua", "Sal", "Levadura"], "1hora")

console.log(producto1.elementosRequeridosFalafel())
console.table(producto2)
console.log(producto2.elementsNeeded)














