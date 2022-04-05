/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const formEl = document.forms[0];
const inputEl = document.getElementById("search");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const outputEl = document.getElementById("output");

  function calculateWeight() {
    outputEl.innerHTML = `<h2 class="pounds">Pounds: ${(inputEl.value * 2.2046).toFixed(2)} lb</h2>
      <h2 class="grams">Grams: ${(inputEl.value / 0.001).toFixed(2)} g</h2>
      <h2 class="ounces">Ounces: ${(inputEl.value * 35.274).toFixed(2)} oz</h2>
      `;
  }
  calculateWeight();
});
