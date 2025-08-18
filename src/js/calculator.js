let operation = null;

window.setOperation = function(op) {
    operation = op;
};

const waitForCalculator = setInterval(() => {
    const btn = document.getElementById('btn');
    const resultCalculator = document.getElementById('result');

    if (btn && resultCalculator) {
        clearInterval(waitForCalculator); 
        btn.addEventListener('click', () => {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);

            if (isNaN(num1) || isNaN(num2)) {
                resultCalculator.value = "Введіть обидва числа";
                return;
            }

            if (!operation) {
                resultCalculator.value = "Оберіть операцію";
                return;
            }

            let result;
            switch (operation) {
                case '+': result = num1 + num2; break;
                case '-': result = num1 - num2; break;
                case '*': result = num1 * num2; break;
                case '/':
                    if (num2 === 0) {
                        resultCalculator.value = "Ділення на нуль";
                        return;
                    }
                    result = num1 / num2;
                    break;
                default:
                    resultCalculator.value = "Невідома операція";
                    return;
            }
            resultCalculator.value = result;
        });
    }
}, 200); 



