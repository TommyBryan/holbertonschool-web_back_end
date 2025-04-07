// Function to create an Int8 Typed Array with a specific value at a given position
export default function createInt8TypedArray(length, position, value) {
  // Check if the position is outside the range of the array
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }

  // Create a new ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);

  // Create a DataView to manipulate the ArrayBuffer
  const view = new DataView(buffer);

  // Set the Int8 value at the specified position
  view.setInt8(position, value);

  // Return the DataView
  return view;
}
