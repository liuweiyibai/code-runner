function isTypeTest(type, content) {
  return Object.prototype.toString.call(content) === `[object ${type}]`;
}
// 1）批量生成函数
function isType(type) {
  // 偏函数
  return function (content) {
    return Object.prototype.toString.call(content) === `[object ${type}]`;
  };
}
let isString = isType('String');
let isArray = isType('Array');

console.log(isArray('hello'));
console.log(isArray(['hello']));
