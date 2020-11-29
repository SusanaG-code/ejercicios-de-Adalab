'use strict';

//aray con tres elementos
const cities = ['Madrid', 'París', 'Nueva York'];

//selecciono las opciones vacías
const selectOptions = document.querySelector('.options');
console.log(selectOptions);

//recorro array para extraer los datos
for (let i = 0; i < cities.length; i++) {
    const citiesList = cities[i];

    //creo una opción vacía dentro del select por cada iteración
    const newOptions = document.createElement('option');

    //creo el contenido  de cada option con las ciudades
    const optionsContent = document.createTextNode(citiesList);

    //añado a cada option dicho contenido
    //option creada//appendChild//nuevo contenido
    newOptions.appendChild(optionsContent);
    //añado cada opción alselect
    //select del html//appenchild//nuevasoption
    selectOptions.appendChild(newOptions);
}

//comprobar el value de cada opción en
function paintImg() {

    if (selectOptions.value === 'París') {
        //añado atributo imagen a cada opción
        selectOptions.setAttribute('img', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQu8WwSui95GOAZHUZ-EmaoIZjOGTL2zmv5gw&usqp=CAU');
        console.log('yParis');
    }
}

//evento al seleccionar las opciones
selectOptions.addEventListener('change', paintImg);


