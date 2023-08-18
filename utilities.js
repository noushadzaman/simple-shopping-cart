function updateCaseNumber(isIncrease, field) {
  const previousNumberField = document.getElementById(field);
  const previousNumberString = previousNumberField.value;
  const previousNumber = parseInt(previousNumberString);
  let newNumber;
  if (isIncrease) {
    newNumber = previousNumber + 1;
  } else {
    if (previousNumber == 1) {
      return;
    } else {
      newNumber = previousNumber - 1;
    }
  }

  previousNumberField.value = newNumber;
  return newNumber;
}

function setText(elementId, setText) {
  if (isNaN(setText)) {
    return;
  }
  const textElement = document.getElementById(elementId);
  textElement.innerText = setText;
}

function calculatePrice(item1, item2) {
  const totalPrice = item1 * item2;
  return totalPrice;
}
