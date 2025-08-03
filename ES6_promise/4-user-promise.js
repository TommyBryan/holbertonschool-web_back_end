export default function signUpUser(firstName, lastName) {
  return Promise.resolve({ firstName, lastName }); // This is a promise that resolves to an object
}
