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
        console.log("The sum of the areas is:", totalArea);
        return totalArea;
    }
}