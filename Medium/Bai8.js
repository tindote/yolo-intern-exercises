function findStringInString(str1, str2) {
    if (str1.includes(str2)) {
        return str1.search(str2);
    } else {
        return false;
    }

}
console.log(findStringInString("Hello world", "world")); // Output: 6
console.log(findStringInString("Hello world", "abc")); // Output: false