document
  .getElementById("btn-mobile-plus")
  .addEventListener("click", function () {
    const previousMobileNumberField = document.getElementById(
      "mobile-number-field"
    );
    const previousMobileNumberString = previousMobileNumberField.value;
    const previousMobileNumber = parseInt(previousMobileNumberString);
    const newMobileNumber = previousMobileNumber + 1;
    previousMobileNumberField.value = newMobileNumber;

  });

document
  .getElementById("btn-mobile-minus")
  .addEventListener("click", function () {
    const previousMobileNumberField = document.getElementById(
      "mobile-number-field"
    );
    const previousMobileNumberString = previousMobileNumberField.value;
    const previousMobileNumber = parseInt(previousMobileNumberString);

    if (previousMobileNumber == 1) {
      return;
    }

    const newMobileNumber = previousMobileNumber - 1;

    previousMobileNumberField.value = newMobileNumber;
  });
