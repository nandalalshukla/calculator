class Calculator {
  constructor() {
    this.currentValue = "";
    this.previousValue = "";
    this.operator = null;
  }

  clear() {
    this.currentValue = "";
    this.previousValue = "";
    this.operator = null;
  }

  appendNumber(number) {
    if (number === "." && this.currentValue.includes(".")) return;
    this.currentValue += number.toString();
  }

  chooseOperator(operator) {
    if (this.currentValue === "") return;
    if (this.previousValue !== "") {
      this.compute();
    }
    this.operator = operator;
    this.previousValue = this.currentValue;
    this.currentValue = "";
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousValue);
    const current = parseFloat(this.currentValue);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operator) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "/":
        computation = current === 0 ? "Error" : prev / current;
        break;
      default:
        return;
    }
    this.currentValue = computation.toString();
    this.operator = null;
    this.previousValue = "";
  }

  getDisplayValue() {
    return this.currentValue || this.previousValue || "0";
  }
}

// Example usage:
// const calc = new Calculator();
// calc.appendNumber('5');
// calc.chooseOperator('+');
// calc.appendNumber('3');
// calc.compute();
// console.log(calc.getDisplayValue()); // "8"
