function swap3Number(a,b,c){
    let temp = a;
    a = b;
    b = c;
    c= temp;
    console.log(a + ", "+b+", "+c)
}

swap3Number(1,2,3);
module.exports = swap3Number;
