// e fund = emergency fund
// r fund = rainy day fund

let eFundSlider = document.getElementById("emrgencyFundRange");
let rFundSlider = document.getElementById("rainyDaySlider")
let eFundVal = document.getElementById("emergencyFundRangeVal");
let rFundVal = document.getElementById("ranyDayRange");
eFundVal.innerHTML = eFundSlider.value;
rFundVal.innerHTML = rFundSlider.value

// event called when slider is moved
eFundSlider.oninput = function() {
  eFundVal.innerHTML = this.value;
}
rFundSlider.oninput = function() {
    rFundVal.innerHTML = this.value;
}

function CalcFundCapacity(expenses, months) {
    return (expenses * months);
}

function CalcNetEarnings(income, expenses) {
    return (income - expenses);
}

//Begin calculations (user has pressed calculate)
function Calculate(income, expenses) {
    let eFundCapacity = CalcFundCapacity(expenses, eFundSlider);
    let rFundCapacity = CalcFundCapacity(expenses, rFundSlider);
    
    let netIncome = CalcNetEarnings(income, expenses);
    let output = document.getElementById("netIncome");
    output.innerHTML = netIncome;

    let months = 0;
    let runoff = 0;
    for(let i = eFundCapacity; i > 0; i -= netIncome) {
        months++;
        i = runoff;                 //may have some money left after you fill up the fund so roll that money into the rainy day fund
    }
    //it will take 'months' months to fill the emergency fund capacity of size 'efundcapacity'
    output = document.getElementById("eFundCap");
    output.innerHTML = eFundCapacity;
    output = document.getElementById("eFundMonths");
    output.innerHTML = months;

    months = 0;
    let i = rFundCapacity;
    i += runoff;
    for(i; i > 0; i -= netIncome) {
        months++;
    }
    //it will take 'months' months to fill the rainy day fund capacity of size 'rfundcapacity'
    output = document.getElementById("rFundCap");
    output.innerHTML = rFundCapacity;
    output = document.getElementById("rFundMonths");
    output.innerHTML = months;
}