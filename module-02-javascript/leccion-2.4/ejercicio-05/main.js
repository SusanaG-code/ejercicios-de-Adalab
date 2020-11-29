'use strict';

// Estamos trabajando en un proyecto bastante grande, donde hay que recoger muchos elementos de HTML desde JavaScript para interaccionar con ellos. Para no tener que escribir document.querySelector(...) tantas veces una compañera ha sugerido hacer una función llamada getEl.
// Esta función debe recibir por parámetro un selector de css y retornará el elemento de HTML correspondiente. Hemos quedado en que cuando llamemos a la función la sintaxis será tal que así:

function getEl(selector){
   return document.querySelector(selector);
}

const titleEl = getEl('.title');
console.log(titleEl);



const textEl = getEl(".text");
console.log(textEl);

const smallEl = getEl(".small");
console.log(smallEl);