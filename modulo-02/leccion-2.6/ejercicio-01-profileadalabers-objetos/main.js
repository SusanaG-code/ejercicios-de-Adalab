'use strict';

const adalaber1 = {
    name: "Susana",
    age: 34,
    job: 'periodista',
  };

// Muestra en p Mi nombre es Susana, tengo 34 años y soy periodista
const text = document.querySelector('.text');
text.innerHTML = `Mi nombre es ${adalaber1.name} tengo ${adalaber1.age} y soy ${adalaber1.job}`;
console.log (text);

