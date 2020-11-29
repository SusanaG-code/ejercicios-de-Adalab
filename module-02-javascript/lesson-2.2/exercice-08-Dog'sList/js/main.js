const firstDogImage = 'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';



const perreteslist = document.querySelector('.perreteslist');
perreteslist.innerHTML= 
`<li>${firstDogName}<img src=${firstDogName}></li>
<li>${secondDogName}<img src=${secondDogImage}></li>
<li>${thirdDogName}<img src=${thirdDogImage}></li>
<li>Hola mundo ${firstDogName} </li>`;

