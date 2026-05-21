/**
 * Function to read money from number to String
 * 1. Get number with three digits by dividing to 1000 and get remainder until money <= 0
 * 2. Use function readThreeDigits to read each number and push into an array
 * 3. If count > 3 mean that three digits is more than billion unit, put suffix by "Ty"*(index - 2)
 * 4. Loop through array which store three digits part to connect all
 * 5. Return result
 *
 * @param {number|string|bigint} money
 * @returns {string}
 */

const ones = ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
function readMoneyFromNumberToString(money) {
    if (typeof money === "number") money = BigInt(money);

    if (money < 10n) return `${ones[money]} đồng`;

    const units = ['', 'nghìn', 'triệu', 'tỷ'];

    let parts = [];
    let index = 0;

    // Loop until money <= 0, each time sent 3 digit to read, put suffix and store in array.
    while (money > 0n) {
        let chunk = money % 1000n;
        // Ignore case: three digits is 000
        if (chunk !== 0n) {
            let text = readThreeDigits(chunk, money / 1000n === 0n);
            let unit = '';
            if (index > 0 && index <= 5) {
                unit = units[index % 3];
                // With chunk in last of 9 digits group, add suffix 
                if (index === 3) {
                    unit += 'tỷ ';
                }
            } else if (index > 5) {
                unit = "tỷ ".repeat(index - 2);
            }
            parts.push((text + " " + unit).trim());
        }

        money = money / 1000n;
        index++;
    }
    // Loop from end of array to conect all into a string.
    let result = '';
    for (let i = parts.length - 1; i >= 0; i--) {
        result += parts[i] + ' ';
    }
    return result + 'đồng';
}

/**
 * Function to read number has three digits
 * 1. Separate into hundred, ten, unit by dividing to 100, 10 and get remainder
 * 2. Read from hundred to unit by adding suffix
 *      - special unit case: 1, 4, 5
 * 3. Return result
 * @param {number} num which have three digits need to read.
 * @param {boolean} isHead is a flag to control is number a head of origin number.
 * @returns {String} res is how to read sent three digits.
 */
function readThreeDigits(num, isHead) {
    let hundred = Number(num / 100n);
    let ten = Number((num / 10n) % 10n);
    let unit = Number(num % 10n);

    let res = "";

    // -------- hundreds --------
    if (hundred > 0) {
        res += ones[hundred] + " trăm";
    }

    if (hundred == 0 && !isHead) {
        res += ones[hundred] + " trăm";
    }

    // -------- tens --------
    if (ten > 1) {
        res += " " + ones[ten] + " mươi";

        // special unit rules
        if (unit === 1) {
            res += " mốt";
        }
        else if (unit === 4) {
            res += " tư";
        }
        else if (unit === 5) {
            res += " lăm";
        }
        else if (unit > 0) {
            res += " " + ones[unit];
        }
    }
    else if (ten === 1) {
        res += " mười";

        // special case after "mười"
        if (unit === 5) {
            res += " lăm";
        }
        else if (unit > 0) {
            res += " " + ones[unit];
        }
    }
    else if (ten === 0 && unit > 0 ) {
        if(!isHead){
            res += " lẻ " + ones[unit];
        }else{
            res += ' '+ones[unit];
        }
    }
    return res.trim();
}
module.exports = readMoneyFromNumberToString;
