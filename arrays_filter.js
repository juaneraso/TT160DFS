let array = [5, 10, 15, 20, 25, 30, 35];

// For convencional

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }
//for of

for (let elemento of array) {
  console.log(elemento);
}

console.log("*****Objetos****");

let persona = {
  nombre: "Ana",
  edad: 30,
  cedula: 1085322578,
};

let personas = [
  { nombre: "Julio", edad: "30" },
  { nombre: "Paola", edad: "33" },
  { nombre: "Paula", edad: "34" },
];

for (let persona of personas) {
  console.log(persona.edad);
}

for (let clave in personas) {
  console.log(clave + ":" + personas[clave].nombre);
}

// 📌 ¿Qué hace filter()?
//El método .filter() crea un nuevo arreglo con
// todos los elementos que cumplen una condición
// (es decir, que retornan true en la función que le pasas).

console.log("*****Filter****");

let arrayFiltrado = [5, 10, 15, 20, 25, 30, 35];
let mayores10 = arrayFiltrado.filter((numero) => numero > 10);

console.log(mayores10); // [12, 20]

let mayor10 = [];

console.log("****forma extensa***");
for (let pos of array) {
  if (pos > 10) {
    mayor10.push(pos);
  }
}
console.log(mayor10);
