const yearInput = document.getElementById('birthYear');
const result = document.getElementById('result');
const yearForm = document.getElementById('yearForm');

yearForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const year = parseInt(yearInput.value);
    result.style.color = '';
    result.style.fontWeight = '';

    if (!isNaN(year)) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            result.textContent = "Ви народилися у високосний рік!";
            result.style.color = 'green';
            result.style.fontWeight = 'bold';
        } else {
            result.textContent = "Це не високосний рік.";
            result.style.color = 'red';
            result.style.fontWeight = 'bold';
        }
    }
});
