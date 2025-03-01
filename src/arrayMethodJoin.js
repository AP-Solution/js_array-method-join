'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let outString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        outString += '';
      } else {
        outString += this[i];
      }

      if (i !== this.length - 1) {
        outString += separator;
      }
    }

    return outString;
  };
}

module.exports = applyCustomJoin;
