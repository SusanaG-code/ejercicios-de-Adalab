'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
let userAvatar = 'http://www.fillmurray.com/300/300';


const avatarContent = document.querySelector(".user__avatar");
avatarContent.setAttribute('src', userAvatar);
let userAvatar = '';
userAvatar || DEFAULT_AVATAR;

const avatarContent = document.querySelector(".user__avatar");
avatarContent.setAttribute('src', DEFAULT_AVATAR);
userAvatar|| DEFAULT_AVATAR;
console.log (avatarContent);

// si no tenemos datos del avatar del usuario, se muestre el avatar por defecto








