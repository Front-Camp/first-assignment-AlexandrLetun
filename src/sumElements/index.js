/**
 *  This function should return sum of
 *  all numbers and strings which can be converted to numbers
 *  in passed array
 *
 * @param {Array<number|string>} arr - this is an array of numbers or strings
 * @return {number} - sum of all numbers of array
 * @example
 * sumElements([1, 2, 3]);          // 6
 * sumElements(['1', 'hi', 3]);     // 4
 * sumElements([Infinity, NaN, 1]); // 1
 */
const sumElements = arr => {
  return array.reduce((acc, elem) =>{
    if(typeof elem === 'number' && isFinite(elem) && Number.isInteger(elem)) {
      return acc+elem;
    }
    return 0;
  }, 0)
};

export default sumElements;
