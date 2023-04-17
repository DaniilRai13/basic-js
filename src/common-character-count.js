const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(first, sec) {
  let countLetters = 0;
  let arr = first.split('');

  for (let i = 0; i < sec.length; i++) {
    // console.log(arr.indexOf(sec[i]))
    let index = arr.indexOf(sec[i]);
    if (index >= 0) {
      countLetters++;
      arr.splice(index, 1);
    }
  }
  return countLetters;
}
getCommonCharacterCount('aabcc','adcaa')
module.exports = {
  getCommonCharacterCount
};
