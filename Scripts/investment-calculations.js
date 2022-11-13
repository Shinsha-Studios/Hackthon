const annualRR = 0.08; // Average roi of the S&P 500

// using the 4% rule, when investments can cover the monthly expense
// Find total amount of money needed to live off of the 4% rule formula
// (total expenses * 12) / 0.04

function amtToRetire(totalExpense) {
  return (totalExpense * 12) / 0.04;
}

// How long will it take to reach the amtToRetire
function timeToInvest(contributionsPerMonth, totalExpense) {
  let totalAmt = amtToRetire(totalExpense);
  let yrs = 0;
  let result = contributionsPerMonth;

  while (result < totalAmt) {
    if (result !== 0) {
      result += contributionsPerMonth * 12;
      result += result * annualRR;
      yrs++;
    } else {
      return -1;
    }
  }

  return yrs;
}
