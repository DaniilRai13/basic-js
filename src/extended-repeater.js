const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options ) {
  let adSeparator = options.additionSeparator || '|';
  let repeatTimes = options.repeatTimes || 1;
  let adRepeatTimes = options.additionRepeatTimes || 1;
  let separator = options.separator || '+';

  let result = '';
  let adStr = '';
  let addition
  if(options.addition === undefined) addition = ''
  else addition = options.addition

  for (let i = 0; i < adRepeatTimes; i++) {
    adStr += addition + (i < adRepeatTimes - 1 ? adSeparator : '');
  }

  for (let i = 0; i < repeatTimes; i++) {
    result += str + adStr + (i < repeatTimes - 1 ? separator : '');
  }

  return result;
}

module.exports = {
  repeater
};
