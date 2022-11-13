import {
  CalcFundCapacity,
  CalcNetEarnings,
  CalculateMonths,
} from "./Scripts/Calculation.js";

import {
  amtToRetire,
  timeToInvest,
} from "./Scripts/investment-calculations.js";

const eFundSlider = document.getElementById("emrgencyFundRange");
const rFundSlider = document.getElementById("rainyDaySlider");
const eFundVal = document.getElementById("emergencyFundRangeVal");
const rFundVal = document.getElementById("ranyDayRange");
const monthlyIncomeInput = document.querySelector("#monthly-income");
const monthlyExpenseInput = document.querySelector("#monthly-expense");
const calcBttn = document.querySelector("#bttn-calc");

eFundVal.innerHTML = eFundSlider.value;
rFundVal.innerHTML = rFundSlider.value
// event called when slider is moved
eFundSlider.oninput = function() {
  eFundVal.innerHTML = this.value;
}
rFundSlider.oninput = function() {
    rFundVal.innerHTML = this.value;
}

calcBttn.addEventListener("click", () => {
  const monthlyExpense = monthlyExpenseInput.value;
  const monthlyIncome = monthlyIncomeInput.value;
  const eFundCap = CalcFundCapacity(monthlyExpense, eFundVal);
  const rFundCap = CalcFundCapacity(monthlyExpense, rFundVal);
  const netIncome = CalcNetEarnings(monthlyIncome, monthlyExpense);
  const eFundTime = CalculateMonths(eFundCap, netIncome);
  const rfundTime = CalculateMonths(rFundCap, netIncome);


});
