function gigasecond(date: Date): Date {
  const GIGASECOND_IN_MS = 1_000_000_000 * 1000;
  return new Date(date.getTime() + GIGASECOND_IN_MS);
}

const birthDate = new Date(Date.UTC(2015, 0, 24, 22, 0, 0));
const anniversary = gigasecond(birthDate);

console.log(anniversary.toUTCString());
