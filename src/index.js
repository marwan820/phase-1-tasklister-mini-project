document.addEventListener("DOMContentLoaded", () => {
  addingEventListener();
});

let taskObjArray = 

function addingEventListener() {
  document
    .getElementById("create-task-form")
    .addEventListener("submit", handleFormSubmit);
    document.getElementById("sort-tasks").addingEventListener("change",sortTasks)
}

function handleFormSubmit (e){
  e.preventDefault()
  const task = e.target[0].value
  const priorityLevel = parseInt(e.target.priority.value)
  
  const taskObj = {task,priorityLevel}
  taskObjArray.push(taskObj)

  sortTasks()
  displayTasks()
}

function displayTasks(){
  const taskUL = document.getElementById("tasks")
  taskUL.innerHTML = ""

  taskObjArray..forEach(task => {
    const taskLi = document.createElement("li")
    const deleteBtn = document.createElement("button")
    
    deleteBtn.textContent = "x"
    deleteBtn.addEventListener("click", deleteTask)
    
    taskLi.textContent = task.task + " "
    taskLi.style.color = getPriorityColor(task.priorityLevel)
    taskLi.appendChild(deleteBtn)
    taskUL.appendChild(taskLi)
    
    
  });
  
  
}

function deleteTask(e){
 taskObjArray.filter() =>
  e.target.parentNode.remove()

}

function getPriorityColor(priorityLevel){
if (priorityLevel === 1 ) { 
  return "red"
  
} else if (priorityLevel === 2){
  return "blue"
  
}
else { 
  return "green"

}}

function sortTasks(){
  const sortTasksSelect = document.getElementById("sort-tasks")
  if(sortTasksSelect.value === "h-l"){
    taskObjArray.sort[(a,b) => a.priorityLevel - b.priorityLevel]
  } else{
    taskObjArray.sort[(a,b) => b.priorityLevel - a.priorityLevel]
  }
  displayTasks()
}