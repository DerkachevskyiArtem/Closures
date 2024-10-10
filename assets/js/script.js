'use strict';

function createMultiplier(x) {
  let accumulator = 1;

  function multiply(y) {
    accumulator *= y;
    return accumulator * x;
  }

  return multiply;
}

const multiply = createMultiplier(5);

// Task with Arrow function solution
const createMultiplierArrow = (x) => {
  let accumulator = 1;

  return (y) => (accumulator *= y) * x;
};

const multiplyArrow = createMultiplierArrow(5);
