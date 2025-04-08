export default function guardrail(mathFunction) {
  const queue = []; // Initialize an array to store results and messages

  let result;
  try {
    result = mathFunction(); // Attempt to execute the provided function
    queue.push(result); // Add the result to the queue if successful
  } catch (error) {
    queue.push(error.toString()); // Add the error message to the queue if an exception occurs
  }

  queue.push('Guardrail was processed'); // Add a final message to indicate processing is complete

  return queue; // Return the queue containing results and messages
}
