 export const openModal = (modal: HTMLElement) => {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
};

export const closeModal = (modal: HTMLElement) => {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
};

const openModalButtons = document.querySelectorAll(
  "[data-modal-target]"
) as NodeListOf<HTMLElement>;
const closeModalButtons = document.querySelectorAll(
  "[data-close-button]"
) as NodeListOf<HTMLElement>;
const overlay = document.getElementById("overlay") as HTMLElement;

openModalButtons.forEach((button: HTMLElement) => {
  button.addEventListener("click", () => {
    const modalTarget = button.dataset.modalTarget;
    if (modalTarget) {
      const modal = document.querySelector(modalTarget) as HTMLElement;
      openModal(modal);
    }
  });
});
closeModalButtons.forEach((button: HTMLElement) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal") as HTMLElement;
    closeModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(
    ".modal.active"
  ) as NodeListOf<HTMLElement>;
  modals.forEach((modal) => {
    if (modal instanceof HTMLElement) {
      closeModal(modal);
    }
  });
});
