let currentNumber = '0';
let activeNumber = null;
let currentOperation = null;
let isOperating = false;
let isEqualsPressed = false;


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
  console.log('Current operation is ' + currentOperation);
  isOperating = false;
}

const calculate = function () {
  activeNumber = operate(currentOperation, activeNumber, currentNumber);
  updateDisplay(activeNumber);
  console.log(`Current operation in calculate is ` + currentOperation);
}

const equalClick = function () {
  if (currentOperation !== null) {
    isEqualsPressed = true;
    // when pressing the equals button again and reapply the currentOperation & the currentNumber over and over against the resulting value (activeNumber)
    console.log(`Active number in equal is ${activeNumber}`);
    console.log(`Current operation before equals is ${currentOperation} ${currentNumber}`);
    calculate();
    console.log('Current operation in equalsClick after calculate is ' + currentOperation);
    console.log(`Result of calculate is ${activeNumber}`);
    console.log(`isEqualsPressed is ${isEqualsPressed}`);
  }
}

// TODO: I broke this...

const operateClick = function (operator) {
  // see if this is the first time through
  if (activeNumber === null) {
    console.log(`Active number should be null and is ${activeNumber}`);
    currentOperation = operator;
    console.log('Current operation is ' + currentOperation);
    activeNumber = currentNumber;
    console.log(`Active number should be assigned and is ${activeNumber}`);
    console.log(`isEqualsPressed is ${isEqualsPressed}`);
  } else if (isEqualsPressed){
    currentOperation = operator;
  } else {
    // if we have an operator loaded up we need to act upon that one
    console.log(`Current operation before equals is ${currentOperation} ${currentNumber}`);
    console.log(`Active number is ${activeNumber}`);
    isEqualsPressed = false;
    console.log(`isEqualsPressed is ${isEqualsPressed}`);
    calculate();
    console.log(`Active number is now ${activeNumber}`);
    // then we need to store the new operator for the next time through
    console.log('assigning new operator to currentOperator');
    currentOperation = operator;
    console.log('Current operation is ' + currentOperation);
  }
  isOperating = true;
}

const clearClick = function () {
  currentNumber = '';
  activeNumber = null;
  currentOperation = null;
  console.clear();
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
