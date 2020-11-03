'use strict';
//creo un array que contiene tres objetos que tiene tres propiedades
const data = [

    {
        Nombre: 'Fulanito',
        Apellidos: 'Pérez',
        Teléfono: 66890234,

    },
    {
        Nombre: 'Menganito',
        Apellidos: 'Rodríguez',
        Teléfono: 657980234,

    },
    {
        Nombre: 'Chubi',
        Apellidos: 'González',
        Teléfono: 689456765,
    }

];

//seleccionamos los inputs del form
const fieldName = document.querySelector('.js-inputName');
const fieldSurname = document.querySelector('.js-inputSurname');
const fieldTel = document.querySelector('.js-inputTel');
const selectData = document.querySelector('.js-select');
//recorro el array de objetospara extraerlosdatos

for (let i = 0; i < data.length; i++) {
    const dataUser = data[i];
    console.log(dataUser);

    const optionsUser = document.createElement('option');
    const optionsContent = document.createTextNode(dataUser.Nombre);
    optionsUser.appendChild(optionsContent);
    selectData.appendChild(optionsUser);


}

function paintData() {
    for (const dataProperties of data) {
        if (selectData.value === dataProperties.Nombre) {
            fieldSurname.value = dataProperties.Apellidos;
            fieldTel.value = dataProperties.Teléfono;
            console.log('hola');
        }
    }


}

//evento sobre el change del select
selectData.addEventListener('change', paintData);

paintData()