/**
 * Calculates the exponential of a number (e^x)
 * @param {number} exponent - the exponent
 * @returns {number} the exponential of the exponent
 */
function myExp(exponent) {
    let sum = 1;
    let term = 1;

    for (let n = 1; n <= 100; n++) {
        term *= exponent / n;
        sum += term;
    }
    return sum;
}

