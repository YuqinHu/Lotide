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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const word = ["apple", "sad", "c", "de", "asl"];
const results2 = map(word, word => word[0]);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [ 'a', 's', 'c', 'd', 'a' ]);