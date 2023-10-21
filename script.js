const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
 const itemElements = document.querySelectorAll('.item');
  const priceElements = document.querySelectorAll('.price');
  let totalPrice = 0;

  // Calculate the total price by summing up the prices
  for (let i = 0; i < itemElements.length; i++) {
    totalPrice += parseFloat(priceElements[i].textContent);
  }

  // Create a new row for the total price
  const table = document.querySelector('table');
  const newRow = table.insertRow();
  const cell = newRow.insertCell();
  cell.textContent = 'Total Price:';
  cell.colSpan = 2;
  cell.style.fontWeight = 'bold';

  const totalCell = newRow.insertCell();
  totalCell.textContent = totalPrice.toFixed(2);
  totalCell.style.fontWeight = 'bold';
};

getSumBtn.addEventListener("click", getSum);

