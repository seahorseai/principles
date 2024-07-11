import { AreaCalculator } from "./classes/AreaCalculator";
import { Circle } from "./classes/Circle.class";
import { Square } from "./classes/Square.class";
import { Shape } from "./interfaces/shape.interface";

const shapes: Shape[] = [new Square(5), new Circle(3)];
const calculator = new AreaCalculator(shapes);
calculator.sum();
