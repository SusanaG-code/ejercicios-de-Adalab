"use strict";

//definir clase square

//método para calcular el perímetro del cuadrado

//método para calcular el área del cuadrado

//Calcularemos y mostraremos el perímetro y el área de un cuadrado de 9 de lado

class Square {
  perimeter(side) {
    return side * 4;
  }
  area(side) {
    return Math.pow(side, 2);
  }
}

//defino instancia que contiene los métodosy atrbutos de la clase
const squarePerim = new Square();
console.log(squarePerim.perimeter(9));
console.log(squarePerim.area(9));

// "use strict";
// class Dog {
//   bark() {
//     console.log("Woof, woof!");
//   }
// }

// const laika = new Dog();
// const hachiko = new Dog();

// laika.bark(); // Woof, woof!
// hachiko.bark(); // Woof, woof!
