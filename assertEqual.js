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
  console.log(`Assertion ${pass}: [${actual}] ${logical} [${expected}]`);
};

module.exports = assertEqual;