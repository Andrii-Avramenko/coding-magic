const rpsButtons = document.querySelectorAll('.rps-choice');
const rpsScore = {
  compScore: 0,
  userScore: 0,
};
const compChoices = ['rock', 'scissors', 'paper'];
let gameResult = document.querySelector('.rps-result')
const playButton = document.querySelector('.rps-comp-choice')

rpsButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('rps-chosen')) {
      btn.classList.remove('rps-chosen');
    } else {
      rpsButtons.forEach(btn2 => btn2.classList.remove('rps-chosen'));
      btn.classList.add('rps-chosen');
    }
  });
});

playButton.addEventListener('click', startGame);

function startGame() {
  console.log('Початок гри')
  const chosenObject = document.querySelector('.rps-chosen').dataset.rpsitem;
  const compChoice =
    compChoices[Math.floor(Math.random() * compChoices.length)];
    
  console.log('Змінні працюють')
  if (!chosenObject) {
    gameResult.style.color = "#ffb300ff"
  }

  console.log('Перевірено чи є варіант')
  if (chosenObject === compChoice) {
    gameResult.textContent = 'Нічія!';
  } else if (chosenObject == 'rock' && compChoice == 'scissors') {
    gameResult.textContent = 'Ви перемогли!';
  } else if (chosenObject == 'paper' && compChoice == 'rock') {
    gameResult.textContent = 'Ви перемогли!';
  } else if (chosenObject == 'scissors' && compChoice == 'paper') {
    gameResult.textContent = 'Ви перемогли!';
  } else if (chosenObject == 'paper' && compChoice == 'scissors') {
    gameResult.textContent = 'Комп\'ютер переміг!';
  } else if (chosenObject == 'scissors' && compChoice == 'rock') {
    gameResult.textContent = 'Комп\'ютер переміг';
  } else if (chosenObject == 'rock' && compChoice == 'paper') {
    gameResult.textContent = 'Комп\'ютер переміг';
  }
  console.log('Гра закінчена')
}
