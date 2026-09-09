/* Открытие и закрытие модального окна «Сохранить на память».
   Отправка формы отменяется явно, чтобы страница ни при каких условиях не перезагружалась. */

const saveButton = document.querySelector('.save-button');
const dialog = document.querySelector('.dialog');
const dialogForm = document.querySelector('.dialog__form');

saveButton.addEventListener('click', (evt) => {
  evt.preventDefault();

  if (!dialog.open) {
    dialog.showModal();
  }
});

dialogForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (dialog.open) {
    dialog.close();
  }
});
