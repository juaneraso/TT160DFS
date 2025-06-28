console.log("Holaaa");
// Puedes usar let, const o var (let y const son modernos, var es antiguo)
let nombre = "Ana"; //se puede cambiar luego.
const edad = 30; // no se puede cambiar.
var activo = true; // ya casi no se recomienda (por problemas de alcance).

console.log(nombre);

//// Tipos de datos

let saludo = "Hola mundo";
let nombreDos = "Juan"; //String
// let mensaje = `Hola ${nombre}`; // Template string

// number
let edad_dos = 25;
let precio = 19.99;

console.log(typeof precio);

//boolean
let boleano_uno = true;
let tiene_permiso = false;

// Valor intencionalmente vacio
let resultadoDos = null;
console.log(typeof resultadoDos);

//undefined
let usuario;
console.log(usuario); // undefined

//Arrray
let frutas = ["manzana", "banana", "pera"];
console.log(frutas[0]); //

//Objetos estructura clave - valor
let persona = {
  nombre: "Carlos",
  edad: 28,
  activo: true,
  oficio: "Ingeniero",
};

console.log(persona.oficio);
console.log(persona["nombre"]);

Operadores;

let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.33
console.log(a % b); // 1 (módulo: el resto)

//Comparadores

console.log(5 === "5"); // false (compara valor y tipo)  mas util , mas seguro
console.log(5 != 3); // true
console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 >= 3); // true

let numberOne = 10;

let numberTwo = "10";

console.log(numberOne + numberTwo);

console.log(typeof numberOne);
console.log(typeof numberTwo);

console.log(numberOne === numberTwo);

//Comparadores logicos
console.log("*****Comparadore****");

let esAdulto = true;
let tieneID = false;

console.log(typeof esAdulto);

console.log(esAdulto && tieneID); // false (AND)
console.log(esAdulto || tieneID); // true (OR)
console.log(!esAdulto); // false (NOT)

Condicionales;

let carro = true;

if (carro) {
  console.log("Condicion Verdadera");
} else {
  console.log("Condicion Falsa");
}

console.log("****Ejercicio Notas****");

let nota = 80;

if (nota >= 90) {
  console.log("Excelente");
} else if (nota >= 70) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}

for (inicio; condición; incremento) {
  // Código que se repite
}

console.log("*******************Ciclos**************************");

for (let i = 0; i <= 5; i += 2) {
  // console.log("Repetición #" + i);
  console.log(i * 10);
}

let paises = [10, 20, 30];

// for (let j = 0; j <= 2; j++) {
//   console.log(paises[j]);
// }

//Solo arrays -- recorrerlo
for (let country of paises) {
  console.log(country);
}

function inicial() {
  console.log("****Hola campistas***");
}

inicial();

let juan = "Juan";

function saludar(nombre) {
  console.log("Hola, " + nombre);
}

saludar("juan");

function sumar(a, b) {
  console.log(a + b);
}

sumar(3, 5);

function restar(a, b) {
  return a - b;
}

let resultado = restar(3, 5);

console.log(resultado);

function estudiante(nombre, apellido) {
  return nombre + " " + apellido;
}

let estudianteUno = estudiante("Mateo", "Velez");

let estudianteDos = estudiante("Laura", "Hernandez");

console.log(estudianteUno);

console.log(estudianteDos);

//Hola
