const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
const errorMessage = document.querySelector("#error-message");

const tasks = [];

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const taskName = taskInput.value;
    const taskPriority = document.querySelector('input[name="priority"]:checked');

    if (taskName === "") {
        errorMessage.textContent = "Error! Please enter a valid task name.";
        return;
    }

    if (taskPriority === null) {
        errorMessage.textContent = "Error! Please select a priority."
        return;
    }

    const task = {
        name: taskName,
        priority: taskPriority.value,
        completed: false
    };
    
    tasks.push(task);
    errorMessage.textContent = "";

    displayTasks();

    taskInput.value = "";
    taskPriority.completed = false;
});

function displayTasks() {
    taskList.innerHTML = "";

    
}