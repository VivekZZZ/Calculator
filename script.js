let result = document.getElementById("result");

function appendNumber(num) {
  result.value += num;
}

function appendOperator(op) {
  if (result.value === "") return;
  if (
    result.value.slice(-1) === "+" ||
    result.value.slice(-1) === "-" ||
    result.value.slice(-1) === "*" ||
    result.value.slice(-1) === "/"
  ) {
    result.value = result.value.slice(0, -1) + op;
  } else {
    result.value += op;
  }
}

function clearResult() {
  result.value = "";
}

function deleteLastChar() {
  result.value = result.value.slice(0, -1);
}

function calculate() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = "Error";
  }
}
function calculateSquareRoot() {
  try {
    result.value = Math.sqrt(eval(result.value));
  } catch (error) {
    result.value = "Error";
  }
}

// ----------themeToggle-----------------

const themeToggle = document.getElementById("themeToggle");
const calculator = document.querySelector(".calculator");

themeToggle.addEventListener("change", () => {
  if (themeToggle.checked) {
    calculator.classList.add("light-theme");
  } else {
    calculator.classList.remove("light-theme");
  }
});
