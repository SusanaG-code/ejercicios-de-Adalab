'use strict';
// Vamos a crear una función get100Numbers que devuelve un array con los números del 1 al 100. Como no nos apetece tener que escribir 100 números a mano, usaremos un bucle y el método push para ir guardándolos. Para comprobar que los tenemos todos, vamos a ejecutar la función y loguearlos (con console.log) uno a uno en la consola en orden.



function get100Numbers() {
    const arrayOneHundred = []
    for (let i = 1; i <= 100; i++) {
        arrayOneHundred.push(i);
        console.log(arrayOneHundred.length);
    }

}
get100Numbers();

console.clear;

// function writeThis() {
//     const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
//     for (let i = 0; i < cars.length; i++) {
//         console.log(cars[i]);
//     }
// }
