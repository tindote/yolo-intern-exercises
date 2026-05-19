function shuffleArray(arr) {
    const result = arr.slice(); // copy mảng để không mutate input

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        // swap
        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}