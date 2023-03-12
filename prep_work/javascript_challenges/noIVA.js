// write a function noIVA which calculates the price without IVA which is 21%
// it takes one argument which is a number for total price with IVA
// and returns the number representing the price without IVA

// function takes 1 argument
// argument is a total price with IVA
// function subtracts iva from total price
// returns the price without iva

function noIVA(totalPrice) {
    return  totalPrice - totalPrice * 0.21;
}
console.log(noIVA(242));
