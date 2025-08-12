const fieldEl = document.querySelector('.football-field');
const ballEl = document.querySelector('.football-ball');
const footballScoreEl = document.querySelector('.football-score');
const footballGoalEl = document.querySelector('.football-goal-img');

fieldEl.addEventListener('click', ballMove);

function ballMove(event) {
  const fieldRect = fieldEl.getBoundingClientRect();
  const ballRect = ballEl.getBoundingClientRect();

  const ballX = event.clientX - fieldRect.left - ballRect.width / 2;
  const ballY = event.clientY - fieldRect.top - ballRect.height / 2;

  ballEl.style.left = `${ballX}px`;
  ballEl.style.top = `${ballY}px`;
}
