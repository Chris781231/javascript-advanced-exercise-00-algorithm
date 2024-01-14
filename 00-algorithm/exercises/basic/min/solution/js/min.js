const getTheSmallestElement = (arr) => {
  if (arr.length === 0) return undefined;

  let min = arr[0];
  arr.forEach((item) => (item < min ? (min = item) : null));
  return min;
};

export default getTheSmallestElement;
