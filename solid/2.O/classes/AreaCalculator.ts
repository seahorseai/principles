import { Shape } from "../interfaces/shape.interface";

export class AreaCalculator {
    shapes: Shape[];
    constructor(shapes: Shape[] = []) {
        this.shapes = shapes;
    }
    sum(): number {
        let totalArea = 0;
        for (const shape of this.shapes) {
            totalArea += shape.area();
        }
        console.log("La suma de las áreas es:", totalArea);
        return totalArea;
    }
}