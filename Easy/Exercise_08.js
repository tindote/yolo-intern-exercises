function checkPrime(a){
    for(let i = 2; i<= Math.sqrt(a);i++){
        if(a % i==0){
            return "khong";
        }
    }
    return "co";
}
console.log(checkPrime(4));
module.exports = checkPrime;
