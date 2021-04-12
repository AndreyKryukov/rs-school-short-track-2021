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
  const nNew = n.toString().split('');
  for (let i = 0; i < nNew.length; i++) {
    nNew[i] = Number(nNew[i]);
  }
  const nMin = Math.min.apply(null, nNew);
  for (let i = 0; i < nNew.length; i++) {
    if (nNew[i] === nMin) {
      nNew.splice(i, 1);
    }
  }
  return Number(nNew.join(''));
}

module.exports = deleteDigit;
