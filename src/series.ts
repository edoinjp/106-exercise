export function slices(series: string, n: number): string[] {
  if (!series) throw new Error('series cannot be empty');
  if (n > series.length) throw new Error('slice length cannot be greater than series length');
  if (n <= 0) throw new Error('slice length cannot be zero or negative');

  let res = [];
  for (let i = 0; i <= series.length - n; i++) {
    res.push(series.substring(i, i + n));
  }
  return res;
}
