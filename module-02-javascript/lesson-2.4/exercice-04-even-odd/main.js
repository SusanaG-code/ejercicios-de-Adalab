'use strict';


// Crear una función que reciba por parámetro un número y devuelva true si es par y false si es impar.
// Ejecutala e imprime el resultado para comprobar que funciona.



function evenNumber(a) {
    if (a % 2 === 0) {
      console.log('Its true'); 
      return true;
    } else {
      console.log('Its false');
      return false;
    }
  }


  const givenNumber = evenNumber (40);
  console.log(givenNumber);

