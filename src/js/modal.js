const closeModalBtn = document.querySelector('[data-modal-close]');
const modal = document.querySelector('[data-modal]');
const form = document.querySelector('#modal-form')
const nameInput = document.querySelector('#modal-name') 
const userSpan = document.querySelector('#header-user'); 
const userNameKey = 'userName';

function toggleModal() {
  modal.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
}

window.addEventListener('load', () => {
  updateGreeting(); 
  
  if (!localStorage.getItem(userNameKey)) {
    toggleModal(); 
  }
});
function updateGreeting() {
  const userName = localStorage.getItem(userNameKey);
  userSpan.textContent = userName || "User";
}

closeModalBtn.addEventListener('click', toggleModal);

form.addEventListener('submit', onSubmit)

function onSubmit(event) {
event.preventDefault()

  const trimmedName = nameInput.value.trim();

  if (trimmedName) {
    localStorage.setItem(userNameKey, trimmedName);
    updateGreeting(); 
    toggleModal();
  }
}

