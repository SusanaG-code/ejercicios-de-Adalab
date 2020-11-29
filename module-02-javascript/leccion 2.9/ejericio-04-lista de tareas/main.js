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

for (let i = 0; i < tasks.length; i++) {

    let classLi = '';
    if (tasks[i].completed === true) {
        classLi = 'complete-task';
    }
    if (tasks[i].completed === false) {
        classLi = '';
    }

    tareas.innerHTML += `<li class = "${classLi}">${tasks[i].name}</li>`;
    console.log(tasks[i].completed === false);

}

