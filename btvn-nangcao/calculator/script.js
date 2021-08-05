class Calculator {
  constructor(previousOperator, currentOperator ) {
    this.previousOperator = previousOperator;
    this.currentOperator = currentOperator;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {}

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = `${this.currentOperand.toString()}${number.toString()}`;
  }

  chooseOperation(operation) {
      this.operation = operation;
      this.previousOperand = this.currentOperand;
      this.currentOperand = '';
  }

  compute() {}

  updateDisplay() {
    if (this.currentOperand === '') return;  
    this.currentOperator.innerText = this.currentOperand;
    this.previousOperator.innerText = this.previousOperand;
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalButton = document.querySelector("[data-equal]");
const deleteButton = document.querySelector("[data-del]");
const acButton = document.querySelector("[data-ac]");
const currentOperator = document.querySelector("[data-cur-op]");
const previousOperator = document.querySelector("[data-prev-op]");

const calculator = new Calculator(previousOperator, currentOperator);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      calculator.chooseOperation(button.innerText);
      calculator.updateDisplay();
    });
  });
  
