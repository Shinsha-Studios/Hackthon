import {
  CalcFundCapacity,
  CalcNetEarnings,
  Calculate,
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

calcBttn.addEventListener("click", () => {
  const monthlyExpense = monthlyExpenseInput.value;
  const monthlyIncome = monthlyIncomeInput.value;
});
