import { modal, taskData } from "./main";
import { closeModal } from "./modal";

export const titleInput = document.getElementById(
  "titleInput"
) as HTMLInputElement;
export const dateInput = document.getElementById(
  "dateInput"
) as HTMLInputElement;
export const descriptionInput = document.getElementById(
  "descriptionInput"
) as HTMLInputElement;

const taskContainer = document.getElementById("taskContainer") as HTMLElement;

export const createTask = () => {
  localStorage.setItem("todos", JSON.stringify(taskData));

  if (taskContainer) {
    taskContainer.innerHTML = "";
  }

  taskData.forEach((todo, i) => {
    const taskCard = document.createElement("div");
    const taskTitle = document.createElement("p");
    const taskDate = document.createElement("p");
    const taskDescription = document.createElement("p");
    const deleteTaskButton = document.createElement("button");
    const taskStatusButton = document.createElement("button");
    const editTaskButton = document.createElement("button");

    taskCard.className = "task-card";
    taskTitle.className = "task-card-title";
    taskDate.className = "task-card-date";
    taskDescription.className = "task-card-description";

    taskTitle.innerHTML = todo.title;
    taskDate.innerHTML = todo.date;
    taskDescription.innerHTML = todo.description;

    deleteTaskButton.innerHTML = "Delete";
    taskStatusButton.innerHTML = todo.taskStatus ? "Not done" : " Done";
    editTaskButton.innerHTML = "Edit";

    deleteTaskButton.addEventListener("click", () => {
      taskData.splice(i, 1);
      createTask();
    });

    taskStatusButton.addEventListener("click", () => {
      todo.taskStatus = !todo.taskStatus;
      if (todo.taskStatus) {
        taskCard.style.opacity = "0.5"; // Set color to red if task is not done
        taskStatusButton.innerHTML = "Not done";
      } else {
        taskStatusButton.innerHTML = "Done";
        taskCard.style.opacity = "1"; // Set color to black if task is done
      }
      localStorage.setItem("todos", JSON.stringify(taskData));
    });

    if (todo.taskStatus) {
      taskCard.style.opacity = "0.5"; // Set color to red if task is not done
    } else {
      taskCard.style.opacity = "1"; // Set color to black if task is done
    }

    taskCard.appendChild(taskTitle);
    taskCard.appendChild(taskDate);
    taskCard.appendChild(taskDescription);
    taskCard.appendChild(deleteTaskButton);
    taskCard.appendChild(taskStatusButton);
    taskCard.appendChild(editTaskButton);
    taskContainer.appendChild(taskCard);
  });
};
export const resetForm = () => {
  titleInput.value = "";
  dateInput.value = "";
  descriptionInput.value = "";
  closeModal(modal);
};
