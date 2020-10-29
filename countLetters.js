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

const countLetters = (sentence) => {
  let counter = {};
  for (let letter of sentence) {
    if (letter !== " ") {
      if (counter[letter]) {
        counter[letter] += 1;
      } else {
        counter[letter] = 1;
      }
    }
  } return counter;
};

