// 1 - Dada uma matriz, transforme em um array.

const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  const callback = (acc, atual) => {
    atual.forEach(element => acc.push(element));
    return acc
  } 
  let reduce = arrays.reduce(callback,[])
  return reduce
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
