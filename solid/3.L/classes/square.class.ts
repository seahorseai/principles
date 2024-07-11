import { Parallelogram } from "./parallelogram.class";

export class Square extends Parallelogram {
    constructor(side: number) {
      super(side, side);
    }
  
    getSide(): number {
      return this.getWidth(); // This method is a plus to get the side
    }
  }