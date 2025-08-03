// Import two functions from other files
// signUpUser handles user signup and returns a promise
// uploadPhoto handles photo upload and returns a promise
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

// Define an asynchronous function to handle profile signup
export default async function handleProfileSignup(firstName, lastName, fileName) {
  // Call the two functions with the provided arguments and store their promises
  const promise1 = signUpUser(firstName, lastName); // Promise for user signup
  const promise2 = uploadPhoto(fileName); // Promise for photo upload

  // Wait until both promises are settled (either resolved or rejected)
  const settledResults = await Promise.allSettled([promise1, promise2]);

  // Map over the settled results to format them
  return settledResults.map((result) => {
    const formattedResult = { status: result.status }; // Include the status of the promise

    // If the promise was fulfilled, include its value
    if (result.status === 'fulfilled') {
      formattedResult.value = result.value;
    } else {
      formattedResult.value = result.reason.toString();
    }

    return formattedResult; // Return the formatted result
  });
}
