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

const findKey = function(array, callback) {
  for (let item in array) {
    if (callback(array[item])) {
      return item;
    }
  }
};

let result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"


assertArraysEqual(result, "noma");