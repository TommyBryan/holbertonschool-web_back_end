export default function getListStudentIds(students) {
  // Check if students is an array if not return an empty array
  if (!Array.isArray(students)) {
    return [];
  }
  // Map the students array to an array of student IDs
  return students.map((student) => student.id);
}
