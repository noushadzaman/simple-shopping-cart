document.getElementById("btn-case-plus").addEventListener("click", function () {
  const newCaseNumber = updateCaseNumber(true, "case-number-field");

  const newPrice = calculatePrice(newCaseNumber, 59);

  setText("case-price-total", newPrice);
  const mobileTotal = getTextById("mobile-price-total");
  const caseTotal = getTextById("case-price-total");

  const total = calculateTotal(mobileTotal, caseTotal);
  setText("sub-total", total);
  const taxString = (total * 0.1).toFixed(1);
  const tax = parseFloat(taxString);
  setText("tax", tax);
  const mainTotal = calculateTotal(total,tax);
  setText('total', mainTotal);

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
    const taxString = (total * 0.1).toFixed(1);
    const tax = parseFloat(taxString);
    setText("tax", tax);
    const mainTotal = calculateTotal(total,tax);
    setText('total', mainTotal);

  });
