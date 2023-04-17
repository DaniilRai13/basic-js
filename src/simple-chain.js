const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  str:'',
  getLength() {
    return this.str.split('~~').length;
  },
  addLink(value ) {
    if (this.str.length) {
      this.str += `~~( ${value} )`;
    } else {
      this.str += `( ${value} )`;
    }
    return this;
  },
  removeLink(position ) {
    if (!Number.isInteger(position) || (position <= 0) || position > this.getLength()) {
      this.str = ''
      throw new Error("You can't remove incorrect link!");
    }

    const array = this.str.split('~~');
    array.splice((position - 1), 1);
    this.str = array.join('~~');
    return this;
  },
  reverseChain() {
    this.str = this.str.split('~~').reverse().join('~~');
    return this;
  },
  finishChain() {
    const finish = this.str;
    this.str = ''
    return finish;
  }
};

module.exports = {
  chainMaker
};
