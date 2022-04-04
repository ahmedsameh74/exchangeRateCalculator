const currencyOne = document.querySelector("#currency-one");
const currencyTwo = document.querySelector("#currency-two");
const amountOne = document.querySelector("#amount-one");
const amountTwo = document.querySelector("#amount-two");
const rateEl = document.querySelector("#rate");
const swap = document.querySelector("#swap");

const calculate = () => {
  const currency_one = currencyOne.value;
  const currency_two = currencyTwo.value;

  fetch(
    `https://v6.exchangerate-api.com/v6/bff79e99f200c37fd354bb0d/latest/${currency_one}`
  )
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[currency_two];
      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
      amountTwo.value = (amountOne.value * rate).toFixed(2);
    });
};

currencyOne.addEventListener("change", calculate);
amountOne.addEventListener("input", calculate);
currencyTwo.addEventListener("change", calculate);
amountTwo.addEventListener("input", calculate);
swap.addEventListener("click", () => {
  const temp = currencyOne.value;
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = temp;
  calculate();
});

calculate();
