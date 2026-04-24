function isLeapYear(year: number): boolean {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true; // Divisible by 400
      }
      return false; // Divisible by 100 but not 400
    }
    return true; // Divisible by 4 but not 100
  }
  return false; // Not divisible by 4
}


console.log(isLeapYear(1997)); // Expected: false
console.log(isLeapYear(1900)); // Expected: false
console.log(isLeapYear(2000)); // Expected: true
console.log(isLeapYear(2024)); // Expected: true
