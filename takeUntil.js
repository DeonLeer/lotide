const takeUntil = function(array, callback) {
  let result = [];
  for (let elem of array) {
    if (!callback(elem)) {
      result.push(elem);
    } else {
      return result;
    }
  }
};