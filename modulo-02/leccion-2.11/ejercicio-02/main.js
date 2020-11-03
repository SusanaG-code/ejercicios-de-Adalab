
'use strict';



const newLocal = document.querySelector(".js-result");
// //función para saber que si el value dela usuario no está en el local storage entocnes debe guardarlo (sería en la función siguiente)
function paintcharacter() {
    debugger;
    let character = document.querySelector(".js-cast").value;
    localStorage.getItem(character);
    let characterUser = localStorage.getItem(character);
    const result = newLocal;
    console.log(result);

    if (characterUser !== null) {
        result.innerHTML += `<li>Personaje: ${characterUser.name}. Género: ${characterUser.gender}</li>`;
    }
    else {
        saveToLocalStorage();
    }
}



// //funcion para guardar el personaje en el local storage

function saveToLocalStorage() {
    let character = document.querySelector(".js-cast").value;
    fetch(`https:swapi.dev/api/people/?search=`)
        .then((response) => response.json())
        .then((data) => {
            const result = document.querySelector(".js-result");
            console.log('holaa');
            const dataString = JSON.stringify(data.results);
            localStorage.setItem(character, dataString);

        });
}



// for (const characterInfo of data.results) {
// //     result.innerHTML += `<li>Personaje: ${characterInfo.name}. Género: ${characterInfo.gender}</li>`;

const btn = document.querySelector(".js-btn")
btn.addEventListener("click", paintcharacter);


