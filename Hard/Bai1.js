function reverseCharInWords(str) {
    return str
        .split(" ")
        .map(word => word.split("").reverse().join(""))
        .join(" ");
}

console.log(reverseCharInWords("hello world"));

module.exports = {reverseCharInWords};
