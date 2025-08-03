// Function to extract an array of student IDs from a list of student objects
export default function getListStudentIds(students) {
  // Check if the input is an array; if not, return an empty array
  if (!Array.isArray(students)) {
    return [];
  }
  // Use the map function to create a new array containing only the 'id' of each student object
  return students.map((student) => student.id);
}
