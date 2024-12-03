import { Square } from "./classes/square.class";
import { Cuboid } from "./classes/cuboid.class";

const square = new Square(5);
console.log("Area of the square:", square.area());
console.log("Result of the calculation of the square:", square.calculate()); //Resultado del cálculo del cuadrado:", square.calculate()); 


const cuboid = new Cuboid(3, 4, 5);
console.log("Area of the cuboid:", cuboid.area()); 
console.log("Volume of the cuboid:", cuboid.volume()); 
console.log("Result of the calculation of the cuboid:", cuboid.calculate()); 