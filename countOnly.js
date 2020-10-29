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

const countOnly = (allItems, itemsToCount) => {
  let countedItems = {};
  for (let item in itemsToCount) {
    if (itemsToCount[item] === true) {
      let num = 0;
      for (let count of allItems) {
        if (item === count) {
          num += 1;
        } 
      } if (num !== 0) {
        countedItems[item] = num;
      } 
    }
  } return countedItems;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);