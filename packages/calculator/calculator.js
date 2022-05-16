const { sum } = require("math");

const getSumOfPairs = (pairs) => {
  return pairs.reduce((result, pair) => result + sum(...pair), 0);
};

module.exports = { getSumOfPairs };
