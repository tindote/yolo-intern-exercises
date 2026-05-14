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

function printMoneyExchange(data) {
    console.log(`Số tiền cần đổi: ${data.money.toLocaleString("vi-VN")}đ`);
    console.log("--------------------------------");

    data.result.forEach(item => {
        console.log(
            `${item.bill.toLocaleString("vi-VN")}đ : ${item.quantity} tờ`
        );
    });

    console.log("--------------------------------");
    console.log(`Tổng số tờ: ${data.totalBills}`);
}

const data = moneyExchange(1557000);

printMoneyExchange(data);
module.exports = { moneyExchange, printMoneyExchange };
