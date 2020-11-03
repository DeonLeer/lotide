const eqArrays = require('./eqArrays');

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
  console.log(`Assertion ${pass}: [${arr1}] ${logical} [${arr2}]`);
};


module.exports = assertArraysEqual