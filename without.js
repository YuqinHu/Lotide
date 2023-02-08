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

const without  = function(actual, expected) {
  let output = [];
  for (let i = 0; i < actual.length; i++) {
    if (!expected.includes(actual[i])) {
      output.push(actual[i]);
    }
  }
  return output;
};

console.log(without([1, 2, 3], [1]));// => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"]));
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));