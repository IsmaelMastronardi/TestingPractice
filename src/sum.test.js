const Calculator = require('./myFunc.js');

describe('calculos', () => {
  test('10+10 = 20', () => {
    const cal = new Calculator(10, 10);
    expect(cal.add()).toBe(20);
  });

  test('30-10', () => {
    const cal = new Calculator(30, 10);
    expect(cal.substract()).toBe(20);
  });
});

describe('diviciones', () => {
  test('division 1', () => {
    const cal = new Calculator(10, 2);
    expect(cal.divide()).toBe(5);
  });
  test('division 1', () => {
    const cal = new Calculator(1000, 20);
    expect(cal.divide()).toBe(50);
  });
  test('division 1', () => {
    const cal = new Calculator(20, 20);
    expect(cal.divide()).toBe(1);
  });
});
