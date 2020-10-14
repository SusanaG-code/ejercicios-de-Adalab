'use strict';


// Crear una página HTML con un párrafo en el que ponga Hola y un botón. Cuando se pulse el botón hay que cambiar ese texto por "Mi primer click, ¡ole yo y la mujer que me parió!


//we get the element to listen
const button = document.querySelector('.btn');
const text = document.querySelector('.text');


//handler
function changeText () {
    text.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!";
  }

  //listener en el html del elemento
  button.addEventListener("click", changeText);
