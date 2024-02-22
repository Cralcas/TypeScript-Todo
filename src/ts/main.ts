import "../sass/style.scss";
import {taskModal} from "./modal";
import {Task} from "./models/Task";

// const addTaskButton = document.getElementById("addTaskButton") as HTMLElement;
const titleInput = document.getElementById("titleInput") as HTMLInputElement;
const dateInput = document.getElementById("dateInput") as HTMLInputElement;
const descriptionInput = document.getElementById(
  "descriptionInput"
) as HTMLInputElement;

const taskData: Task[] = [];

// const taskContainer = document.getElementById("taskContainer");

document.getElementById("form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  if (titleInput && dateInput && descriptionInput) {
    const title = titleInput.value;
    const date = dateInput.value;
    const description = descriptionInput.value;

    taskData.push(new Task(title, date, description));
  }
});
taskModal();
