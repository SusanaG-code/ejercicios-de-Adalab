'use strict';

const users = [
    { name: 'María', isPremium: false },
    { name: 'Lucía', isPremium: true },
    { name: 'Susana', isPremium: true },
    { name: 'Rocío', isPremium: false },
    { name: 'Inmaculada', isPremium: false }
];


// Función para que a los usuarios premium queremos saludarles así 'Bienvenida Yolandao 'Bienvenida Yolanda' para el resto de usuarios.
function paintGreeting() {

    for (const premiumUsers of users) {

        if (premiumUsers.isPremium === true) {

            console.log(`'Bienvenida' ${premiumUsers.name}`);
        } else {
            console.log('Bienvenida Yolanda');
        }
    }
}


//integrar esa función en maps.

const greetingNames = users.map(paintGreeting);
console.log('Holaaa');


