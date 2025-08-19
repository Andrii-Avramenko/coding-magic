if (!localStorage.getItem('userName') == false) {
  document.querySelector('#header-user').textContent = localStorage.getItem('userName')
}
