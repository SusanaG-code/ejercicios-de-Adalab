'use strict';

const lostNumbers = [4, 8, 15, 16, 23, 42];
const oddNumbers = []
// console.log(lostNumbers.length);

function bestLostNombers() {

    for (let i = 0; i < lostNumbers.length; i++) {
        if (lostNumbers[i] % 2 !== 0)
            // console.log(lostNumbers[i]);
            oddNumbers.push(lostNumbers[i]);
    }

}

const evenNumbers = []
for (let i = 0; i < lostNumbers.length; i++) {
    if (lostNumbers[i] % 2 === 0) {
        // console.log(lostNumbers[i]);
    }

}

console.log(oddNumbers);

bestLostNombers();
