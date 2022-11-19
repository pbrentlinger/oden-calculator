

const add = function(n1, n2) {
  try{
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    return n1 + n2;
  } catch (e) {
    console.error(e);
  }
};

const subtract = function(n1, n2) {
  try {
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    return n1 - n2;
  } catch (e) {
    console.error(e);
  }
};

const multiply = function (n1, n2){
  try {
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    return n1 * n2;
  } catch (e) {
    console.error(e);
  }
}

const divide = function (n, d) {
  try {
    n = parseInt(n);
    d = parseInt(d);
    if (d === 0) {
      throw new Error('Are your trying to open a black hole, because divide by 0 is how we get black holes')
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


module.exports = {
  add,
  subtract,
  multiply,
  divide,
  operate
};
