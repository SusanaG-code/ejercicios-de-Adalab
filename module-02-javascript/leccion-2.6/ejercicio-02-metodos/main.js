'use strict';

const adalaber1 = {
    name: "Susana",
    age: 34,
    job: 'periodista',
    
  };

 adalaber1.job = 'runner';

// Añade un método (una función) run que muestre en la consola (lo llamamos loguear) la frase 'Estoy corriendo'.

adalaber1.run = function action () {
    console.log("Estoy corriendo");
}
adalaber1.run();


// Ahora, vamos a añadir un nuevo método runAMarathon que toma un parámetro distance que es un número. Al ejecutarlo, debe mostrarse en la consola el texto 'Estoy corriendo un maratón de 50 kilómetros' siendo 50 el valor del argumento distance que le hemos pasado.
adalaber1.sport = function runAMarathon(distance) {
console.log(`Estoy corriendo un maratón de ${distance} kilómetros.`);
 };
adalaber1.sport(50);


