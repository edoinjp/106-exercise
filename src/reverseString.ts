function reverseString(input: string): string {
  return input.split("").reverse().join("");
}

console.log(reverseString("string"));
console.log(reverseString("eminem"));
console.log(reverseString("racecar"));
