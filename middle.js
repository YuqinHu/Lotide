const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return true;
  } else {
    return false;
  }
};


const eqArrays  = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    if (!assertEqual(actual[i],expected[i])) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual  = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const middle = function(array) {
  let middle = [];
  if (array.length < 3) {
    return middle;
  }
  if (array.length % 2 === 0) {
    middle.push(array[array.length / 2 - 1]);
    middle.push(array[array.length / 2]);
  } else {
    middle.push(array[Math.floor(array.length / 2)]);
  }
  return middle;
};


assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);