const assertEqual = function(actual, expected) {
  let pass = "";
  let logical = "";
  if (actual === expected) {
    pass = "Passed";
    logical = "===";
  } else if (actual !== expected) {
    pass = "Failed";
    logical = "==!";
  }
  console.log(`Assertion ${pass}: [actual] ${logical} [expected]`);
};

const eqArrays = (arr1, arr2) => {
 
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }    
  } return true
}
console.log(eqArrays([1, 2, 3], [1, 2, "3"]));