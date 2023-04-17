const form = document.getElementById("pizzaOrderForm");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the form from submitting
  const pizzaSize = parseFloat(
    document.querySelector('input[name="pizzaSize"]:checked').value
  );
  const toppings = parseFloat(document.getElementById("toppings").value);
  console.log(pizzaSize);
  console.log(toppings);
  const totalPrice = pizzaSize + toppings;
  alert(`The total price of your pizza order is $${totalPrice.toFixed(2)}.`);
});
