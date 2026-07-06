import { add, subtract, multiply, divide, factorial } from "./math.js";

function main() {
  console.log("gha-insights-demo");
  console.log("2 + 3 =", add(2, 3));
  console.log("10 - 4 =", subtract(10, 4));
  console.log("6 * 7 =", multiply(6, 7));
  console.log("20 / 5 =", divide(20, 5));
  console.log("5! =", factorial(5));
}

main();
