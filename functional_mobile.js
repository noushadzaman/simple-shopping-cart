document
  .getElementById("btn-mobile-plus")
  .addEventListener("click", function () {
    const newMobileNumber = updateCaseNumber(true, "mobile-number-field");

    const newPrice = calculatePrice(newMobileNumber, 1219);

    setText("mobile-price-total", newPrice);
  });
document
  .getElementById("btn-mobile-minus")
  .addEventListener("click", function () {
    const newMobileNumber = updateCaseNumber(false, "mobile-number-field");
    const newPrice = calculatePrice(newMobileNumber, 1219);

    setText("mobile-price-total", newPrice);
  });
