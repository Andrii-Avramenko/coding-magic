const rpsButtons = document.querySelectorAll('.rps-choice');
const compChoices = ['rock', 'scissors', 'paper'];
const gameResult = document.querySelector('#rps-result');
const playButton = document.querySelector('#rps-comp-choice');
const rpsScore = {
  compScore: 0,
  userScore: 0,
};
const resetButton = document.querySelector('#rps-reset');
const rpsCompCounter = document.querySelector('#rps-comp-count')
const rpsUserCounter = document.querySelector('#rps-user-count')

if (userName == false) {
  document.querySelector('#rps-user-name').textContent = userName
}

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
  gameResult.style.color = '#000000ff';
  const chosenElement = document.querySelector('.rps-chosen');
  if (chosenElement === null) {
    gameResult.style.color = '#e88000ff';
    return;
  }

  const chosenObject = chosenElement.dataset.rpsitem;
  const compChoice =
    compChoices[Math.floor(Math.random() * compChoices.length)];
  playButton.textContent = compChoice

  if (chosenObject === compChoice) {
    gameResult.textContent = 'Нічія!';
    gameResult.style.color = '#e88000ff';
  } else if (
    (chosenObject === 'rock' && compChoice === 'scissors') ||
    (chosenObject === 'paper' && compChoice === 'rock') ||
    (chosenObject === 'scissors' && compChoice === 'paper')
  ) {
    gameResult.textContent = 'Ви перемогли!';
    rpsScore.userScore += 1;
    rpsUserCounter.textContent = rpsScore.userScore
    gameResult.style.color = '#47d524ff';
  } else {
    gameResult.textContent = "Комп'ютер переміг!";
    rpsScore.compScore += 1;
    rpsCompCounter.textContent = rpsScore.compScore
    gameResult.style.color = '#f30707ff';
  }
}

resetButton.addEventListener('click', resetCounter);

function resetCounter() {
  rpsScore.compScore = 0;
  rpsScore.userScore = 0;
  document.querySelector('#rps-user-count').textContent = rpsScore.userScore;
  document.querySelector('#rps-comp-count').textContent = rpsScore.compScore;
}
