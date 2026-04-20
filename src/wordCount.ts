function countWords(subtitle: string): Record<string, number> {
  const words = subtitle.toLowerCase().match(/[a-z0-9']+/g);
  const counts: Record<string, number> = {};

  if (words) {
    for (const word of words) {
      counts[word] = (counts[word] || 0) + 1;
    }
  }

  return counts;
}

const subtitleText: string =
  "\"That's the password: 'PASSWORD 123'!\", cried the Special Agent.\nSo I fled.";
const result = countWords(subtitleText);

console.log(result);
