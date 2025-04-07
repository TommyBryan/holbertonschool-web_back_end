// Import the two asynchronous functions from utils.js
import { uploadPhoto, createUser } from './utils';

// Define and export the main function that handles signup
export default function handleProfileSignup() {
  // Use Promise.all to run both promises in parallel
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
      // Destructure the results directly in the parameters
      // photo is the result of uploadPhoto(), user is from createUser()
      // Log the desired string to the console
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
      // If either uploadPhoto or createUser fails, handle it here
      console.log('Signup system offline');
    });
}
