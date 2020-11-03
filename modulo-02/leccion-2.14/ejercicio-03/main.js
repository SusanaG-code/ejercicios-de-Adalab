'use strict';
// Vamos a realizar el típico mensaje que aparece en un blog con la información de hace cuanto se escribió un post. Por ejemplo, con el texto: "escrito hace 30 segundos". Al principio escribiremos en pantalla "escrito hace 1 segundo" e iremos aumentando el número de segundos. Cuando lleve más de 59 segundos queremos que ponga "escrito hace 1 min".



let counter = 0;
let temp;

const incrementAndShowCounter = () => {
    counter++;
    const time = document.querySelector('.js-time');
    const text = document.querySelector('.js-text');
    time.innerHTML = counter;

    if (counter === 59) {
        text.innerHTML = 'escrito hace 1 min';
        clearInterval(temp);

    }
};

temp = setInterval(incrementAndShowCounter, 100);
