const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  // return Math.max(a, b) - Math.min(a, b);
  return a - b;
};

const multiply = function (n1, n2){
  return n1 * n2;
}

const divide = function (n, d) {
  if (d === 0){
    return 'Error, Cannot Divide by Zero';
  } else {
    return n/d;
  }
}

const operate = function (operator, n1, n2) {
  switch (operator) {
    case 'add':
      return add(n1, n2);
    case 'subtract':
      return subtract(n1, n2);
    case 'multiply':
      return multiply(n1, n2);
    case 'divide':
      return divide(n1, n2);
    default:
      return 'invalid function';
  }
}


module.exports = {
  add,
  subtract,
  multiply,
  divide,
  operate
};
