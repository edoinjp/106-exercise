function squareRoot(n: number): number {
  if (n < 0) throw new Error("Input must be a positive number.");
  if (n === 0 || n === 1) return n;

  let guess = n;
  while (guess * guess !== n) {
    guess = (guess + n / guess) / 2;
    guess = Math.floor(guess);
  }

  return guess;
}
console.log(squareRoot(25));
