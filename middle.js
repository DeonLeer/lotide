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

const middle = (arr) => {
  let midd = [];
  if (arr.length === 0 || arr.length === 1) {
    return midd;
  } else if (arr.length % 2 === 0) {
    midd = [arr[(arr.length / 2 - 1)], arr[(arr.length / 2)]];
    return midd;
  } else if (arr.length % 2 === 1) {
    midd = [arr[((arr.length - 1) / 2)]];
    return midd;
  }
};
