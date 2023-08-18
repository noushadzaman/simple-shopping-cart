document
  .getElementById("btn-mobile-plus")
  .addEventListener("click", function () {
    const newMobileNumber = updateCaseNumber(true, "mobile-number-field");

    const newPrice = calculatePrice(newMobileNumber, 1219);

    setText("mobile-price-total", newPrice);

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
  .getElementById("btn-mobile-minus")
  .addEventListener("click", function () {
    const newMobileNumber = updateCaseNumber(false, "mobile-number-field");
    const newPrice = calculatePrice(newMobileNumber, 1219);

    setText("mobile-price-total", newPrice);
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
