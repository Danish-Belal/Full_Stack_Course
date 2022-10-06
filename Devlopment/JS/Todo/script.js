
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

let obj = {
     name : "Danish",
     age : 21
}

let toLocal = JSON.stringify(obj);  // stored an object in Local strong in form of obj.
let toObj = JSON.parse(toLocal);  // get a strign from local storage and convert it into obj.
