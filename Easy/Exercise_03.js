function test(a,b){
    let count = 0;
    if(a%2==0){
        count++;
    }
    if(b%2==0){
        count++;
    }
    if (count == 2) {
        return "Cung chan!";
    } else if (count == 1) {
        return "1 chan, 1 le";
    } else {
        return "Cung le";
    }
}
test(10, 21);

module.exports = test;
