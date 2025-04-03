let display = document.getElementById('result');
let equation = '';

function insert(value) {
  equation += value;
  display.innerHTML = equation;
}

function calculate() {
  display.innerHTML = eval(equation);
  equation = display.innerHTML;
}

function clearDisplay() {
  equation = '';
  display.innerHTML = '0';
}

function backspace() {
  equation = equation.slice(0, -1);
  display.innerHTML = equation;
}
