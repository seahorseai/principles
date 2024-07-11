import { Square } from "./classes/square.class";
import { Cuboid } from "./classes/cuboid.class";

const square = new Square(5);
console.log("Área del cuadrado:", square.area());
console.log("Resultado del cálculo del cuadrado:", square.calculate()); 


const cuboid = new Cuboid(3, 4, 5);
console.log("Área del cuboide:", cuboid.area()); 
console.log("Volumen del cuboide:", cuboid.volume()); 
console.log("Resultado del cálculo del cuboide:", cuboid.calculate()); 
