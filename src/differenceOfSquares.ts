function differenceOfSquares(n: number): number {
  const squareOfSum = Math.pow((n * (n + 1)) / 2, 2);
  const sumOfSquares = (n * (n + 1) * (2 * n + 1)) / 6;

  return squareOfSum - sumOfSquares;
}

const n = 10;
const result = differenceOfSquares(n);

console.log(`The difference for N = ${n} is ${result}`);
