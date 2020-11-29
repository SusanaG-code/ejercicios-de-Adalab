'use strict';

const activableClass = document.querySelector('.div');
const title = document.querySelector ('.title');
const text = document.querySelector ('.text');


 if (activableClass.classList.contains ('warning')) {
    title.innerHTML = 'AVISO';
    text.innerHTML = 'Tenga cuidado';

  } else if (activableClass.classList.contains ('error')){
    title.innerHTML = 'ERROR';
    text.innerHTML = 'Ha surgido un error';

} else if (activableClass.classList.contains ('success')) {
    title.innerHTML = 'CORRECTO';
    text.innerHTML = 'Los datos son correctos';
   
} else {
    //valores por defecto en html
    title.innerHTML;
    text.innerHTML;
  }


