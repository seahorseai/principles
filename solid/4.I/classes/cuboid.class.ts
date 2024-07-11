import { ShapeInterface } from "../Interfaces/shape.interface";
import { ThreeDimensionalShapeInterface } from "../Interfaces/ThreeDimnesionalShape.interface";
import { CalculateInterface } from "../Interfaces/Calculate.interface";

export class Cuboid implements ShapeInterface, ThreeDimensionalShapeInterface, CalculateInterface {
    private length: number;
    private width: number;
    private height: number;
    constructor(length: number, width: number, height: number) {
        this.length = length;
        this.width = width;
        this.height = height;
    }
    area(): number {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
    volume(): number {
        return this.length * this.width * this.height;
    }
    calculate(): number {
        return this.area();
    }
}