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

export {
  isEven,
  getRandomInt,
  getExpression,
  getRandomOperation,
  operationsArr,
  operationsMap,
};
