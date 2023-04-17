const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = String(n).split("")
  if (arr[0] < arr[1]) return parseInt(arr.slice(1, arr.length).join(""))
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i + 1] && arr[i] <= arr[i - 1]) {
      arr.splice(i, 1)
      break
    } else if (i == arr.length - 1) {
      arr.splice(i, 1)
      break
    }
  }
  return parseInt(arr.join(""))
}
deleteDigit(1001)
module.exports = {
  deleteDigit
};
