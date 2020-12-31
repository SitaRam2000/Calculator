function caluclate() {
  let num1 = document.querySelector("#n1");
  let num2 = document.querySelector("#n2");
  let op = document.querySelector("#operators");

  let result = document.querySelector("#result");

  if (op.options[op.selectedIndex].value == "+") {
    result.textContent += "  " + add(num1.value, num2.value);
  }
  if (op.options[op.selectedIndex].value == "-") {
    result.textContent += "  " + sub(num1.value, num2.value);
  }
  if (op.options[op.selectedIndex].value == "*") {
    result.textContent += "  " + mul(num1.value, num2.value);
  }
  if (op.options[op.selectedIndex].value == "/") {
    result.textContent += "  " + div(num1.value, num2.value);
  }
  if (op.options[op.selectedIndex].value == "%") {
    result.textContent += "  " + rem(num1.value, num2.value);
  }

  return true;
}

function add(a, b) {
  return parseInt(a) + parseInt(b);
}
function sub(a, b) {
  return parseInt(a) - parseInt(b);
}
function mul(a, b) {
  return parseInt(a) * parseInt(b);
}
function div(a, b) {
  return parseInt(a) / parseInt(b);
}
function rem(a, b) {
  return parseInt(a) % parseInt(b);
}
