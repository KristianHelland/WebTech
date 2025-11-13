
let tasks = [];

window.addEventListener("DOMContentLoaded", () => {

  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTaskButton");
  const output = document.getElementById("output");
  const taskList = document.getElementById("taskList");

  taskInput.focus();

  addTaskButton.addEventListener("click", addTask);


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

 
      if (task.completed) {
        li.style.textDecoration = "line-through";
      } else {
        li.style.textDecoration = "none";
      }

      console.log(tasks); 
    });

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(" " + task.text));

    taskList.appendChild(li);

    taskInput.value = "";
    taskInput.focus();

    output.textContent = "";
  }
  document.body.style.backgroundColor = "lightblue"

});
