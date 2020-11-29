'use strict';



function getiva(price) {
const iva = price * 0.21;
const total = price + iva;
// console.log (`el precio es ${price}el iva es ${iva}el total es 
//     ${total}`);
    const texto = (`el precio es ${price}el iva es ${iva}el total es ${total}`);
    return texto;

}

getiva(100);
const text = document.querySelector('.js-text');
text.innerHTML = getiva(100);