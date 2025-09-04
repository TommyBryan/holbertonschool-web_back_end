// Display a welcome message and prompt the user for their name
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Configure standard input to use UTF-8 encoding
process.stdin.setEncoding('utf-8');

// Handle user input when data is available (readable event)
process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name !== null) {
    // Output the user's name
    process.stdout.write(`Your name is: ${name}`);
  }
});

// Handle the end of input (end event)
process.stdin.on('end', () => {
  // Notify that the software is closing
  process.stdout.write('This important software is now closing\n');
});
