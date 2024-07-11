import { GeometricShape } from "../interfaces/GeometricShape.interface";

export class Circle implements GeometricShape {
    private radius: number;
    constructor(radius: number) {
      this.radius = radius;
    }
    calculateArea(): number {
      return Math.PI * Math.pow(this.radius, 2);
    }
    calculatePerimeter(): number {
      return 2 * Math.PI * this.radius;
    }
  }