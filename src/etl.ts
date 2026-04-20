type OldFormat = { [key: string]: string[] };
type NewFormat = { [key: string]: number };

export function transform(old: OldFormat): NewFormat {
  const result: NewFormat = {};

  for (const score in old) {
    const points = Number(score);
    const letters = old[score];

    for (const letter of letters) {
      result[letter.toLowerCase()] = points;
    }
  }

  return result;
}

const oldData = {
  1: ["A", "E", "I", "O", "U"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
};

const newData = transform(oldData);
console.log(newData);
