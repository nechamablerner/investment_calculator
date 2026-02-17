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

        // TIP: You can view the form input values using the console for debugging
        console.log("Form submitted " + resultText.value);
    });
});
