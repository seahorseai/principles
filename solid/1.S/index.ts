import { Circle } from "./classes/Circle.class";
import { Square } from "./classes/Square.class";

const square = new Square(5);
console.log("Area of the square:", square.calculateArea());
console.log("Perimeter of the square:", square.calculatePerimeter());
const circle = new Circle(3);
console.log("Area of the circle:", circle.calculateArea());
console.log("Perimeter of the circle:", circle.calculatePerimeter());
