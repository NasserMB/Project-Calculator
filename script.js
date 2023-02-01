function addNumbers (a, b) {
    return a + b;
};

function subtractNumbers (a, b) {
    return a - b;
};

function multiplyNumbers (a, b) {
    return a * b;
};

function divideNumbers (a, b) {
    return a / b;
};

function operate(op, a, b) {
    if (op === '+') return addNumbers(a, b);
    if (op === '-') return subtractNumbers(a, b);
    if (op === '*') return multiplyNumbers(a, b);
    if (op === '/') return divideNumbers(a, b);
}