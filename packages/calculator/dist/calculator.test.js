"use strict";

const { sum } = require("math"); // import { expect, fn, test } from "../test/test.mjs";
// import jest from "jest";

const { getSumOfPairs } = require("./calculator");

jest.mock("math");
test("Calculator pairs sum works", () => {
  const data = [
    [1, 2],
    [3, 4],
  ];
  const result = getSumOfPairs(data);
  expect(result).toBe(4);
  expect(sum.mock.calls.length).toBe(2);
  sum.mockRestore();
});
