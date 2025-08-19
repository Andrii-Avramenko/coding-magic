const fieldEl = document.querySelector('.football-field');
const clearGoalButton = document.querySelector('.clear-goal');
const ballEl = document.querySelector('.football-ball');
const footballScoreEl = document.querySelector('.football-score');
const footballGoalEl = document.querySelector('.football-goal-img');
let score = 0;
clearGoalButton.addEventListener('click', resetGame);
fieldEl.addEventListener('click', ballMove);

let checkGoalTimeout;
function ballMove(event) {
  const fieldRect = fieldEl.getBoundingClientRect();
  const ballRect = ballEl.getBoundingClientRect();

  const ballX = event.clientX - fieldRect.left - ballRect.width / 2;
  const ballY = event.clientY - fieldRect.top - ballRect.height / 2;

  ballEl.style.left = `${ballX}px`;
  ballEl.style.top = `${ballY}px`;

  clearTimeout(checkGoalTimeout);
  checkGoalTimeout = setTimeout(checkGoal, 350);
}

function checkGoal() {
  const goalRect = footballGoalEl.getBoundingClientRect();
  const ballRect = ballEl.getBoundingClientRect();

  const ballCenterX = ballRect.left + ballRect.width / 2;
  const ballCenterY = ballRect.top + ballRect.height / 2;

  if (
    ballCenterX > goalRect.left &&
    ballCenterX < goalRect.right &&
    ballCenterY > goalRect.top &&
    ballCenterY < goalRect.bottom
  ) {
    score++;
    footballScoreEl.textContent = score;
    ballEl.style.left = '92px'; 
    ballEl.style.top = '85px';
  }
}

function resetGame() {
  score = 0;
  footballScoreEl.textContent = score;
  ballEl.style.left = '92px'; 
  ballEl.style.top = '85px';
}