/* 
write a function called vendingMachine
it should take 2 arguments:
– number for the amount of money entered
– number which refers to a snack you want to buy
It should return 
"You -snack- has been served", instead of a -snack- it should output 
a name of selected snack
If selected snack is not available in the vending machine it should return
"Sorry, selected snack is not available"
If selected snack is more expensive than the money amount given it should return
"Sorry, you have to insert more coins"
This is the content of our vending machine:
1. Espresso, cost: 1€
2. Cappuccino, cost: 2,50€
3. Chocolate bar, cost 2€
4. Potato chips, cost 3,50€
*/
function vendingMachine(money,snack) {
    if (snack === 1) {
           var name = "Espresso";}
    else if (snack === 2) {
        name = "Capuccino";}
    else if (snack === 3) {
            name = "Chocolate bar";}
    else if (snack === 4) {
        name = "Potato chips";}

    if ((snack === 1 && money >= 1) || (snack === 2 && money >= 2.50) || (snack === 3 && money >= 2)|| (snack === 4 && money >= 3.50)){
            return "Your " + name + " has been served";}
    else if (snack > 4 || snack < 1){
        return "Sorry, selected snack is not available";}
    else {
        return "Sorry, you have to insert more coins";}
}

