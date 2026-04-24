const NUMBERS: string[] = [
  'no', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'
];

export function recite(start: number, count: number): string {
  const verses = [];

  for (let i = start; i > start - count; i--) {
    const current = NUMBERS[i].charAt(0).toUpperCase() + NUMBERS[i].slice(1);
    const next = NUMBERS[i - 1];

    const currentBottles = i === 1 ? 'bottle' : 'bottles';
    const nextBottles = (i - 1) === 1 ? 'bottle' : 'bottles';

    const verse =
      `${current} green ${currentBottles} hanging on the wall,\n` +
      `${current} green ${currentBottles} hanging on the wall,\n` +
      `And if one green bottle should accidentally fall,\n` +
      `There'll be ${next} green ${nextBottles} hanging on the wall.`;

    verses.push(verse);
  }

  return verses.join('\n\n');
}
