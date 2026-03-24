let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");

        li.innerHTML = `
            <span onclick="toggleComplete(${index})" 
                  class="${task.completed ? 'completed' : ''}">
                ${task.text} (${task.deadline || "No deadline"})
            </span>
            <button onclick="deleteTask(${index})">❌</button>
        `;

        taskList.appendChild(li);
    });
}

function addTask() {
    let input = document.getElementById("taskInput");
    let deadline = document.getElementById("deadlineInput").value;

    if (input.value.trim() === "") return;

    tasks.push({
        text: input.value,
        completed: false,
        deadline: deadline
    });

    input.value = "";
    document.getElementById("deadlineInput").value = "";

    saveTasks();
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
}

// Load tasks on page load
renderTasks();