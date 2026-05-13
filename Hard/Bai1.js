function reverseCharInWords(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let reversedWord = '';
        for (let j = word.length - 1; j >= 0; j--) {
            reversedWord += word[j];
        }
        words[i] = reversedWord;
    }
    return words.join(' ');
}
let inputString = "Hello World";
let result = reverseCharInWords(inputString);
console.log(result);