import { test } from "node:test";
import assert from "node:assert/strict";
import { add, subtract, multiply, divide, factorial } from "../src/math.js";

test("add", () => {
  assert.equal(add(2, 3), 5);
  assert.equal(add(-1, 1), 0);
});

test("subtract", () => {
  assert.equal(subtract(10, 4), 6);
});

test("multiply", () => {
  assert.equal(multiply(6, 7), 42);
});

test("divide", () => {
  assert.equal(divide(20, 5), 4);
  assert.throws(() => divide(1, 0), /Cannot divide by zero/);
});

test("factorial", () => {
  assert.equal(factorial(0), 1);
  assert.equal(factorial(5), 120);
  assert.throws(() => factorial(-1), /negative/);
});
