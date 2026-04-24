export function isIsogram(phrase: string): boolean {
  const letters = phrase.toLowerCase().replace(/[\s-]/g, "");
  return new Set(letters).size === letters.length;
}
