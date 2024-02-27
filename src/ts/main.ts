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

  taskData.forEach((todo) => {
    const taskCard = document.createElement("div");
    const taskTitle = document.createElement("p");
    const taskDate = document.createElement("p");
    const taskDescription = document.createElement("p");

    taskTitle.innerHTML = todo.title;
    taskDate.innerHTML = todo.date;
    taskDescription.innerHTML = todo.description;

    taskCard.appendChild(taskTitle);
    taskCard.appendChild(taskDate);
    taskCard.appendChild(taskDescription);
    taskContainer.appendChild(taskCard);
  });
};
