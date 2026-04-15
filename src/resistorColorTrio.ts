const COLORS: string[] = [
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

export function decodedResistorValue([band1, band2, band3]: string[]): string {
  const v1 = COLORS.indexOf(band1.toLowerCase());
  const v2 = COLORS.indexOf(band2.toLowerCase());
  const zeros = COLORS.indexOf(band3.toLowerCase());

  let value = (v1 * 10 + v2) * Math.pow(10, zeros);
  if (value >= 1000000) {
    return `${value / 1000000} megaohms`;
  } else if (value >= 1000) {
    return `${value / 1000} kiloohms`;
  } else {
    return `${value} ohms`;
  }
}

console.log(decodedResistorValue(["orange", "orange", "black"]));
console.log(decodedResistorValue(["orange", "orange", "orange"]));
