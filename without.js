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

const without = (arr, excl) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < excl.length; j++) {
      if (arr[i] === excl[j]) {
        arr.splice(i, 1);
      }
    }
  } return arr;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
