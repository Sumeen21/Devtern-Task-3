const taskList = document.getElementById("taskList");
const completedTaskList = document.getElementById("completedTaskList");

function addTask() {
    const taskInput = document.getElementById("task");
    const dueDateInput = document.getElementById("dueDate");
    
    const taskText = taskInput.value.trim();
    const dueDate = dueDateInput.value;

    if (taskText !== "" && dueDate !== "") {
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", toggleCompleted);
        const label = document.createElement("label");
        label.textContent = taskText;
        const dateLabel = document.createElement("span");
        dateLabel.textContent = "Due Date: " + dueDate;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", deleteTask);

        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(dateLabel);
        li.appendChild(deleteButton);

        taskList.appendChild(li);

        taskInput.value = "";
        dueDateInput.value = "";
    }
}

function toggleCompleted() {
    const listItem = this.parentNode;
    if (this.checked) {
        listItem.classList.add("completed");
        completedTaskList.appendChild(listItem);
    } else {
        listItem.classList.remove("completed");
        taskList.appendChild(listItem);
    }
}

function deleteTask() {
    const listItem = this.parentNode;
    listItem.parentNode.removeChild(listItem);
}
