'use strict';

//array con 3 elementos
const numbers = [1, 2, 3];


//seleccionamos la lista ul vacío
const itemList = document.querySelector('.js-list');
console.log(itemList);

//recorro el array para extraer los datos
for (let i = 0; i < numbers.length; i++) {
    const arrayList = numbers[i];
    //creo un li vacío dentro de la ul por cada iteración
    const newList = document.createElement('li');

    //creo el contenido interior de cada li
    const listContent = document.createTextNode(arrayList);

    //añado elcontenido a cada li
    // nuevoli //appendChild//nuevo contenido
    newList.appendChild(listContent);

    //añado cada li nuevo a la lista ul
    itemList.appendChild(newList);

}