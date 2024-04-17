// script.js

function inputNumber(number) {
    const display = document.getElementById('display');
    display.value += number;
}

function inputOperator(operator) {
    const display = document.getElementById('display');
    display.value += operator;
}

function inputDot() {
    const display = document.getElementById('display');
    // Ensure there is only one dot in the current number
    if (display.value.includes('.')) {
        const lastOperator = Math.max(
            display.value.lastIndexOf('+'),
            display.value.lastIndexOf('-'),
            display.value.lastIndexOf('*'),
            display.value.lastIndexOf('/')
        );
        if (lastOperator === -1 || display.value.slice(lastOperator).indexOf('.') === -1) {
            display.value += '.';
        }
    } else {
        display.value += '.';
    }
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value);
        display.value = result;
    } catch {
        display.value = 'Error';
    }
}
