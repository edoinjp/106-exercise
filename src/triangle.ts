function getTriangleType(a: number, b: number, c: number): string | null {
  if (a <= 0 || b <= 0 || c <= 0) return null;
  if (a + b < c || a + c < b || b + c < a) return null;
  const uniqueSides = new Set([a, b, c]).size;

  if (uniqueSides === 1) return "equilateral";
  if (uniqueSides === 2) return "isosceles";
  return "scalene";
}

console.log(getTriangleType(3, 3, 3));
console.log(getTriangleType(3, 4, 4));
console.log(getTriangleType(3, 4, 5));
