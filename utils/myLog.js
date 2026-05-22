/**
 * Calculates the natural logarithm of a positive number
 *
 * @param {number} number - the input number (must be positive)
 * @returns {number} the natural logarithm of the input number
 */
function myLog(number) {
    if (number <= 0) throw new Error('number must be > 0');

    let exponentShift = 0;

    while (number > 2) {
        number /= 2;
        exponentShift++;
    }

    while (number < 0.5) {
        number *= 2;
        exponentShift--;
    }

    let taylorSum = 0;
    let term = number - 1;

    for (let i = 1; i <= 100; i++) {
        const sign = (i % 2 === 1) ? 1 : -1;
        taylorSum += sign * term / i;
        term *= (number - 1);
    }

    return taylorSum + exponentShift * Math.LN2;
}
