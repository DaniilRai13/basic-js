const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let max = 0;

    let count = 1;

    arr.forEach(item => {
      if (Array.isArray(item)) {
        const elem = this.calculateDepth(item);


        if (elem > max) {
          max = elem;
        }

      }
    });
    return max+count;
  }
}

module.exports = {
  DepthCalculator
};
