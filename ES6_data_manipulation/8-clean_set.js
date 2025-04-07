export default function cleanSet(set, startString) {
  const result = [...set]
    .filter((item) => item.startswith(startString))
    .map((item) => item.slice(startString.length))
    .join('-');
  return result;
}
