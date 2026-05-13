function cutStringByStartAndLength (str, start, length) {
    return str.substr(start, length);
}

const str = "Hello, World!";
console.log(cutStringByStartAndLength(str, 1, 5));