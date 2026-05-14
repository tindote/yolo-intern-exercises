function convertMoneyFromNumberToString(money) {

    if (money < 0) {
        return "Số tiền không thể âm";
    }

    if (money === 0) {
        return "Không đồng";
    }

    let result = "";

    const billion = 1000000000;

    let separateBillion = [];

    // Tách từng cụm tỷ
    while (money > 0) {

        let remainder = money % billion;

        separateBillion.push(remainder);

        money = Math.floor(money / billion);
    }

    // Đọc từng cụm
    for (let i = separateBillion.length - 1; i >= 0; i--) {

        let current = separateBillion[i];

        if (current === 0) {
            continue;
        }

        result += readMillion(current);

        // Thêm "tỷ"
        if (i > 0) {

            for (let j = 0; j < i; j++) {
                result += "tỷ ";
            }
        }
    }

    return result.trim() + " đồng";
}

function readMillion(number) {

    if (number === 0) {
        return "";
    }

    let result = "";

    const thousand = 1000;

    let separateMillion = [];

    while (number > 0) {

        separateMillion.push(number % thousand);

        number = Math.floor(number / thousand);
    }

    for (let i = separateMillion.length - 1; i >= 0; i--) {

        let current = separateMillion[i];

        if (current === 0) {
            continue;
        }

        result += readHundred(current);

        if (i === 2) {
            result += "triệu ";
        }
        else if (i === 1) {
            result += "nghìn ";
        }
    }

    return result;
}

function readHundred(number) {

    let result = "";

    const numberObj = {
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

    let hundred = Math.floor(number / 100);

    let ten = Math.floor((number % 100) / 10);

    let unit = number % 10;

    // Hàng trăm
    if (hundred > 0) {
        result += numberObj[hundred] + " trăm ";
    }

    // Hàng chục
    if (ten > 1) {

        result += numberObj[ten] + " mươi ";

        if (unit === 1) {
            result += "mốt ";
        }
        else if (unit === 4) {
            result += "tư ";
        }
        else if (unit === 5) {
            result += "lăm ";
        }
        else if (unit > 0) {
            result += numberObj[unit] + " ";
        }
    }
    else if (ten === 1) {

        result += "mười ";

        if (unit === 5) {
            result += "lăm ";
        }
        else if (unit > 0) {
            result += numberObj[unit] + " ";
        }
    }
    else if (ten === 0 && unit > 0) {

        if (hundred > 0) {
            result += "linh ";
        }

        result += numberObj[unit] + " ";
    }

    return result;
}


// TEST
console.log(convertMoneyFromNumberToString(10001234105));

console.log(convertMoneyFromNumberToString(123456789123456789));
