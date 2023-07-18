class Calculator {
  constructor(numA, numB) {
    this.numA = numA;
    this.numB = numB;
  }

  add() {
    return this.numA + this.numB;
  }

  substract() {
    return this.numA - this.numB;
  }

  multiply() {
    return this.numA * this.numB;
  }

  divide() {
    return this.numA / this.numB;
  }
}

module.exports = Calculator;