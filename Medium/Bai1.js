function sortArrayByString(arr, str) {
    if(str === "Tang") {
        return arr.sort((a, b) => a - b);
    }else if(str === "Giam") {
        return arr.sort((a, b) => b - a);
    }   
}

// Example usage:
const arr = [5, 2, 9, 1, 5, 6];
console.log(sortArrayByString(arr, "Tang"));
console.log(sortArrayByString(arr, "Giam"));
module.exports = sortArrayByString;
