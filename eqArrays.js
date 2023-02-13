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

module.exports = eqArrays;