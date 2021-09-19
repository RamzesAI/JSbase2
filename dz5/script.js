// Задание 5

const summFunc = (a, b) => {
  return a + b
}

const subtrFunc = (a, b) => {
  return a - b
}

const multFunc = (a, b) => {
  return a * b
}

const divFunc = (a, b) => {
  return a / b
}

const mathOperation = (arg1, arg2, operation) => {
  switch (operation) {
    case "addition":
      result = summFunc(arg1, arg2);
      break;
    case "subtraction":
      result = subtrFunc(arg1, arg2);
      break;
    case "multiplication":
      result = multFunc(arg1, arg2);
      break;
    case "division":
      result = divFunc(arg1, arg2);
      break;
  }
  return result
}

operationResult = mathOperation(6, 8, "division")
console.log(operationResult);

