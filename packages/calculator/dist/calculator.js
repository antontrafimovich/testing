"use strict";

const {
  sum
} = require("math");

const getSumOfPairs = pairs => {
  return pairs.reduce((result, pair) => result + sum(...pair), 0);
};

getSumOfPairs([[1, 2]]);
module.exports = {
  getSumOfPairs
};