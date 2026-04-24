export function parse(phrase: string): string {
  return (
    phrase.replace(/_/g, "").match(/[A-Z]+(?![a-z])|[A-Z][a-z]+|[a-z]+/g) || []
  )
    .map((word) => word[0].toUpperCase())
    .join("");
}
