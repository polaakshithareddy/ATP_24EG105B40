//task.js

import { validateTitle, validatePriority, validateDueDate } from "./validator.js";

const tasks = [];

// 1. Add new task
export function addTask(title, priority, dueDate) {

  if (!validateTitle(title)) {
    return "Invalid title";
  }

  if (!validatePriority(priority)) {
    return "Invalid priority";
  }

  if (!validateDueDate(dueDate)) {
    return "Due date must be in future";
  }

  const task = {
    id: tasks.length + 1,
    title,
    priority,
    dueDate,
    completed: false
  };

  tasks.push(task);
  return "Task added successfully";
}

// 2. Get all tasks
export function getAllTasks() {
  return tasks;
}

// 3. Mark task as complete
export function completeTask(taskId) {
  const task = tasks.find(t => t.id === taskId);

  if (task) {
    task.completed = true;
    return "Task completed";
  }

  return "Task not found";
}