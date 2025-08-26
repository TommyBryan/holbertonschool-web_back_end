export default function getStudentIdsSum(students) {
  // Calculate the sum of all student IDs
  return students.reduce((sum, student) => sum + student.id, 0);
}
