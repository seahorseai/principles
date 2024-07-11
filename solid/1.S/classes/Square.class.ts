import { GeometricShape } from "../interfaces/GeometricShape.interface";

export class Square implements GeometricShape {
    private side: number;
    constructor(side: number) {
      this.side = side;
    }
    calculateArea(): number {
      return this.side * this.side;
    }
    calculatePerimeter(): number {
      return 4 * this.side;
    }
  }