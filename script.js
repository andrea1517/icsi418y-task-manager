const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const priorityInput = document.querySelector("#priority-input");
const taskList = document.querySelector("#task-list");
const errorMessage = document.querySelector("#error-message");

const tasks = [];

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const taskName = taskInput.value;
    const taskPriority = priorityInput.value;

    if (taskName === null) {
        errorMessage.textContent = "Error! Please enter a valid task name.";
        return;
    }

    errorMessage.textContent = "";
    addTask(taskName, taskPriority);

    taskInput.value = "";
    taskInput.focus();
});

function addTask(name, priorityInput) {
    tasks.push(task);
    displayTasks();
}