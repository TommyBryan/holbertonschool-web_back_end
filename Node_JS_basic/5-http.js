const http = require('http');
const url = require('url');
const fs = require('fs');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  const reqUrl = url.parse(req.url, true);

  if (reqUrl.pathname === '/') {
    res.end('Hello Holberton School!');
  } else if (reqUrl.pathname === '/students') {
    const database = process.argv[2];
    res.write('This is the list of our students\n');

    countStudents(database)
      .then(() => {
        fs.readFile(database, 'utf8', (err, data) => {
          if (err) {
            res.end('Cannot load the database');
            return;
          }

          const lines = data.split('\n').filter((line) => line.trim() !== '');
          const studentRows = lines.slice(1);

          const students = {};
          let totalStudents = 0;

          studentRows.forEach((row) => {
            const [firstname, lastname, age, field] = row.split(',');
            if (firstname && lastname && age && field) {
              if (!students[field]) students[field] = [];
              students[field].push(firstname.trim());
              totalStudents += 1;
            }
          });

          res.write(`Number of students: ${totalStudents}\n`);
          for (const [field, names] of Object.entries(students)) {
            res.write(
              `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`,
            );
          }
          res.end();
        });
      })
      .catch(() => {
        res.end('Cannot load the database');
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app;
