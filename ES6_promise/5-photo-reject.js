export default function uploadPhoto(filename) {
  return Promise.reject(new Error(`${filename} cannot be processed`));
  // This is a promise that rejects with an error
}
