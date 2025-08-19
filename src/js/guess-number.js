const input = document.querySelector('#guess-input');
const button = document.querySelector('.guess-number-button');
const result = document.querySelector('.guess-number-result');

let randomNumber = Math.floor(Math.random() * 11);
button.addEventListener('click', userGuessFunction);

function userGuessFunction() {
  const userGuess = parseInt(input.value);
  console.log(userGuess);

  if (userGuess === randomNumber) {
    result.textContent = `Вітаю, ви вгадали число! ${userGuess}  `;
    randomNumber = Math.floor(Math.random() * 11);
    result.style.color = 'green';
  } else {
    result.textContent = 'На жаль, ви не вгадали. Спробуйте ще раз!';
    result.style.color = 'red';
  }

  input.value = '';
}
