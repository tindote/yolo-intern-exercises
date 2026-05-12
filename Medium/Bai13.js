
function calculateTax(incomes) {
    var totalTax = 0;
    for (var i = 0; i < incomes.length; i++) {
        var income = incomes[i];
        if (income <= 20) {
            totalTax += income * 0.05;
        } else if (income <= 50) {
            totalTax += income * 0.1;
        } else {
            totalTax += income * 0.2;
        }
    }
    return totalTax;
}
var incomes = [10, 30, 60];
console.log(calculateTax(incomes));