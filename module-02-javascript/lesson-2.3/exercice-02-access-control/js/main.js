'user strict';

//  Prepararemos una variable y le asignaremos un nombre. Posteriormente, si el nombre es el tuyo o el de tu compañera mostraremos el mensaje "Bienvenida, (tu nombre aquí)". 
// Si el nombre es diferente al tuyo deberá mostrar "Lo siento pero el usuario que has introducido no está registrado".

const name = 'Susana';

if (name === 'Sofía' || 'Susana') {
console.log (`Bienvenida, ${name}`)

} else {
console.log ('Lo siento pero el usuario que has introducido no está registrado')
}



//ternary
// name ? 'Bienvenida, ${name} : 'Lo siento pero el usuario que has introducido no está registrado';


