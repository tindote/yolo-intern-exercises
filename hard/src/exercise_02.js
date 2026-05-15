function getRandomNumber(min, max) {
    if (min > max) {
        [min, max] = [max, min];
    }

    return Math.random() * (max - min) + min;
}