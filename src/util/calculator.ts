export function decimalPlaceLength(result: string, length: number = 4) {
  const wholePart = result.split('.')[0];
  const decimalPart = result.split('.')[1];

  if (!decimalPart) {
    return result;
  }

  return `${wholePart}.${decimalPart.slice(0, length + 1)}`;
}

export function hasRepeatingDecimals(result: string) {
  const resultNumber = Number.parseFloat(result);
  const dividend = Math.floor(resultNumber);
  const divisor = 1;
  const maxIterations = 100; // Maximum number of iterations to prevent infinite loops
  let quotient = dividend / divisor;
  let remainder = dividend % divisor;
  let remainders = new Set();

  for (let i = 0; i < maxIterations; i++) {
    if (remainder === 0) {
      return false; // Non-repeating decimal
    }

    quotient = Math.floor((remainder * 10) / divisor);
    remainder = (remainder * 10) % divisor;

    if (remainders.has(remainder)) {
      return true; // Repeating decimal pattern found
    }

    remainders.add(remainder);
  }

  return false; // No repeating pattern found within the maximum iterations
}

/** Parses the screen string to a format safe for mathjs.evaluate. */
export function parseEquation(equation: string) {
  let result = equation;
  result = result.replaceAll('×', '*');
  result = result.replaceAll('÷', '/');

  return result;
}
