export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true; // Block-scoped, does NOT affect outer `var task`
    const task2 = false; // Block-scoped, does NOT affect outer `var task2`
  }

  return [task, task2];
}
