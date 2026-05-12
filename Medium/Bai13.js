function calculateTax(incomes){
    let tax = 0;
    for(let i = 0; i < incomes.length; i++){
        if(incomes[i] <= 20){
            tax += incomes[i] * 0.05;
        } else if(incomes[i] <= 50) {
            tax += incomes[i] * 0.1;
        } else {
            tax += incomes[i] * 0.2;
        }
    }
    return tax;
}

const incomes = [10, 30, 60];
console.log(calculateTax(incomes));