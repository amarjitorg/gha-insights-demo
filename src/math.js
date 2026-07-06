// A tiny math utility module used by the demo app and tests.

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

export function factorial(n) {
  if (n < 0) {
    throw new Error("factorial is undefined for negative numbers");
  }
  return n <= 1 ? 1 : n * factorial(n - 1);
}
