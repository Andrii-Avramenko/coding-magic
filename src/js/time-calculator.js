const resultHolder = document.querySelector('#tc-result');
const secondsInput = document.querySelector('#seconds-input');
const submitButton = document.querySelector('#tc-button');

submitButton.addEventListener('click', convertTime)

function convertTime(event) {
  event.preventDefault()
  console.log('Функція виконується')
  let seconds = Number(secondsInput.value);
  console.log(seconds)
  if (isNaN(seconds) || seconds < 0) {
    resultHolder.textContent = '0 дн. 00:00:00, впевнені що там секунди?';
    return;
  }

  let days = Math.floor(seconds / 86400);
  let hours = Math.floor((seconds % 86400) / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let secs = seconds % 60;

  resultHolder.textContent = 
        `${days} дн. ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}
