function calculateHotelCost(checkIn, checkOut) {
    var cost = 0;
    if (checkOut <= checkIn) {
        if (checkOut <= 8) {
            cost = 160;
        } else {
            cost = 160 + (checkOut - 8) * 40;
        }
    } else {
        var hours = checkOut - checkIn;
        if (hours <= 2) {
            cost = 70*hours;
        }else{
            cost = 70*2 + (hours - 2)*50;
        }
        
    }
    return cost;
}
console.log(calculateHotelCost(-1, 5)); 

module.exports = calculateHotelCost;
