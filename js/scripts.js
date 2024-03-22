let body = document.body;

//Create a text input field and append it to the body
let textInput = document.createElement('input');
textInput.setAttribute("type", "text");
body.appendChild(textInput);

//Create a submit button
let submit = document.createElement('button');
submit.textContent = "Add Task";
body.appendChild(submit);

//Create a list
let listRoot = document.createElement("ul");
body.appendChild(listRoot);

//Create a reference to tasks
let tasks = document.querySelector("li");

//Function for adding tasks
function addTask(text){
  if(text !== "")
  {
    let task = document.createElement("li");
    task.textContent = text;
    listRoot.appendChild(task);
  }
}

//Add task when the button is clicked
submit.addEventListener("click", function(){
  const task = textInput.value;
  addTask(task);
});

