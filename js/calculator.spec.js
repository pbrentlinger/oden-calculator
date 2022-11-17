const calculator = require('./calculator');

describe('add', () => {
  test('adds 0 and 0', () => {
    expect(calculator.add(0,0)).toBe(0);
  });

  test('adds 2 and 2', () => {
    expect(calculator.add(2,2)).toBe(4);
  });

  test('adds positive numbers', () => {
    expect(calculator.add(2,6)).toBe(8);
  });
});

describe('subtract', () => {
  test('subtracts numbers', () => {
    expect(calculator.subtract(10,4)).toBe(6);
  });

  test('subract negative from positive', () => {
    expect(calculator.subtract(-10, 10)).toBe(-20);
  });

  test('subtract greater from lesser', () => {
    expect(calculator.subtract(4, 10)).toBe(-6)
  });
});

describe('multiply', () => {
  test('multiplies two numbers', () => {
    expect(calculator.multiply(4, 2)).toBe(8);
  });
});

describe('divide',() => {
  test('divide positive numerator by positive denominator', () => {
    expect(calculator.divide(4, 2)).toBe(2);
  });

  test('divide negative by negative', () => {
    expect(calculator.divide(-4, -2)).toBe(2);
  });

  test('divide negative by positive', () => {
    expect(calculator.divide(-4, 2)).toBe(-2);
  });

  test('divide positive by negative', () => {
    expect(calculator.divide(4, -2)).toBe(-2);
  });

  test('divide by zero', () => {
    expect(calculator.divide(4, 0)).toBe('Error, Cannot Divide by Zero');
  });
});

describe('operate', () => {
  test('add operators', () => {
    expect(calculator.operate('add', 2, 2)).toBe(4);
  });

  test('subtract operators', () => {
    expect(calculator.operate('subtract', 4, 2)).toBe(2);
  });

  test('multiply operators', () => {
    expect(calculator.operate('multiply', 3, 2)).toBe(6);
  });

  test('divide operators', () => {
    expect(calculator.operate('divide', 12, 4)).toBe(3);
  });

  test('invalid operator', () => {
    expect(calculator.operate('power')).toBe('invalid function');
  });
});
