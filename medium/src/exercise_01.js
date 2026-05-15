function sortArrayByString(arr, str) {
    if(str === "Tang") {
        return arr.sort((a, b) => a - b);
    }else if(str === "Giam") {
        return arr.sort((a, b) => b - a);
    }   
}