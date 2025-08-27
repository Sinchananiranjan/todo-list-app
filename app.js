// TDLA-6: Create task function
function createTask(taskName) {
    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');
    taskItem.textContent = taskName;

    // mark task complete when clicked
    taskItem.addEventListener('click', () => {
        taskItem.style.textDecoration = 'line-through';
    });

    taskList.appendChild(taskItem);
}

// helper function to call createTask from input
function addTask() {
    const input = document.getElementById('task-input');
    const taskName = input.value.trim();
    if (taskName !== "") {
        createTask(taskName);
        input.value = "";
    }
}
// TDLA-7: Edit task function
function editTask(taskItem) {
    const newTaskName = prompt("Edit task:", taskItem.textContent);
    if (newTaskName !== null && newTaskName.trim() !== "") {
        taskItem.textContent = newTaskName;
    }
}
