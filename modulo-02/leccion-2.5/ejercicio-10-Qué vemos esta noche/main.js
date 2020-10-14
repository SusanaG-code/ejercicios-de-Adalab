'use strict';

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

const text = document.querySelector ('.text');
const button = document.querySelector ('.btn');


function film (event) {
    text.innerHTML = `<ul class="film-list">
    <li class="film1">${inception}  </li>
    <li class="film2">${theButterFlyEffect} </li>
    <li class="film3">${eternalSunshineOfTheSM}</li>
    <li class="film4">${blueVelvet}</li>
    <li class="film5">${split}</li>
    </ul>`;

    const film1 = document.querySelector ('.film1');
    const film2 = document.querySelector ('.film2');
    const film3 = document.querySelector ('.film3');
    const film4 = document.querySelector ('.film4');
    const film5 = document.querySelector ('.film5');
    const filmList = document.querySelector ('.film-list');

    function click2 (event) {
        const targetfilm = event.target.innerHTML;
        console.log (`El título de la peli es ${targetfilm}`);
        // const currentfilm = event.currentTarget.innerHTML;
        // console.log (`El título de la peli es ${currentfilm}`);
    }
filmList.addEventListener ('click',click2);

    // film1.addEventListener ('click', click2);
    // film2.addEventListener ('click', click2);
    // film3.addEventListener ('click', click2);
    // film4.addEventListener ('click', click2);
    // film5.addEventListener ('click', click2);
}

button.addEventListener ('click', film);
