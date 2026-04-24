export function isArmstrongNumber(n: number): boolean {
  const digits = String(n).split('');
  const len = digits.length;

  const sum = digits.reduce((acc, digit) => {
    return acc + Math.pow(Number(digit), len);
  }, 0);

  return sum === n;
}
