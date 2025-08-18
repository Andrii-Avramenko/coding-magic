const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const result = document.getElementById("result");

function findMaxNumber() {
    const value1 = parseFloat(num1.value) || 0;
    const value2 = parseFloat(num2.value) || 0;
    const value3 = parseFloat(num3.value) || 0;

    const max = Math.max(value1, value2, value3);

    result.textContent = max;
    console.log("Результат:", result)
}

[num1, num2, num3].forEach(input => {
    input.addEventListener("input", findMaxNumber);
});