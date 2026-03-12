
// app.js

import { addTask, getAllTasks, completeTask } from "./task.js";

// 1. Add some tasks
console.log(addTask("Finish assignment", "high", "2026-04-01"));
console.log(addTask("Buy groceries", "medium", "2026-03-20"));

// 2. Display all tasks
console.log("All Tasks:");
console.log(getAllTasks());

// 3. Complete a task
console.log(completeTask(1));

// 4. Display all tasks again
console.log("Updated Tasks:");
console.log(getAllTasks());