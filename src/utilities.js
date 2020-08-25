const getArrayOfNums = function (pointA, pointB) {
  const array = [];
  const end = Math.max(pointA, pointB);
  let start = Math.min(pointA, pointB);
  for (start; start <= end; start++) {
    array.push(start);
  }
  return array.slice();
};

module.exports = { getArrayOfNums };
