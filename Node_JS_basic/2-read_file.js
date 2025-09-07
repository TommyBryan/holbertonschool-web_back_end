// fs module allows to work with the file system
const fs = require('fs');

function countStudents(path) {
  try {
    // Read file content
    const data = fs.readFileSync(path, 'utf8');
    // Split into non-empty lines
    const lines = data.split('\n').filter(line => line.trim() !== '');
    // Skip header
    const studentRows = lines.slice(1);

    const students = {};
    let totalStudents = 0;

    // Process each student row
    studentRows.forEach(row => {
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
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;


