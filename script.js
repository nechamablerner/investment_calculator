/*
  Investment Growth Calculator
  Calculates future value using the compound interest formula.
*/

document.addEventListener("DOMContentLoaded", function () {
    // Get references to HTML elements by their IDs
    const form = document.getElementById("investmentForm");
    const resultBox = document.getElementById("resultBox");
    const resultText = document.getElementById("resultText");

    // Listens for form submission
    form.addEventListener("submit", function (event) {
        // Prevent page refresh
        event.preventDefault();
        // TO DO: calculate the future value of the investment and display the result


    function calculateFutureValue(P, r, retirementYear){
        const currentYear = new Date().getFullYear();
        const t = retirementYear - currentYear;

        const A = P * Math.pow((1 + r / 100 ) , t );

        return A;
        }

       
       
        const startingBalance = Number(document.getElementById("initialInvestment").value);

        const rate =Number(document.getElementById("interestRate").value);
        const year =Number(document.getElementById("retirementYear").value);

        const finalAmount = calculateFutureValue(startingBalance, rate , year);
        const roundedAmount = Math.round(finalAmount);

        resultText.innerText = `By retirement, your investment will be worth $${roundedAmount.toLocaleString()}.`;
        resultBox.hidden = false;



        // TIP: You can view the form input values using the console for debugging
        console.log("Form submitted " + resultText.value);
    });
});
