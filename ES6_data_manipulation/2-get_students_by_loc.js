export default function getStudentsByLocation(students, city) {
  // Check if array is valid
  if (!Array.isArray(students)) {
    return [];
  }
  // Filter students by location using filter()
  return students.filter((student) => student.location === city);
}
