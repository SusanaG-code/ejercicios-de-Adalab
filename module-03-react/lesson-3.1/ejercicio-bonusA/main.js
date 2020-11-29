"use strict";

// Un atributo para el número de lados (numberOfSides)
// Dos atributos más: para la longitud de la base (base) y de la altura (height)
// Un método para calcular el perímetro (perimeter) (multiplicar la longitud del lado base por el número de lados)
// Un método para calcular el área (area) (multiplicar base por altura)
class Polygon {
  constructor(numberOfSides, base, height) {
    this.numberOfSides = numberOfSides;
    this.base = base;
    this.height = height;
  }
  perimeter() {
    return this.base * this.numberOfSides;
  }
  area() {
    return this.base * this.height;
  }
}
//creo instancia y comprueblo que funcione,por ejemplo el método perímetro.
const figure = new Polygon(5, 5, 5);
console.log(figure.perimeter());

// La subclase Square tendrá:
// Un atributo lado (side) igual a la base
// Un constructor que recibirá exclusivamente la longitud del lado
class Square extends Polygon {
  constructor(side) {
    super(4, side, side);
  }
}

// La subclase Triangle tendrá:
// Un constructor que recibirá base y altura
// Un método area() que sobrescibirá al de la clase base. Devolverá la mitad de lo que devuelva llamar al área de la clase base (super.area() / 2)

class Triangle extends Polygon {
  constructor(base, height) {
    super(3, base, height);
  }
  area() {
    return super.area() / 2;
  }
}

// Crearemos dos instancias: un cuadrado de 4 de lado y un triángulo de 4 de base y 3 de altura. Llamaremos a los dos métodos en todas las instancias.

const squareFour = new Square(4);
console.log(squareFour.perimeter());
console.log(squareFour.area());

const TriangleThree = new Triangle(4, 3);
console.log(TriangleThree.perimeter());
console.log(TriangleThree.area());
