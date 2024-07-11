export class Parallelogram {
    private _width: number = 0;
    private _height: number = 0;

    constructor(width: number, height: number) {
        this.setWidth(width);
        this.setHeight(height);
    }

    getWidth(): number {
        return this._width;
    }

    setWidth(width: number): void {
        this._width = width;
    }

    getHeight(): number {
        return this._height;
    }

    setHeight(height: number): void {
        this._height = height;
    }

    calculateArea(): number {
        return this._width * this._height;
    }
}