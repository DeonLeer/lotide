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
  } return true;
};

const eqObjects = (obj1, obj2) => {
  obj1Keys = Object.keys(obj1);
  obj2Keys = Object.keys(obj2);
  if (obj1Keys.length !== obj2Keys.length) {
    return false
  } else {
    counter = 0;
    for (let key of obj1Keys) {
      if (key !== obj2Keys[counter]) {
        return false;
      } else if (Array.isArray(obj1[key]) !== Array.isArray(obj2[key])){
        return false;
      } else if (Array.isArray(obj1[key]) === true ){
        if (eqArrays(obj1[key], obj2[key]) === false){
          return false
        }
      } else if ((obj1[key]) !== obj2[key]) {
        return false;
      } counter += 1
    }
  } return true;
};

const ab = { a: "1", b: "2" };
const ba = { a: "1", b: "2" };
const abc = { a: "1", b: "2", c: "3" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4]};
assertEqual(eqObjects(cd, cd2), true); 

