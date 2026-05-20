/**
 * Exchange money into smaller units
 * 1. Create array with all units
 * 2. Loop through units array to get max number of each units and add to totalBills
 * 3. Return totalBills 
 * @param {number} money to exchange, money % 1000 === 0
 * @returns {number} totalBills
 */
function moneyExchange(money) {
    // array include all units
    const bills = [500000, 100000, 50000, 10000, 5000, 2000, 1000];

    let moneyTemp = money;
    let totalBills = 0;

    const result = [];
    // loop through bills
    for (let bill of bills) {
        const quantity = Math.floor(moneyTemp / bill);
        if (quantity > 0) {
            totalBills += quantity;
            moneyTemp %= bill;
        }
    }
    return totalBills;
}

console.log(moneyExchange(5000000))
