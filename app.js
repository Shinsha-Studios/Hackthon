import {
  CalcFundCapacity,
  CalcNetEarnings,
  CalculateMonths,
} from "./Scripts/Calculation.js";

import {
  amtToRetire,
  timeToInvest,
} from "./Scripts/investment-calculations.js";

import { getStockData } from "./Scripts/stock.js";

const eFundSlider = document.getElementById("emergencySlider");
const rFundSlider = document.getElementById("rainySlider");
const eFundVal = document.getElementById("emergencyFundRangeVal");
const rFundVal = document.getElementById("rainyDayRangeVal");
const monthlyIncomeInput = document.querySelector("#monthly-income");
const monthlyExpenseInput = document.querySelector("#monthly-expense");
const calcBttn = document.querySelector("#bttn-calc");

eFundVal.innerHTML = eFundSlider.value;
rFundVal.innerHTML = rFundSlider.value;
// event called when slider is moved
eFundSlider.oninput = function () {
  eFundVal.innerHTML = eFundSlider.value;
};
rFundSlider.oninput = function () {
  rFundVal.innerHTML = rFundSlider.value;
};

calcBttn.addEventListener("click", () => {
  const monthlyExpense = monthlyExpenseInput.value;
  const monthlyIncome = monthlyIncomeInput.value;
  const netIncome = CalcNetEarnings(monthlyIncome, monthlyExpense);
  getStockData();
  getStockData();
});

// Display the results for emergency fund
function eFund(monthlyExpense, eFundVal, netIncome) {
  const eFundCap = CalcFundCapacity(monthlyExpense, eFundVal);
  const eFundTime = CalculateMonths(eFundCap, netIncome);
}

// Display the results for rainy day fund
function rFund(netIncome, monthlyExpense, rFundVal) {
  const rfundTime = CalculateMonths(rFundCap, netIncome);
  const rFundCap = CalcFundCapacity(monthlyExpense, rFundVal);
}
