'use strict';

const btn = document.querySelector(".js-dog");

function getDogImage() {
    fetch("https:dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            const img = document.querySelector("img");
            img.src = data.message;
            img.alt = "Un perro";
        });
}

const getImage = getDogImage;


const btn2 = document.querySelector(".js-chi");
function getDogImage2() {

    fetch("https://dog.ceo/api/breed/chihuahua/images/random")

        .then(response => response.json())
        .then(chiData => {
            console.log(chiData);
            const img = document.querySelector("img");
            img.src = chiData.message;
            img.alt = "Un chihuaua";
        });
}


btn2.addEventListener("click", getDogImage2);
btn.addEventListener("click", getDogImage);