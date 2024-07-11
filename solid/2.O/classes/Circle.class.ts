import { Shape } from "../interfaces/shape.interface";

export class Circle implements Shape {
    radius: number;
    constructor(radius: number) {
        this.radius = radius;
    }
    area(): number {
        return Math.PI * this.radius ** 2;
    }
}