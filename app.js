// TDLA-6: Create task function
function createTask(taskName) {
    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');
    taskItem.textContent = taskName;
    taskList.appendChild(taskItem);
}
function addTask() {
    const input = document.getElementById('task-input');
    const taskName = input.value.trim();
    if (taskName !== "") {
        createTask(taskName);
        input.value = "";
    } else {
        alert("Please enter a task name");
    }
}
