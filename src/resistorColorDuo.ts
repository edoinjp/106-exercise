const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

export function decodedValue(inputColors: string[]): number {
  const firstDigit = COLORS.indexOf(inputColors[0]);
  const secondDigit = COLORS.indexOf(inputColors[1]);
  return firstDigit * 10 + secondDigit;
}

console.log(decodedValue(["brown", "green"]));
console.log(decodedValue(["brown", "green", "violet"]));
