const readline = require('readline'); // readline allow

const rl = readline.createInterface({
  input: process.stdin, // stdin = keyboard
  output: process.stdout, // stdout = screen
});

rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
  console.log(`Your name is: ${name}`);
  rl.close(
    console.log('This important software is now closing\n'),
  ); // Close the readline
});
