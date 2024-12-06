const display = document.getElementById("display");
let currentInput = "0";
let previousInput = null;
let operator = null;

// Update the display
function updateDisplay() {
  display.textContent = currentInput;
}

// Handle button clicks
document.querySelector(".buttons").addEventListener("click", (event) => {
  const button = event.target;
  const action = button.getAttribute("data-action");
  const value = button.getAttribute("data-value");

  if (!button.classList.contains("btn")) return;

  if (action === "clear") {
    currentInput = "0";
    previousInput = null;
    operator = null;
  } else if (action === "sign") {
    currentInput = String(parseFloat(currentInput) * -1);
  } else if (action === "percent") {
    currentInput = String(parseFloat(currentInput) / 100);
  } else if (action === "operator") {
    if (operator && previousInput !== null) {
      currentInput = calculate(previousInput, currentInput, operator);
    }
    operator = value;
    previousInput = currentInput;
    currentInput = "0";
  } else if (action === "calculate") {
    if (operator && previousInput !== null) {
      currentInput = calculate(previousInput, currentInput, operator);
      previousInput = null;
      operator = null;
    }
  } else {
    // Append number or decimal
    if (currentInput === "0" && value !== ".") {
      currentInput = value;
    } else {
      currentInput += value;
    }
  }

  updateDisplay();
});

// Perform calculation
function calculate(num1, num2, operator) {
  const a = parseFloat(num1);
  const b = parseFloat(num2);

  switch (operator) {
    case "+":
      return String(a + b);
    case "-":
      return String(a - b);
    case "*":
      return String(a * b);
    case "/":
      return b !== 0 ? String(a / b) : "Error";
    default:
      return num2;
  }
}

// Initialize the display
updateDisplay();
