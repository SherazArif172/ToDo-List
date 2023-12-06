const input = document.querySelector("#add_task_input");
const submitBtn = document.querySelector("#add_todo");

submitBtn.addEventListener("click", (e) => {
  const todoValue = input.value;
  generateAndExpandElement(todoValue);
});

document.addEventListener("click", (e) => {
  if (e.target && e.target.classList.contains("delete")) {
    const mainParentElement = e.target.parentElement.parentElement;
    mainParentElement.remove();
  }
});

document.addEventListener("click", (e) => {
  if (e.target && e.target.classList.contains("edit")) {
    const value = prompt("Enter new value");
    const inputElement = e.target.previousElementSibling;
    inputElement.value = value;
  }
});

function generateAndExpandElement(value) {
  // Create a div element with class "tasks_list_inner"
  const tasksListInner = document.createElement("div");
  tasksListInner.className = "tasks_list_inner";

  // Create a div element with class "tasks_list_item"
  const tasksListItem = document.createElement("div");
  tasksListItem.className = "tasks_list_item";

  // Create an input element with type "text", id "item", and placeholder with value
  const inputElement = document.createElement("input");
  inputElement.type = "text";
  inputElement.id = "item";
  inputElement.placeholder = value;
  inputElement.value = value;
  inputElement.disabled = true;

  // Create a button element for "EDIT"
  const editButton = document.createElement("button");
  editButton.type = "submit";
  editButton.classList.add("edit");
  editButton.textContent = "EDIT";

  // Create a button element for "DELETE"
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  deleteButton.type = "submit";
  deleteButton.textContent = "DELETE";

  // Append the input element, edit button, and delete button to the tasksListItem
  tasksListItem.appendChild(inputElement);
  tasksListItem.appendChild(editButton);
  tasksListItem.appendChild(deleteButton);

  // Append the tasksListItem to the tasksListInner
  tasksListInner.appendChild(tasksListItem);

  const main_container = document.querySelector(".main_container");

  main_container.appendChild(tasksListInner);
}
