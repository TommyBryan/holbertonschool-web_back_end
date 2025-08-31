export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  const filteredValues = [];
  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      filteredValues.push(value.substring(startString.length));
    }
  }

  return filteredValues.join('-');
}
