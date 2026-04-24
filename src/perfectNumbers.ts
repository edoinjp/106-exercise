export function classify(n: number): string {
  if (n <= 0)
    throw new Error("Classification is only possible for positive integers.");

  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) sum += i;
  }

  return sum === n ? "perfect" : sum > n ? "abundant" : "deficient";
}
