// ==========================================================
// Part 1: Mastering JavaScript Basics
// ==========================================================

// Declare variables and constants.
// const is used for values that won't change, like the price.
const pricePerCup = 2.50;

// Get references to our HTML elements (Part 4: DOM Manipulation).
const cupsInput = document.getElementById('cups');
const calculateBtn = document.getElementById('calculate-btn');
const totalCostElement = document.getElementById('total-cost');
const countdownMessageElement = document.getElementById('countdown-message');


// ==========================================================
// Part 2: JavaScript Functions — The Heart of Reusability
// ==========================================================

// Function to calculate the total order price.
// It takes the number of cups as input.
function calculateOrderTotal(numberOfCups) {
    // A conditional statement to check for valid input.
    if (numberOfCups <= 0 || isNaN(numberOfCups)) {
        return "Please enter a valid number of cups.";
    } else {
        // Calculate the total cost using a simple operator (*).
        const total = numberOfCups * pricePerCup;
        // Return the formatted string.
        return `Your total is: $${total.toFixed(2)}`;
    }
}

// A second custom function to handle the countdown.
function startCountdown(seconds) {
    // Part 3: Loops — Using a for loop for repetition.
    // This loop counts down from the given number of seconds.
    for (let i = seconds; i >= 0; i--) {
        // Use a setTimeout to simulate a delay for each number.
        setTimeout(() => {
            if (i > 0) {
                // DOM interaction: Update text content.
                countdownMessageElement.textContent = `Processing order... ${i} seconds remaining.`;
            } else {
                // DOM interaction: Clear the message when done.
                countdownMessageElement.textContent = `Order complete!`;
            }
        }, (seconds - i) * 1000); // The delay increases with each iteration.
    }
}


// ==========================================================
// Part 4: Mastering the DOM with JavaScript
// ==========================================================

// DOM Interaction 1: Listen for a click event on the button.
calculateBtn.addEventListener('click', function() {
    // Get the value from the input field.
    let cupsValue = cupsInput.value;

    // Call our function to calculate the total (Part 2).
    let result = calculateOrderTotal(cupsValue);

    // DOM Interaction 2: Update the total cost display.
    totalCostElement.textContent = result;

    // DOM Interaction 3: Use a loop and update the message.
    startCountdown(3); // Start a 3-second countdown.
});

// An extra loop example (Part 3):
// This is a simple `for` loop that runs in the console.
// Open the browser's developer console to see this log.
console.log("--- Loop Example: Listing Coffee Flavors ---");
const coffeeFlavors = ['Dark Roast', 'Blonde Espresso', 'House Blend', 'Decaf'];
for (let i = 0; i < coffeeFlavors.length; i++) {
    console.log(`Flavor #${i + 1}: ${coffeeFlavors[i]}`);
}
