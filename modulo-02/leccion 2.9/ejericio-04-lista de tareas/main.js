'use strict';

const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    {
        name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
        completed: false
    }
];

const tareas = document.querySelector('.js-tasks');
let i = 0;
for (let i = 0; i < tasks.length; i++) {
    tareas.innerHTML += `<li>${tasks[i].name}</li>`;
    console.log(tasks[i].completed === false);


    if (tasks[i].completed === true) {
        tareas.classList.add('complete-task');
    }
    // if (completeTasks === false) {
    //     tareas.classList.add('incomplete');
    // }

}

