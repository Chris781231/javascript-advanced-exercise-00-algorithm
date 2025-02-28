const getCountOfTheEvenElements = (arr) => {
  if (arr.length === 0) return undefined;
  let evenCount = 0;
  arr.forEach((item) => (item % 2 === 0 ? (evenCount += 1) : null));
  return evenCount;
};

export default getCountOfTheEvenElements;
