function calculateArea(shape: string, ...dimensions: number[]): number {
  switch (shape) {
    case 'circle':
      return Math.PI * dimensions[0] * dimensions[0];
    case 'rectangle':
      return dimensions[0] * dimensions[1];
    case 'triangle':
      return 0.5 * dimensions[0] * dimensions[1];
    default:
      throw new Error('Unknown shape');
  }
}

console.log(calculateArea('circle', 5));
console.log(calculateArea('rectangle', 5, 10));
console.log(calculateArea('triangle', 5, 10));