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
  const investTime = timeToInvest(netIncome, monthlyExpense);

  let output = document.querySelector("#netIncome");
  output.innerHTML = netIncome;
  output = document.querySelector("#netExpenses");
  output.innerHTML = monthlyExpense;
  output = document.querySelector("#independentTime"); 
  output.innerHTML = investTime;

  getEFund(monthlyExpense, netIncome, eFundSlider.value);
  getRFund(monthlyExpense, netIncome, rFundSlider.value);

});

// Display the results for emergency fund
function getEFund(monthlyExpense, netIncome, months) {
  const eFundCap = CalcFundCapacity(monthlyExpense, months);
  const eFundTime = CalculateMonths(eFundCap, netIncome);
  let output = document.querySelector("#eFundCap");
  output = document.querySelector("#eFundTime");
  output.innerHTML = eFundCap;
  output.innerHTML = eFundTime;
}

// Display the results for rainy day fund
function getRFund(monthlyExpense, netIncome, months) {
  const rFundCap = CalcFundCapacity(monthlyExpense, months);
  const rFundTime = CalculateMonths(rFundCap, netIncome);
  let output = document.querySelector("#rFundCap");
  output = document.querySelector("#rFundTime");
  ouput.innerHTML = rFundCap;
  output.innerHTML = rFundTime;
}
