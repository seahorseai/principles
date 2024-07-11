import { CalculateInterface } from "../Interfaces/Calculate.interface";
import { ShapeInterface } from "../Interfaces/shape.interface";


export class Square implements ShapeInterface, CalculateInterface {
    private side: number;
    constructor(side: number) {
        this.side = side;
    }
    area(): number {
        return this.side * this.side;
    }
    calculate(): number {
        return this.area();
    }
}