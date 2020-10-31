const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callBack){
  const results = [];
  for (let item of array) {
    results.push(callBack(item));
  }
  return results;
};
const results1 = map(words, word => word[0]);
console.log(results1);