var arr = [1, 8, 5, 5, 5, 4, 543, 543, 543, 543, 534, 90];
var unique = function (arr) {
  return Object.keys(
    arr.reduce((pre, cur) => {
      pre[cur] = null;
      return pre;
    }, {})
  );
};

console.log(unique(arr));
