import _ from 'lodash';

const isEven = (number) => number % 2 === 0;

const getRandomInt = (min, max) => _.random(min, max);

const operationsArr = ['multiply', 'addition', 'subtract'];

const operationsMap = {
  multiply: {
    method: (a, b) => _.multiply(a, b),
    symbol: '*',
  },
  addition: {
    method: (a, b) => _.add(a, b),
    symbol: '+',
  },
  subtract: {
    method: (a, b) => _.subtract(a, b),
    symbol: '-',
  },
};

const getRandomOperation = (operations) => _.sample(operations);

const getExpression = (operation) => (a, b) => operation(a, b);

const getGreaterCommonDivisor = (a, b) => {
  if (!b) {
    return a;
  }

  return getGreaterCommonDivisor(b, a % b);
};

const progressionLength = 10;

const transformersArr = ['makeDouble'];
const transformersMap = {
  makeDouble: (a) => a * 2,
};

const makeProgression = (f) => (initial) => {
  const iter = (current, acc) => {
    if (acc.length === progressionLength) {
      return acc;
    }

    const newAcc = [...acc, current];
    const transformed = f(current);

    return iter(transformed, newAcc);
  };

  return iter(initial, []);
};

export {
  isEven,
  getRandomInt,
  getExpression,
  getRandomOperation,
  operationsArr,
  operationsMap,
  getGreaterCommonDivisor,
  transformersArr,
  transformersMap,
  makeProgression,
  progressionLength,
};
