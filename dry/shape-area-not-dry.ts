function calculateCircleArea(radius: number): number {
  return Math.PI * radius * radius;
}

function calculateRectangleArea(length: number, width: number): number {
  return length * width;
}

function calculateTriangleArea(base: number, height: number): number {
  return 0.5 * base * height;
}

console.log(calculateCircleArea(5));
console.log(calculateRectangleArea(5, 10));
console.log(calculateTriangleArea(5, 10));