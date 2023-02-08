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

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if (char === ' ') {
      continue;
    }
    if (results[char]) {
      results[char].push(i);
    } else {
      results[char] = [i];
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello hello").e, [1, 7]);