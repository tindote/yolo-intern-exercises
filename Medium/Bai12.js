function getRandomValue(a) {
    return Math.random() * (2*a)-a;
}
console.log(getRandomValue(10));
module.exports = getRandomValue;
