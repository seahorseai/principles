import { Rectangle } from "./classes/rectangle.class";
import { Square } from "./classes/square.class";

const rectangle = new Rectangle(5, 10);
console.log("Area of the rectangle:", rectangle.calculateArea());

const square = new Square(5);
console.log("Area of the square:", square.calculateArea());
console.log("Side of the square:", square.getSide());

