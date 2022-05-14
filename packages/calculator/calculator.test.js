const Math = require("math");
// import { expect, fn, test } from "../test/test.mjs";
// import jest from "jest";
const { getSumOfPairs } = require("./calculator");

test("Calculator pairs sum works", () => {
  console.log(Math);
  jest.spyOn(Math, "sum");
  Math.sum.mockImplementation((v1, v2) => v1);

  const data = [
    [1, 2],
    [3, 4],
  ];

  const result = getSumOfPairs(data);
  console.log(Math.sum.mock.calls);

  expect(result).toBe(4);
  expect(Math.sum.mock.calls.length).toBe(2);
});
