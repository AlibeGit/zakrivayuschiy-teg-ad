/* Открытие и закрытие модального окна «Сохранить на память». */

const saveButton = document.querySelector('.save-button');
const dialog = document.querySelector('.dialog');
const dialogButton = document.querySelector('.dialog__button');

saveButton.addEventListener('click', () => {
  dialog.showModal();
});

dialogButton.addEventListener('click', () => {
  dialog.close();
});
