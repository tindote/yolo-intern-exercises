function moneyExchange(money) {
    const bills = [500000, 100000, 50000, 10000, 5000, 2000, 1000];

    let moneyTemp = money;
    let totalBills = 0;

    const result = [];

    for (let bill of bills) {
        const quantity = Math.floor(moneyTemp / bill);

        if (quantity > 0) {
            result.push({
                bill,
                quantity
            });

            totalBills += quantity;
            moneyTemp %= bill;
        }
    }

    return {
        money,
        totalBills,
        result
    };
}