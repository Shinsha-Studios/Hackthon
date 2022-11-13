function CalcFundCapacity(expenses, months) {
    return (expenses * months);
}

function CalcNetEarnings(income, expenses) {
    return (income - expenses);
}

//Begin calculations (user has pressed calculate)
function CalculateMonths(capacity, netIncome) {
    let months = 0;
    for(let i = eFundCapacity; i > 0; i -= netIncome) {
        months++;
    }
    return months;
}
export{
    CalculateMonths, CalcNetEarnings, CalcFundCapacity
}