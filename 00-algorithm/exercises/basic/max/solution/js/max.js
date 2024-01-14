const getTheLargestElement = (arr) => {
  if (arr.length === 0) return undefined;
  let max = arr[0];
  arr.forEach((item) => (item > max ? (max = item) : null));
  return max;
};

export default getTheLargestElement;
