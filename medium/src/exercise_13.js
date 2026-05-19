/**
 * Calculates the cost of a hotel stay based on check-in and check-out times.
 * rules:
 * - The first 2 hours cost 70k each.
 * - After the first 2 hours, the cost is 50k per hour.
 * - Stay through the night (check-out time is before 8AM) costs 160k. If the check-in time is after 8PM, the cost is 160k plus 40k for each hour after 8PM.
 * 
 * constraints:
 * - Check-in and check-out times are not different over 24 hours.
 * - Stay through the night is defined as staying through 24:00 (midnight).
 * 
 * pseudocode:
 * 1. Calculate the total hours of stay by subtracting check-in from check-out. 
 * 2. If check-out - check-in is negative, its mean that the stay spans over midnight.
 * 3. If the stay spans over midnight, calculate the cost as 160k plus 40k for each hour after 8PM if check-out is after 8PM.
 * 4. If the total hours of stay is less than or equal to 2, calculate the cost as total hours multiplied by 70k.
 * 5. If the total hours of stay is greater than 2, calculate the cost as 140k (for the first 2 hours) plus the remaining hours multiplied by 50k. 
 * 6. Return the total cost of the hotel stay.
 * @param {number} checkIn - The check-in time (in hours).
 * @param {number} checkOut - The check-out time (in hours).
 * @returns {number} The total cost of the hotel stay.
 */
function calculateHotelCost(checkIn, checkOut) {
    let totalHours = checkOut - checkIn;
    let overnightStay = false;

    // Check if the stay spans over midnight
    if (totalHours < 0) {
        overnightStay = true;
    }

    // Calculate cost based on the total hours of stay
    let cost = 0;
    if(overnightStay) {
        // If check-out is after 8PM, calculate additional cost for hours after 8PM
        if(checkOut > 8) {
            cost = 160 + (checkOut - 8) * 40;
        // If check-out is before or at 8PM, the cost is just 160k
        } else {
            cost = 160;
        }
    } else {
        // Calculate cost for stays that do not span over midnight
        if(totalHours <= 2) {
            cost = totalHours * 70;
        } else {
            cost = 140 + (totalHours - 2) * 50;
        }
    }
    return cost;
}