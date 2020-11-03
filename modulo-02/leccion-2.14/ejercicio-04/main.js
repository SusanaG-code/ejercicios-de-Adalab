'use strict';
// Con JavaScript, crear un código para mostrar una ventana en nuestro navegador una vez transcurridos 15 segundos que ponga "su sesión ha expirado" (creada usando HTML y CSS).


const sessionExpire = () => {
    const message = document.querySelector('.message');
    message.innerHTML = "su sesión ha expirado";
    console.log('jj');
    window.classList.add("windowRed");

}

setTimeout(sessionExpire, 15000);

// const removeMsg = () => {
//     const msg = document.querySelector('.msg');
//     msg.innerHTML = '';
//   };

//   setTimeout(removeMsg, 6000);