/**
 * Calculates the total tax for a list of incomes based on progressive tax brackets.
 * 
 * rules:
 * - For income is more than 50m, the tax rate is 20%.
 * - For income from 20m to 50m, the tax rate is 10%.
 * - For income under 20m, the tax rate is 5%.
 * 
 * Pseudocode:
 * 1. Initialize a variable to hold the total tax amount.
 * 2. Iterate through each income in the input array.
 * 3. For each income, determine the applicable tax rate based on the progressive tax brackets.
 * 4. Calculate the tax for that income and add it to the total tax amount.
 * 5. Return the total tax amount.
 * @param {number[]} incomes - An array of income values.
 * @returns {number} The total tax amount.
 */
function calculateTax(incomes) {
    let totalTax = 0;
    // Iterate through each income in the input array
    for (const income of incomes) {
        // Tax > 50m
        if (income > 50000000) {
            totalTax += income * 0.2;
        // Tax > 20m and <= 50m
        } else if (income > 20000000) {
            totalTax += income * 0.1;
        // Tax <= 20m   
        } else {
            totalTax += income * 0.05;
        }
    }
    return totalTax;
}   

module.exports = calculateTax;