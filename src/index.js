document.addEventListener("DOMContentLoaded", () => {
  addingEventListener();
});

function addingEventListener() {
  document
    .getElementById("create-task-form")
    .addEventListener("submit", handleFormSubmit);
}

function handleFormSubmit (e){
  e.preventDefault()
  const task = e.target[0].value
  
  displayTask(task)
}

function displayTask(task){
  const taskUL = document.getElementById("tasks")
  
  const taskLi = document.createElement("li")
  
  taskLi.textContent = task
 
  taskUL.appendChild(taskLi)
}
