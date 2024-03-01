import "../sass/style.scss";
import {closeModal} from "./modal";
import {Task} from "./models/Task";

const taskContainer = document.getElementById("taskContainer") as HTMLElement;
const modal = document.getElementById("modal") as HTMLElement;
const titleInput = document.getElementById("titleInput") as HTMLInputElement;
const dateInput = document.getElementById("dateInput") as HTMLInputElement;
const descriptionInput = document.getElementById(
  "descriptionInput"
) as HTMLInputElement;

const taskData: Task[] = [];

document.getElementById("form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  if (titleInput && dateInput && descriptionInput) {
    const title = titleInput.value;
    const date = dateInput.value;
    const description = descriptionInput.value;

    taskData.push(new Task(title, date, description));

    console.log(taskData);
    createTask();
    resetForm();
  }
});

const resetForm = () => {
  titleInput.value = "";
  dateInput.value = "";
  descriptionInput.value = "";
  closeModal(modal);
};

const createTask = () => {
  taskContainer.innerHTML = "";

  taskData.forEach((todo, i) => {
    const taskCard = document.createElement("div");
    const taskTitle = document.createElement("p");
    const taskDate = document.createElement("p");
    const taskDescription = document.createElement("p");
    const deleteTaskButton = document.createElement("button");
    const taskStatusButton = document.createElement("button");

    taskTitle.innerHTML = todo.title;
    taskDate.innerHTML = todo.date;
    taskDescription.innerHTML = todo.description;
    deleteTaskButton.innerHTML = "Delete";
    taskStatusButton.innerHTML = todo.taskStatus ? "Done" : "Not done"

    deleteTaskButton.addEventListener("click", () => {
      taskData.splice(i, 1);
      createTask();
    });

    taskStatusButton.addEventListener("click", () => {
      todo.taskStatus = !todo.taskStatus;

      todo.taskStatus ? console.log("klar") : console.log("inte klar");
      
      createTask()
    })

    taskCard.appendChild(taskTitle);
    taskCard.appendChild(taskDate);
    taskCard.appendChild(taskDescription);
    taskCard.appendChild(deleteTaskButton);
    taskCard.appendChild(taskStatusButton);
    taskContainer.appendChild(taskCard);
  });
};
