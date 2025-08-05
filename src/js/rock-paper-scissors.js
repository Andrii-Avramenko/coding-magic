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
const quickAnswerHolder = document.querySelector('#rps-quick-answer')
const quickAnswers = {
  win: [' - Чудова гра!', ' - Продовжуй в тому ж дусі!', ' - Ти цього вартий!', ' - Так тримати!'],
  draw: [' - Сили рівні! Хто кого далі?', ' - Спробуй ще!'],
  loss: [' - Перемога попереду!', ' - Never give up!', ' - Буває! Ще один раунд?', ' - Вперед до реваншу!']
}
let lastQuickAnswer = ''

// if (userName == false) {
//   document.querySelector('#rps-user-name').textContent = userName
// }

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

playButton.addEventListener('click', rpsStartGame);

function rpsStartGame() {
  gameResult.style.color = '#000000ff';
  const chosenElement = document.querySelector('.rps-chosen');
  if (chosenElement === null) {
    gameResult.textContent = 'Оберіть варіант вище'
    quickAnswerHolder.textContent = ''
    gameResult.style.color = '#e88000ff';
    return;
  }

  const chosenObject = chosenElement.dataset.rpsitem;
  const compChoice =
    compChoices[Math.floor(Math.random() * compChoices.length)];
  playButton.textContent = compChoice
  if (compChoice === 'scissors') {
    playButton.textContent = 'Комп\'ютер обрав ножиці'
  } else if (compChoice === 'rock') {
    playButton.textContent = 'Комп\'ютер обрав камінь'
  } else if (compChoice === 'paper') {
    playButton.textContent = 'Комп\'ютер обрав папір'
  }

  if (chosenObject === compChoice) {
    let availableAnswers = quickAnswers.draw.filter(ans => ans !== lastQuickAnswer);
    let newQuickAnswer = availableAnswers[Math.floor(Math.random() * availableAnswers.length)];
    gameResult.textContent = 'Нічія!';
    quickAnswerHolder.textContent = newQuickAnswer
    gameResult.style.color = '#e88000ff';
    quickAnswerHolder.style.color = '#e88000ff'
    lastQuickAnswer = newQuickAnswer
  } else if (
    (chosenObject === 'rock' && compChoice === 'scissors') ||
    (chosenObject === 'paper' && compChoice === 'rock') ||
    (chosenObject === 'scissors' && compChoice === 'paper')
  ) {
    rpsAfterGame('win')
  } else {
    rpsAfterGame('loss')
  }
  chosenElement.classList.remove('rps-chosen')
}

function rpsAfterGame(result) {
  if (result === 'win') {
    let availableAnswers = quickAnswers.win.filter(ans => ans !== lastQuickAnswer);
    let newQuickAnswer = availableAnswers[Math.floor(Math.random() * availableAnswers.length)];
    gameResult.textContent = 'Ви перемогли!';
    quickAnswerHolder.textContent = newQuickAnswer;
    rpsScore.userScore += 1;
    rpsUserCounter.textContent = rpsScore.userScore;
    gameResult.style.color = '#47d524ff';
    quickAnswerHolder.style.color = '#47d524ff';
    lastQuickAnswer = newQuickAnswer;
    return
  }
  if (result === 'loss') {
    let availableAnswers = quickAnswers.loss.filter(ans => ans !== lastQuickAnswer);
    let newQuickAnswer = availableAnswers[Math.floor(Math.random() * availableAnswers.length)];
    gameResult.textContent = "Комп'ютер переміг!";
    quickAnswerHolder.textContent = newQuickAnswer
    rpsScore.compScore += 1;
    rpsCompCounter.textContent = rpsScore.compScore
    gameResult.style.color = '#f30707ff';
    quickAnswerHolder.style.color = '#f30707ff'
    lastQuickAnswer = newQuickAnswer
    return
  }
  gameResult.textContent = "Сталася помилка!";
  quickAnswerHolder.textContent = " - Спробуйте ще раз"
  gameResult.style.color = '#e88000ff';
  quickAnswerHolder.style.color = '#e88000ff'
}

resetButton.addEventListener('click', rpsResetCounter);

function rpsResetCounter() {
  rpsScore.compScore = 0;
  rpsScore.userScore = 0;
  document.querySelector('#rps-user-count').textContent = rpsScore.userScore;
  document.querySelector('#rps-comp-count').textContent = rpsScore.compScore;
  gameResult.textContent = 'Оберіть варіант вище'
  quickAnswerHolder.textContent = ''
  gameResult.style.color = '#000000ff';
}
