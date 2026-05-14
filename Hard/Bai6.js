const numberMap = {
    0: "không",
    1: "một",
    2: "hai",
    3: "ba",
    4: "bốn",
    5: "năm",
    6: "sáu",
    7: "bảy",
    8: "tám",
    9: "chín",
};

// =====================
// READ 3 DIGITS
// =====================
function readHundred(number) {
    let result = "";

    let hundred = Math.floor(number / 100);
    let ten = Math.floor((number % 100) / 10);
    let unit = number % 10;

    if (hundred > 0) {
        result += numberMap[hundred] + " trăm ";
    }

    if (ten > 1) {
        result += numberMap[ten] + " mươi ";

        if (unit === 1) result += "mốt ";
        else if (unit === 4) result += "tư ";
        else if (unit === 5) result += "lăm ";
        else if (unit > 0) result += numberMap[unit] + " ";
    }
    else if (ten === 1) {
        result += "mười ";

        if (unit === 5) result += "lăm ";
        else if (unit > 0) result += numberMap[unit] + " ";
    }
    else if (unit > 0) {
        if (hundred > 0) result += "linh ";
        result += numberMap[unit] + " ";
    }

    return result;
}

// =====================
// READ 1 GROUP (nghìn + triệu)
// =====================
function readMillion(number) {
    if (number === 0) return "";

    const groups = [];
    const thousand = 1000;

    while (number > 0) {
        groups.push(number % thousand);
        number = Math.floor(number / thousand);
    }

    let result = "";

    for (let i = groups.length - 1; i >= 0; i--) {
        const current = groups[i];

        if (current === 0) continue;

        result += readHundred(current);

        if (i === 2) result += "triệu ";
        else if (i === 1) result += "nghìn ";
    }

    return result;
}

// =====================
// MAIN CONVERT
// =====================
function convertMoneyFromNumberToString(money) {
    if (money < 0) return "Số tiền không thể âm";
    if (money === 0) return "Không đồng";

    const billion = 1000000000;
    let moneyTemp = money;

    const groups = [];

    while (moneyTemp > 0) {
        groups.push(moneyTemp % billion);
        moneyTemp = Math.floor(moneyTemp / billion);
    }

    let result = "";

    for (let i = groups.length - 1; i >= 0; i--) {
        const current = groups[i];

        if (current === 0) continue;

        result += readMillion(current);

        if (i > 0) result += "tỷ ";
    }

    return result.trim() + " đồng";
}

// =====================
// TEST RUNNER (IN ĐẦY ĐỦ)
// =====================
function runTest(input) {
    const output = convertMoneyFromNumberToString(input);

    console.log("====================================");
    console.log("MONEY CONVERTER TEST");
    console.log("====================================");

    console.log(`Input  : ${input.toLocaleString("vi-VN")}`);
    console.log("------------------------------------");

    console.log("Output :");
    console.log(output);

    console.log("====================================\n");
}

// =====================
// TEST CASES
// =====================
runTest(0);
runTest(5);
runTest(1000);
runTest(10001234105);
runTest(123456789123456789);