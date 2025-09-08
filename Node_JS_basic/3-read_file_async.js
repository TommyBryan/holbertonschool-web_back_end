// fs module allows to work with the file system
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Read file asynchronously
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      try {
        // Split into non-empty lines
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        // Skip header
        const studentRows = lines.slice(1);

        const students = {};
        let totalStudents = 0;

        // Process each student row
        studentRows.forEach((row) => {
          const [firstname, lastname, age, field] = row.split(',');
          if (firstname && lastname && age && field) {
            if (!students[field]) students[field] = [];
            students[field].push(firstname.trim());
            totalStudents += 1;
          }
        });

        // Output results
        console.log(`Number of students: ${totalStudents}`);
        for (const [field, names] of Object.entries(students)) {
          console.log(
            `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`,
          );
        }

        resolve(); // Promise fulfilled
      } catch (err) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

module.exports = countStudents;
