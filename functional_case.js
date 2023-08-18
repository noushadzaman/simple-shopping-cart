document.getElementById("btn-case-plus").addEventListener("click", function () {
  const newCaseNumber = updateCaseNumber(true, "case-number-field");

  const newPrice = calculatePrice(newCaseNumber, 59);

  setText("case-price-total", newPrice);
  const mobileTotal = getTextById("mobile-price-total");
  const caseTotal = getTextById("case-price-total");

  const total = calculateTotal(mobileTotal, caseTotal);
  setText("sub-total", total);
  const tax = (total * 0.1).toFixed(1);
  setText("tax", tax);

});

document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    const newCaseNumber = updateCaseNumber(false, "case-number-field");
    const newPrice = calculatePrice(newCaseNumber, 59);

    setText("case-price-total", newPrice);
    const mobileTotal = getTextById("mobile-price-total");
    const caseTotal = getTextById("case-price-total");

    const total = calculateTotal(mobileTotal, caseTotal);
    setText("sub-total", total);
    const tax = (total * 0.1).toFixed(1);
    setText("tax", tax);

  });
