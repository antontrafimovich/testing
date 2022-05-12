import Math from "../math.mjs";

export const getSumOfPairs = (pairs) => {
  return pairs.reduce((result, pair) => result + Math.sum(...pair), 0);
};
