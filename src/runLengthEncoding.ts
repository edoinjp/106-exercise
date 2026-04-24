export function encode(input: string): string {
  return input.replace(/(.)\1+/g, (match, char) => match.length + char);
}

export function decode(input: string): string {
  return input.replace(/(\d+)(\D)/g, (_, count, char) => char.repeat(Number(count)));
}
