const taskListForm = document.getElementById("newTaskList");

taskListForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const newTaskInputField = document.getElementById("newTask");

  const newTask1 = { task: newTaskInputField.value };

  const addedNewTask = document.createElement("div");
  addedNewTask.classList.add("addedTask");

  addedNewTask.innerHTML = `<div class="card" onclick="done(event)"><p>${newTask.value}</p>
<button onclick="deleteTask(event)">DELETE</button></div>`;

  const sectionForNewTasks = document.getElementById("myList");
  sectionForNewTasks.appendChild(addedNewTask);

  newTaskInputField.value = "";
});

const deleteTask = function (e) {
  const clickedButton = e.target;
  //   console.log(clickedButton.parentElement.);
  const reallyRemove = confirm("Vuoi davvero eliminare la task?");
  if (reallyRemove) {
    clickedButton.parentElement.remove();
  }
};

const done = function (e) {
  e.target.style.textDecoration = "line-through";
};
