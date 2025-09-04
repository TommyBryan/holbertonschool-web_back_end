# Basic NodeJS Guide

## Learning Objectives

## 1. run javascript using NodeJS

JavaScript is a programming language that is commonly used to create interactive effects within web browsers. Node.js is a runtime environment that allows you to run JavaScript code outside of a web browser, typically on a server.

Also Node gives you access to system-level features, such as file system access, networking, and process management.

## 2. use NodeJS modules

Node.js has a built-in module system that allows you to organize your code into reusable components. You can create your own modules or use third-party modules from the npm registry.

Node uses CommonJS mmodules (require) and also supports ES6 modules (import/export).

Theres 3 types of modules in NodeJS:

- Core modules: Built-in modules: fs, os, http, path, etc.
- Local modules: Your own modules that you create in your project.
- Third-party modules: Modules that you can install from npm (Node Package Manager).

## 3. use specific Node JS module to read files

The `fs` (file system) module lets you read/write files on your computer.
Example:

```javascript
const fs = require("fs");

// Read file synchronously
const content = fs.readFileSync("example.txt", "utf8");
console.log(content);

// Read file asynchronously
fs.readFile("myfile.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("Async", data);
});
```

- `fs.readFileSync` blocks until done
- `fs.readFFile` is non-blocking (preferred for servers)

## 4. use process to access command line arguments and the environment

- `process.argv`: arguments when running the program
- `process.env`: environment variables

---

Example: arguments

```javascript
// file: args.js
console.log(process.argv);
```

Run:

```bash
node args.js hello 123
```

Output:

```css
['/usr/bin/node', '/path/args.js', 'hello', '123']
```

Slice off the first two elements to get just the arguments:

```javascript
const args = process.argv.slice(2);
console.log("Arguments:", args);
```

Example: environment

```bash
MY_NAME=Alice node env.js
```

```javascript
// env.js
console.log("Hello", process.env.MY_NAME);
```

Output:

```bash
Hello Alice
```

## 5. create a small HTTP server using Node JS

Node has a built-in `http` module.

Example: server.js

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from Node.js server!\n");
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```

Run:

```bash
node server.js
```

Visit: [http://localhost:3000](http://localhost:3000)

## 6. create a small HTTP server using Express JS

Express makes servers easier with less boilerplate.

Example:

```javascript
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(3000, () => {
  console.log("Express server running on http://localhost:3000");
});
```

Run:

```bash
node app.js
```

## 7. create advanced routes with Express JS

Express lets you define different routes, parameters, and methods.

Example:

```javascript
const express = require("express");
const app = express();

// Route with parameter
app.get("/user/:id", (req, res) => {
  res.send(`User ID is ${req.params.id}`);
});

// POST route
app.post("/login", (req, res) => {
  res.send("Login route");
});

// Multiple routes
app.get("/about", (req, res) => res.send("About page"));
app.get("/contact", (req, res) => res.send("Contact page"));

app.listen(3000, () => console.log("Advanced routes ready!"));
```

Try visiting:

- `/user/123`
- `/about`
- `/contact`

## 8. use ES6 with Node JS with Babel-node

Older Node versions didn’t fully support ES6 import/export. Babel converts modern JS into code Node understands.

Example with Babel:

```javascript
// add.js
export function add(a, b) {
  return a + b;
}

// main.js
import { add } from "./add.js";
console.log(add(2, 3));
```

Run with Babel:

```bash
npx babel-node main.js
```

This allows you to use modern JS syntax (import/export, async/await, classes).

## 9. use Nodemon to develop faster

Normally, you must restart your server manually after code changes:

```bash
node server.js
```

Nodemon does it automatically:

```bash
npx nodemon server.js
```

Example workflow:

Install nodemon:

```bash
npm install -g nodemon
```

Run your server:

```bash
nodemon server.js
```

Change code → server restarts automatically.

This speeds up development a lot.

---

## Summary

- **NodeJS basics:** Run JS outside browser.
- **Modules:** Reuse code (core, local, npm).
- **fs:** Read/write files.
- **process:** Control input/output, arguments, env.
- **HTTP (Node):** Build raw servers.
- **Express:** Easier/faster server creation.
- **Routes:** Handle different paths and actions.
- **Babel:** Use modern ES6+ syntax.
- **Nodemon:** Auto-restart server on changes.
