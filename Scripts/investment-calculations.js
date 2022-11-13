const monthlyIncomeInput = document.querySelector("#monthly-income");
const monthlyExpenseInput = document.querySelector("#monthly-expense");
const annualRR = 0.08; // Average roi of the S&P 500

// using the 4% rule, when investments can cover the monthly expense
// Find total amount of money needed to live off of the 4% rule formula
// (total expenses * 12) / 0.04

function amtToRetire(totalExpense) {
  return (totalExpense * 12) / 0.04;
}

// How long will it take to reach the amtToRetire
const yrsData = [];
const moneyData = [];
function timeToInvest(contributionsPerMonth, totalExpense) {
  let totalAmt = amtToRetire(totalExpense);
  let yrs = 0;
  let result = contributionsPerMonth;

  while (result < totalAmt) {
    if (result !== 0) {
      result += contributionsPerMonth * 12;
      result += result * annualRR;
      yrs++;
      yrsData.push(yrs);
      moneyData.push(result);
    } else {
      return -1;
    }
  }
  makeChart();
  return yrs;
}

function makeChart() {
  const ctx = document.querySelector("#Chart");
  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: yrsData,
      datasets: [
        {
          label: "investment growth",
          data: moneyData,
          backgroundColor: ["#FCA311"],
          borderColor: ["#14213D"],
          borderWidth: 1,
        },
      ],
    },
  });

  monthlyIncomeInput.addEventListener("click", () => {
    clearChart(myChart);
  });
  monthlyExpenseInput.addEventListener("click", () => {
    clearChart(myChart);
  });
}

function clearChart(myChart) {
  myChart.destroy();
  while (yrsData.length > 0) {
    yrsData.pop();
  }
  while (moneyData.length > 0) {
    moneyData.pop();
  }
}

export { amtToRetire, timeToInvest };
