export function decimalPlaceLength(equation: string) {
  const decimalPart = equation.split(".")[1];

  if (!decimalPart) {
    return 0;
  }

  return decimalPart.length;
}

/** Parses the screen string to a format safe for mathjs.evaluate. */
export function parseEquation(equation: string) {
  let result = equation;
  result = result.replaceAll("×", "*");
  result = result.replaceAll("÷", "/");

  return result;
}
