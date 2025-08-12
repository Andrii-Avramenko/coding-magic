let operation = null;

window.setOperation = function(op) {
    operation = op;
};

const waitForCalculator = setInterval(() => {
    const btn = document.getElementById('btn');
    const resultElement = document.getElementById('result');

    if (btn && resultElement) {
        clearInterval(waitForCalculator); 
        btn.addEventListener('click', () => {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);

            if (isNaN(num1) || isNaN(num2)) {
                resultElement.value = "Введіть обидва числа";
                return;
            }

            if (!operation) {
                resultElement.value = "Оберіть операцію";
                return;
            }

            let result;
            switch (operation) {
                case '+': result = num1 + num2; break;
                case '-': result = num1 - num2; break;
                case '*': result = num1 * num2; break;
                case '/':
                    if (num2 === 0) {
                        resultElement.value = "Ділення на нуль";
                        return;
                    }
                    result = num1 / num2;
                    break;
                default:
                    resultElement.value = "Невідома операція";
                    return;
            }
            resultElement.value = result;
            console.log("Результат", result)
        });
    }
}, 200); 



