'use strict';


function get100Numbers() {
    const arrayOneHundred = []
    for (let i = 1; i <= 100; i++) {
        arrayOneHundred.push(i);
        console.log(arrayOneHundred.length);

    }
    return arrayOneHundred;
}



function getReversed100Numbers() {

    const arrayReverse = get100Numbers();

    console.log(arrayReverse.reverse());

}

getReversed100Numbers();


