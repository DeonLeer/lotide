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

module.exports = middle;