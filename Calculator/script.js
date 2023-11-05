const input = document.getElementById("result");
const toast = document.getElementById("toast");

function calculate(value) {
  const calculatedValue = eval(value || null);
  if (isNaN(calculatedValue)) {
    input.value = "Can't divide 0 with 0";
    setTimeout(() => {
      input.value = "";
    }, 1300);
  } else {
    input.value = calculatedValue;
  }
}

// Displays entered value on screen.
function liveScreen(enteredValue) {
  if (!input.value) {
    input.value = "";
  }
  input.value += enteredValue;
}

//adding event handler on the document to handle keyboard inputs
document.addEventListener("keydown", keyboardInputHandler);

//function to handle keyboard inputs
function keyboardInputHandler(event) {
  event.preventDefault();
  if (event.key === "0") {
    input.value += "0";
  } else if (event.key === "1") {
    input.value += "1";
  } else if (event.key === "2") {
    input.value += "2";
  } else if (event.key === "3") {
    input.value += "3";
  } else if (event.key === "4") {
    input.value += "4";
  } else if (event.key === "5") {
    input.value += "5";
  } else if (event.key === "6") {
    input.value += "6";
  } else if (event.key === "7") {
    input.value += "7";
  } else if (event.key === "7") {
    input.value += "7";
  } else if (event.key === "8") {
    input.value += "8";
  } else if (event.key === "9") {
    input.value += "9";
  }
  //operators
  if (event.key === "+") {
    input.value += "+";
  } else if (event.key === "-") {
    input.value += "-";
  } else if (event.key === "*") {
    input.value += "*";
  } else if (event.key === "/") {
    input.value += "/";
  }
  if (event.key === ".") {
    input.value += ".";
  }
  if (event.key === "Enter") {
    calculate(result.value);
  }
  if (event.key === "Backspace") {
    const resultInput = input.value;
    input.value = resultInput.substring(0, input.value.length - 1);
  }
}
