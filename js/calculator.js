let currentNumber = '';
let activeNumber = null;
let secondNum = null;
let currentOperation = null;
let operation = null;
let isOperating = false;
let isOperatorEqual = false;


const add = function (n1, n2) {
  try {
    n1 = Number(n1);
    n2 = Number(n2);
    return n1 + n2;
  } catch (e) {
    console.error(e);
  }
};

const subtract = function (n1, n2) {
  try {
    n1 = Number(n1);
    n2 = Number(n2);
    return n1 - n2;
  } catch (e) {
    console.error(e);
  }
};

const multiply = function (n1, n2) {
  try {
    n1 = Number(n1);
    n2 = Number(n2);
    return n1 * n2;
  } catch (e) {
    console.error(e);
  }
}

const divide = function (n, d) {
  try {
    n = Number(n);
    d = Number(d);
    if (d === 0) {
      throw new Error('Are your trying to open a black hole, because divide by 0 is how we get black holes');
    }
    return n / d;
  } catch (e) {
    console.error(e);
    return e;
  }
}

const operate = function (operator, n1, n2) {
  switch (operator) {
    case '+':
      return add(n1, n2);
    case '-':
      return subtract(n1, n2);
    case '*':
      return multiply(n1, n2);
    case '/':
      return divide(n1, n2);
    default:
      return 'invalid operation';
  }
}

const updateDisplay = function (value) {
  const display = document.getElementById('display');
  display.innerText = value;
}

const numClick = function (number) {
  // see if we need to start a new number
  if (isOperating) {
    currentNumber = number;
  } else if (currentNumber === '0') {
    currentNumber = currentNumber.slice(0, -1) + number;
  } else {
    currentNumber += number;
  }
  updateDisplay(currentNumber);
  isOperating = false;
}


const operateClick = function (operator) {
  // see if this is the first time through
  if (activeNumber === null) {
    currentOperation = operator;
    activeNumber = currentNumber;
  } else {
    if (operator === '=') {
      isOperatorEqual = true;
      activeNumber = operate(currentOperation, activeNumber, currentNumber);
      updateDisplay(activeNumber);
    } else if (isOperatorEqual) {
      currentOperation = operator;
    } else {
      currentOperation = operator;
    }
  }
  isOperating = true;
}

const clearClick = function () {
  currentNumber = '';
  activeNumber = null;
  updateDisplay(0);
}

const backClick = function () {
  if (isOperating) {
    clearClick();
  } else {
    if (currentNumber.length === 1) {
      currentNumber = '0';
    } else {
      currentNumber = currentNumber.slice(0, -1);
    }
    updateDisplay(currentNumber);
  }
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  operate
};
