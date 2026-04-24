export function findAnagrams(target: string, candidates: string[]): string[] {
  const lowerTarget = target.toLowerCase();
  const sortedTarget = [...lowerTarget].sort().join("");

  return candidates.filter((candidate) => {
    const lowerCandidate = candidate.toLowerCase();
    return (
      lowerCandidate !== lowerTarget &&
      [...lowerCandidate].sort().join("") === sortedTarget
    );
  });
}
