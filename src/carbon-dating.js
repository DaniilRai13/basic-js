const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sample) {
  if (typeof sample !== 'string' || sample.length === 0) return false

  if ( Number(sample) <= 0 || Number(sample) > MODERN_ACTIVITY || isNaN(sample) == true) {
    return false
  } else {
    return Math.ceil(Math.log(MODERN_ACTIVITY / Number(sample)) / (0.693 / HALF_LIFE_PERIOD), 1)
  }
}

module.exports = {
  dateSample
};
