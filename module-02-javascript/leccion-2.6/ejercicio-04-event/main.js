'use strict';


//Prepare a button with an addEventListener
//type is a property

const button = document.querySelector ('.btn');

//handler
function logEvent(event) {
    console.log(event);
}


//listener
button.addEventListener('click',logEvent);

logEvent();