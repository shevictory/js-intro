"use strict";

const a1 = (b) => (c) => b + c;
// debugger;
console.log(`a1(5)(6)`, a1(5)(6));
const a2 = function (b) {
  return function (c) {
    return b + c;
  };
};
console.log(`a2(5)(6)`, a2(5)(6));

const sum = (op1, op2) => op1 + op2;
const mult = (op1, op2) => op1 * op2;
const opAB = (op) => (a, b) => op(a, b);
const sumAB = opAB(sum);
const multAB = opAB(mult);
