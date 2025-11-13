
let tasks = [];

window.addEventListener("DOMContentLoaded", () => {

  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTaskButton");
  const output = document.getElementById("output");
  const taskList = document.getElementById("taskList");

  taskInput.focus();

  addTaskButton.addEventListener("click", addTask);

  function updateOutput() {
    const completedCount = tasks.filter(task => task.completed).length;
    const totalCount = tasks.length;
    output.textContent = `${completedCount}/${totalCount} completed`;
  }

  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      output.textContent = "Please enter a task before adding.";
      return;
    }

    const task = {
      text: taskText,
      completed: false
    };

    tasks.push(task);
    console.log(tasks);

    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";


    checkbox.addEventListener("change", () => {
      task.completed = checkbox.checked;
      li.style.textDecoration = task.completed ? "line-through" : "none";
      updateOutput();
      console.log(tasks);
    });

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(" " + task.text));
    taskList.appendChild(li);

    taskInput.value = "";
    taskInput.focus();
    updateOutput();
  }
    /* Razzle-Dazzle ;) */
  document.body.style.backgroundColor = "beige";
  document.getElementById("todo").style.color = "black";
  document.getElementById("taskInput").style.backgroundColor = "white";
  document.getElementById("taskInput").style.color = "black";
  document.getElementById("addTaskButton").style.backgroundColor = "purple";
  document.getElementById("addTaskButton").style.color = "white";
  document.getElementById("output").style.color = "black";
  document.getElementById("taskList").style.color = "black";

});



