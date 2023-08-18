document.getElementById("btn-case-plus").addEventListener("click", function () {
  const newCaseNumber = updateCaseNumber(true, "case-number-field");

  const newPrice = calculatePrice(newCaseNumber, 59);

  setText("case-price-total", newPrice);
});
document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    const newCaseNumber = updateCaseNumber(false, "case-number-field");
    const newPrice = calculatePrice(newCaseNumber, 59);

    setText("case-price-total", newPrice);
  });
