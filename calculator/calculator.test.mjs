import Math from "../math.mjs";
import { expect, fn, test, spyOn } from "../test.mjs";
import { getSumOfPairs } from "./calculator.mjs";

test("Calculator pairs sum works", () => {
  spyOn(Math, "sum");
  const restore = Math.sum.mockImplementation((v1, v2) => v1);

  const data = [
    [1, 2],
    [3, 4],
  ];

  const result = getSumOfPairs(data);
  console.log(Math.sum.mock.calls);

  expect(result).toBe(4);
  expect(Math.sum.mock.calls.length).toBe(2);
  restore();
  restore();
});
