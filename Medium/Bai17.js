function cutString (str, start, end) {
    return str.slice(start, end);
}

const str = "Hello, World!";
console.log(cutString(str, 0, 5));
