const closeModalBtn = document.querySelector('[data-modal-close]');
const modal = document.querySelector('[data-modal]');
const form = document.querySelector('#modal-form')
const nameInput = document.querySelector('#modal-name') 

function toggleModal() {
  modal.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
}

window.addEventListener('load', () => {
  if (!localStorage.getItem('userName') == true) {
    toggleModal()
  }
});

closeModalBtn.addEventListener('click', toggleModal);

form.addEventListener('submit', onSubmit)

function onSubmit() {
  localStorage.setItem('userName', nameInput.value.trim())
  toggleModal()
  return
}