import { Shape } from "../interfaces/shape.interface";

export class Square implements Shape {
    length: number;
    constructor(length: number) {
        this.length = length;
    }
    area(): number {
        return this.length ** 2;
    }
}