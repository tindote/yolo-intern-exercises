/**
 * Function increase money
 * @param {integer} money 
 */

function increaseMoney(money) {
    money += 1000;
}

let money = 5000;

increaseMoney(money);

console.log(money);
/** 
Sau khi in ra thấy giá trị của money không thay đổi vì number là primitive data type.
Khi truyền vào hàm, JavaScript sẽ copy giá trị của money sang parameter mới.
Vì vậy việc thay đổi parameter bên trong hàm không ảnh hưởng tới biến bên ngoài.
*/