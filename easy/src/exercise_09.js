function getRemainder(dividend, divisor) {

    // Step 1: validate input
    if (typeof dividend !== "number" || typeof divisor !== "number") {
        throw new TypeError("Inputs must be numbers");
    }

    // Step 2: handle division by zero
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }

    // Step 3: compute quotient (important for correct remainder)
    let quotient = Math.trunc(a / b);

    // Step 4: compute remainder
    return dividend - (b * quotient);
}