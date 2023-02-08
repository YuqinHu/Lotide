const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return true;
  } else {
    return false;
  }
};


const eqArrays  = function(actual, expected){
  for (let i = 0; i < actual.length; i++){
    if (!assertEqual(actual[i],expected[i])){
      return false;
    }
  }
  return true;
};

const assertArraysEqual  = function(actual, expected){
  if (eqArrays(actual, expected)){
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

assertArraysEqual([1, 2, 3], [1, 2, 3]);

assertArraysEqual([1, 2, 3], [1, 2, 4]);
