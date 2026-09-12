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
});

function displayTasks() {
    taskList.innerHTML = "";

    tasks.forEach(function(task, index) {
        const taskElement = document.createElement("li");
        taskElement.textContent = task.name + " | Priority: " + task.priority;

        if (task.completed) {
            taskElement.classList.add("completed");
        }

        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.addEventListener("click", function() {
            task.completed = !task.completed;
            displayTasks();
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
            tasks.splice(index, 1)
            displayTasks();
        });

        taskElement.appendChild(completeButton);
        taskElement.appendChild(deleteButton);
        taskList.appendChild(taskElement);
    });
}