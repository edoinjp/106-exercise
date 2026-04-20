function bobsResponse(question: string): string {
  const trimmedQuestion = question.trim();

  if (trimmedQuestion === "") {
    return "Fine. Be that way!";
  }

  const isYelling =
    /[a-z]/i.test(trimmedQuestion) &&
    trimmedQuestion === trimmedQuestion.toUpperCase();

  const isQuestion = trimmedQuestion.endsWith("?");

  if (isYelling && isQuestion) {
    return "Calm down, I know what I'm doing!";
  }

  if (isYelling) {
    return "Whoa, chill out!";
  }

  if (isQuestion) {
    return "Sure.";
  }

  return "Whatever.";
}


console.log(bobsResponse("hey!"));
