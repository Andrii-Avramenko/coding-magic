/*const btnsubmit = document.getElementById("btn")
btnsubmit.addEventListener("click", calculate)

function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value)
    const num2 = parseFloat(document.getElementById("num2").value)
    let result;


if (isNaN(num1) || isNaN(num2)) {
    result = "Помилка"
} else {
    switch (currentOperation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
        break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
        break;

    
    }
}
    document.getElementById("result").value = result;
}
*/


let operation ='';

document.querySelectorAll(".op-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        operation = btn.dataset.op;
    });
});

document.getElementById("btn").addEventListener("click", () => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num1").value);
    let res = 0;  


    if (isNaN(num1) || isNaN(num2)) {
    result = "Помилка";
    return
    }

    switch (operation) {
        case '+': res = num1 + num2; break;
        case '-': res = num1 - num2; break;
        case '*': res = num1 * num2; break;
        case '/': res = num1 / num2; break;
        default: res = "Оберіть дію";
    }
    document.getElementById("result").innerText = res;
});