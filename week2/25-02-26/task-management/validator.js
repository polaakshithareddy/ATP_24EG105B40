
// validator.js

// 1. Validate task title (not empty, min 3 chars)
export function validateTitle(title) {
  if (!title || title.length < 3) {
    return false;
  }
  return true;
}

// 2. Validate priority (low, medium, high)
export function validatePriority(priority) {
  const allowed = ["low", "medium", "high"];
  return allowed.includes(priority.toLowerCase());
}

// 3. Validate due date (must be future date)
export function validateDueDate(date) {
  const today = new Date();
  const due = new Date(date);

  if (due > today) {
    return true;
  }
  return false;
}