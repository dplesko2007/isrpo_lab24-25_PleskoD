//lab25 task1
const order = {
    customer: "customer",
    shipping: "shipping",
    payment: "cash"
};
console.log(order?.customer);
console.log(order?.payment);
console.log(order?.shipping);

const value = 0 ?? "default";

function displayOrder(user) {
    console.log(`Покупатель: ${customer}`);
    console.log(`Доставка: ${shipping}`);
    console.log(`Оплата: ${payment}`);
}
//lab25 task2
const rates = {
  RUB: 1,
  USD: 0.011,
  EUR: 0.010,
  CNY: 0.079,
};

const amountInput = document.getElementById("amount");
const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const convertBtn = document.getElementById("convertBtn");
const errorEl = document.getElementById("error");
const resultEl = document.getElementById("result");

convertBtn.addEventListener("click", function () {
  const amount = parseFloat(amountInput.value);
  const from = fromSelect.value;
  const to = toSelect.value;

  if (!amountInput.value.trim() || isNaN(amount)) {
    errorEl.textContent = "Пожалуйста, введите сумму.";
    resultEl.style.display = "none";
    return;
  }
  if (amount <= 0) {
    errorEl.textContent = "Сумма должна быть больше нуля.";
    resultEl.style.display = "none";
    return;
  }

  errorEl.textContent = "";

  const inRub = amount / rates[from];
  const converted = (inRub * rates[to]).toFixed(2);

  resultEl.style.display = "block";
  resultEl.textContent = `${amount} ${from} = ${converted} ${to}`;
});
