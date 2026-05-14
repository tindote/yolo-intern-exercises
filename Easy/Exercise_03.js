function test(a,b){
    let count = 0;
    if(a%2==0){
        count++;
    }
    if(b%2==0){
        count++;
    }
    return count;
}

var count = test(10, 21);
if (count ==2){
    console.log("Cung chan!");
}else if(count == 1){
    console.log("1 chan, 1 le");
}else{
    console.log("Cung le");
}
module.exports = test;
