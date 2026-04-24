type LetterScores = { [key: string]: number };

const oldFormat = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"],
};

const transform = (oldData: { [key: string]: string[] }): LetterScores => {
  const newFormat: LetterScores = {};

  for (const [score, letters] of Object.entries(oldData)) {
    letters.forEach((letter) => {
      newFormat[letter.toLowerCase()] = Number(score);
    });
  }

  return newFormat;
};

const newLetterScores: LetterScores = transform(oldFormat);

console.log(newLetterScores);
