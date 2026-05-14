function getRandomNumber(min, max) {
    if (min > max) {
        [min, max] = [max, min];
    }

    return Math.random() * (max - min) + min;
}

console.log("Random (5 - 10):", getRandomNumber(5, 10));
console.log("Random (10 - 5):", getRandomNumber(10, 5));
module.exports = getRandomNumber;
