const Math = require("math");

const getSumOfPairs = (pairs) => {
  return pairs.reduce((result, pair) => result + Math.sum(...pair), 0);
};

module.exports = { getSumOfPairs };
