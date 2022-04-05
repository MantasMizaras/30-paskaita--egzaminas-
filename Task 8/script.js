/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {
  this.sum = function (num1, num2) {
    return num1 + num2;
  };
  this.subtraction = function (num1, num2) {
    return num1 - num2;
  };
  this.multiplication = function (num1, num2) {
    return num1 * num2;
  };
  this.division = function (num1, num2) {
    return num1 / num2;
  };
}

const calc = new Calculator();
const sum = calc.sum(19, 21);
// console.log("sum ===", sum);
const subtr = calc.subtraction(55, 45);
// console.log("substr ===", subtr);
const multi = calc.multiplication(3, 8);
// console.log("multi ===", multi);
const division = calc.division(155, 5);
// console.log("division ===", division);
