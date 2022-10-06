
let inpTask = document.getElementById("inpTask");
let listTasks = document.getElementById("listTasks");

let i = 0, z = 0;
function addItemToList(taskName /* String */) {
     let newTaskListItem = document.createElement("li");
     newTaskListItem.className = "listItem";
     let removeBtn = document.createElement("button");
     removeBtn.className = "removeButton";
     removeBtn.innerText = "Remove";
     newTaskListItem.innerText = taskName;
     listTasks.appendChild(newTaskListItem);
     listTasks.appendChild(removeBtn);

}

function getNewTaskName() {
     return inpTask.value;
} /* return String */



let btnAdd = document.getElementById("btnAdd");
btnAdd.onclick = () => {
     let newTaskName = getNewTaskName();
     addItemToList(newTaskName);
     inpTask.value = "";
}

let btnRemove = document.getElementsByClassName("removeButton");
btnRemove.onclick = () => {
     let removeTast = document.getElementsByClassName("listItem");
     removeTast.remove();

}