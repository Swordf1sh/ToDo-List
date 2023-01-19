let addTaskButton = document.getElementById("add-task-button");
let inputField = document.getElementById("input-task");
let taskList = document.getElementById("task-list");

addTaskButton.addEventListener("click", function() {
    addTask();
});


function addTask() {
    // create list item
    let li = document.createElement("li");
    // create checkbox and append
    let inputChild = document.createElement("input")
    inputChild.type = "checkbox"
    li.append(inputChild);
    // create span text and append
    let spanChild = document.createElement("span");
    spanChild.className = "task";
    spanChild.textContent = inputField.value;
    li.append(spanChild);
    // create and append close button
    let closeChild = document.createElement("button");
    closeChild.className = "delete-btn";
    closeChild.textContent = "X";
    closeChild.setAttribute("onclick", "deleteTask(this)");
    li.append(closeChild);
    // append generated li to ul
    taskList.append(li);
    // remove text from input field
    inputField.value = "";
}

function deleteTask(obj) {
    obj.parentNode.remove();
}