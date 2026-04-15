const DNA_TO_RNA: Record<string, string> = {

  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
}


export function toRna(dna: string): string {
  return dna
  .split('')
  .map((nucleotite) => {
    const rna = DNA_TO_RNA[nucleotite]
    if (!rna) {
      throw new Error("invalid unput dna");

    }
    return rna;
  })

  .join("");
}


console.log(toRna("GCTA"));
console.log(toRna("ACGTGGT"));
