const btn = document.getElementById('btn-calculate');
const resultCalculator = document.getElementById('calculator-result');


let operation = null;

document.querySelectorAll('.operation').forEach(button => {
  button.addEventListener('click', () => {
   
    operation = button.dataset.op;
  });
});


btn.addEventListener('click', () => {
    console.log("click")
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
})
// const waitForCalculator = setInterval(() => {


//     if (btn && resultCalculator) {
//         clearInterval(waitForCalculator);
//         btn.addEventListener('click', () => {
//             const num1 = parseFloat(document.getElementById('num1').value);
//             const num2 = parseFloat(document.getElementById('num2').value);

//             if (isNaN(num1) || isNaN(num2)) {
//                 resultCalculator.value = "Введіть обидва числа";
//                 return;
//             }

//             if (!operation) {
//                 resultCalculator.value = "Оберіть операцію";
//                 return;
//             }

//             let result;
//             switch (operation) {
//                 case '+': result = num1 + num2; break;
//                 case '-': result = num1 - num2; break;
//                 case '*': result = num1 * num2; break;
//                 case '/':
//                     if (num2 === 0) {
//                         resultCalculator.value = "Ділення на нуль";
//                         return;
//                     }
//                     result = num1 / num2;
//                     break;
//                 default:
//                     resultCalculator.value = "Невідома операція";
//                     return;
//             }
//             resultCalculator.value = result;
//         });
//     }
// }, 200); 





