export function isPangram(sentence: string): boolean {
  const lettersOnly = sentence.toLowerCase().replace(/[^a-z]/g, "");
  const uniqueLetters = new Set(lettersOnly);

  return uniqueLetters.size === 26;
}
