import "../sass/style.scss";
import {
  createTask,
  dateInput,
  descriptionInput,
  resetForm,
  titleInput,
} from "./createTaskHTML";
import { Task } from "./models/Task";

export let taskData: Task[] = JSON.parse(localStorage.getItem("todos") || "[]");

export const modal = document.getElementById("modal") as HTMLElement;
const addTaskButton = document.getElementById("addTaskButton") as HTMLElement;

titleInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    dateInput.focus();
  }
});

addTaskButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (titleInput.value.trim() === "") {
    alert("Title cannot be empty");
    return;
  }

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
createTask();
