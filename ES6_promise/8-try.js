export default function divideFunction(numerator, denominator) {
  // Check if the denominator is zero, if it is throw an error
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }
  return numerator / denominator;
}
