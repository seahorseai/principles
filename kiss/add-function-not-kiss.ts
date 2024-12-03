function processInput(a: string, b: string): number {
  const num1 = parseInt(a, 10);
  const num2 = parseInt(b, 10);
  return num1 + num2;
}

function addNumbers(input1: string, input2: string): number {
  const result = processInput(input1, input2);
  return result;
}

console.log(addNumbers("3", "5"));