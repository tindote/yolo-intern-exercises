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