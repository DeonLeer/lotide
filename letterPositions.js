const eqArrays = (arr1, arr2) => {
 
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  } return true;
};

const assertArraysEqual = (arr1, arr2) => {
  let pass = "";
  let logical = "";
  if (eqArrays(arr1, arr2)) {
    pass = "Passed";
    logical = "===";
  } else if (!eqArrays(arr1, arr2)) {
    pass = "Failed";
    logical = "!==";
  }
  console.log(`Assertion ${pass}: [array 1] ${logical} [array 2]`);
};

const letterPositions = (sentence) => {
  const results = {};
  let counter = 0;
  for (let letter of sentence) {
    if (letter !== " "){
      if (results[letter] === undefined) {
        results[letter] = [counter];
      } else {
        results[letter].push(counter);
      }
    }
    counter += 1;
  }
  return results;
};
