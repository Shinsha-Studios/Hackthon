import {
  CalcFundCapacity,
  CalcNetEarnings,
  CalculateMonths,
} from "./Scripts/Calculation.js";

import {
  amtToRetire,
  timeToInvest,
} from "./Scripts/investment-calculations.js";

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
  eFundVal.innerHTML = `$${eFundSlider.value}`;
};
rFundSlider.oninput = function () {
  rFundVal.innerHTML = `$${rFundSlider.value}`;
};

calcBttn.addEventListener("click", () => {
  const monthlyExpense = monthlyExpenseInput.value;
  const monthlyIncome = monthlyIncomeInput.value;
  console.log(monthlyExpense.value);

  //let output = document.querySelector("#error");
  //output.innerHTML = " ";
  if(parseInt(monthlyIncome) > parseInt(monthlyExpense)) {
    const netIncome = CalcNetEarnings(monthlyIncome, monthlyExpense);
    const investTime = timeToInvest(netIncome, monthlyExpense);
    
    let output = document.querySelector("#error");
    output.innerHTML = " ";
    output = document.querySelector("#netIncome");
    output.innerHTML = `$${netIncome}`;
    output = document.querySelector("#netExpenses");
    output.innerHTML = `$${monthlyExpense}`;
    output = document.querySelector("#independentTime"); 
    output.innerHTML = `${investTime} years`;
  
    getEFund(monthlyExpense, netIncome, eFundSlider.value);
    getRFund(monthlyExpense, netIncome, rFundSlider.value);
  } else if(parseInt(monthlyIncome) <= parseInt(monthlyExpense)) {
    let output = document.querySelector("#error");
    output.innerHTML = "Income must be greater than expense";
  } 
  else {
    let output = document.querySelector("#error");
    output.innerHTML = "Monthly Income and Monthly Expenses are required fields";
  }

});

// Display the results for emergency fund
function getEFund(monthlyExpense, netIncome, months) {
  const eFundCap = CalcFundCapacity(monthlyExpense, months);
  const eFundTime = CalculateMonths(eFundCap, netIncome);
  let output = document.querySelector("#eFundCap");
  output.innerHTML = `$${eFundCap}`;
  output = document.querySelector("#eFundTime");
  output.innerHTML = `${eFundTime} month(s)`;
}

// Display the results for rainy day fund
function getRFund(monthlyExpense, netIncome, months) {
  const rFundCap = CalcFundCapacity(monthlyExpense, months);
  const rFundTime = CalculateMonths(rFundCap, netIncome);
  let output = document.querySelector("#rFundCap");
  output.innerHTML = `$${rFundCap}`;
  output = document.querySelector("#rFundTime");
  output.innerHTML = `${rFundTime} month(s)`;
}
