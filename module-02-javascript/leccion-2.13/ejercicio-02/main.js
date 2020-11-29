'use strict';

// const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada']; y queremos conseguir otro array con los saludos, por ejemplo, 'Bienvenida Yolanda'. ¿Podríamos usar map para que nos echase una mano?


const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const nameGreetings = names.map(name => `Bienvenida ${name}`);

console.log(nameGreetings);

