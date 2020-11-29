"use strict";

// //class
class Square {
  constructor(side) {
    this.side = side;
  }
  perimeter() {
    return this.side * 4;
  }
  area() {
    return Math.pow(this.side, 2);
  }
}

// //instancia de un lado
const squareOneSide = new Square(1);
console.log(squareOneSide.perimeter());
console.log(squareOneSide.area());
// //instancia de 3 lados
const squareThreeSides = new Square(3);
console.log(squareThreeSides.perimeter());
console.log(squareThreeSides.area());

// //instancia de 7 lados
const squareSevenSides = new Square(7);
console.log(squareSevenSides.perimeter());
console.log(squareSevenSides.area());
