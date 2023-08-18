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

    const tax = (total * 0.1).toFixed(1);
    setText("tax", tax);
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

    const tax = (total * 0.1).toFixed(1);
    setText("tax", tax);
  });
