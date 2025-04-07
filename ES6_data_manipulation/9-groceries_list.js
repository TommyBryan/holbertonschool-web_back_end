export default function groceriesList() {
  // Create a new Map object to store grocery items and their quantities
  const groceries = new Map();

  // Add grocery items to the Map using the set() method
  // Each item is a key (the name of the grocery) with a value (its quantity)
  groceries.set('Apples', 10);
  groceries.set('Tomatoes', 10);
  groceries.set('Pasta', 1);
  groceries.set('Rice', 1);
  groceries.set('Banana', 5);

  // Return the filled Map object
  return groceries;
}
