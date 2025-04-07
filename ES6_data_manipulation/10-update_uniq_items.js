// Function to update the quantities of unique items in a Map
export default function updateUniqueItems(groceries) {
  // Check if the input is a Map; if not, throw an error
  if (!(groceries instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate through the Map entries
  for (const [item, quantity] of groceries.entries()) {
    // If the quantity is not 1 (not unique), update it to 100
    if (quantity === 1) {
      groceries.set(item, 100);
    }
  }
}
