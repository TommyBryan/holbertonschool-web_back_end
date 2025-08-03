// This function returns a promise based on the boolean parameter `success`.
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    // If `success` is true, resolve the promise with an object containing status and body.
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      // If `success` is false, reject the promise with an error message.
      reject(new Error('The fake API is not working currently'));
    }
  });
}
