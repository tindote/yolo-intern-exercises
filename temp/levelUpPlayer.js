/**
 * Function increase player level
 * @param {Object} player
 */

function levelUp(player) {
    player.level += 1;
}

let player = {
    name: 'Tin',
    level: 1
};

levelUp(player);

console.log(player);

/**
Sau khi in ra thấy object player bị thay đổi vì object được truyền bằng reference.
Parameter player bên trong hàm và object bên ngoài cùng tham chiếu tới một vùng nhớ. 
Vì vậy khi thay đổi property của object trong hàm, object bên ngoài cũng bị ảnh hưởng.
*/