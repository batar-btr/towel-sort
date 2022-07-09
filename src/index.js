
// You should implement your task here.

module.exports = function towelSort (matrix=[]) {
  return [].concat(...matrix.map((arr,idx)=> idx%2 === 1 ? arr.reverse() : arr));
}
