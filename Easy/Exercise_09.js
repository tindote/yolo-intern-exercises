function getRemainder(a,b){
    if (b == 0){
        return "Khong the chia cho 0";
    }
    var res = a/b;
    if (res>-1 && res<1){
            return a;
    }else{
        if(res<0){
            return a - (b * Math.ceil(res));
        }
        return a - (b * Math.floor(res));
    }
}

var a = -80, b = 90
console.log(getRemainder(a,b))
module.exports = getRemainder;
