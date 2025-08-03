// Export a function named getResponseFromAPI as the default export
export default function getResponseFromAPI() {
  // Return a new Promise object
  // Only 'resolve' is used, so we omit 'reject' to avoid ESLint warning
  return new Promise((resolve) => {
    // Resolve the promise with a success message
    resolve('Success!');
  });
}
