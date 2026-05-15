function checkPrime(n) {

    // Step 1: validate input
    if (typeof n !== "number") {
        throw new TypeError("Input must be a number");
    }

    if (n < 2) {
        return false;
    }

    // Step 2: check divisibility up to sqrt(n)
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}