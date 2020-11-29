'use strict';

const adalabers = [
    {
        name: 'María',
        age: 29,
        job: 'Diseñadora',

    },

    {
        name: 'Lucía',
        age: 31,
        job: 'Ingeniera química',

    },
    {

        name: 'Susana',
        age: 34,
        job: 'Periodista',
    },
    {

        name: 'Rocío',
        age: 25,
        job: 'Actriz',
    },

    {

        name: 'Inmaculada',
        age: 21,
        job: 'Diseñadora',
    }

];


function countAdalabers() {
    console.log('El número de adalabers es ' + adalabers.length);
}
countAdalabers();

let acc = 0;
function averageAge() {
    for (let i = 0; i < adalabers.length; i++) {
        acc += adalabers[i].age;
    }
}

let x = 99;
let y = 0;
let z  ;
function theYoungest() {
    for (let i = 0; i < adalabers.length; i++) {
        if (adalabers[i].age < x) {
            x = adalabers[i].age;
            y = i;
            z = adalabers [y].name;
        }
    }
}