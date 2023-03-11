//write a function called calc that takes 3 arguments the first 2 are numbers and the third is an arithmetic operator, 
// so it is either + , -, *, /
// and it executes the appropriate operation according to the provided arithmetic operator.
// make sure you test your function with all 4 arithmetic operations

// in case the third arguments is  / or * and the second argument is not provided, the second argument should default to one.
// in case the third arguments is +  or  - and the second argument is not provided, the second argument should default to zero.

//Example:

calc(10,5,'+') //15
calc(10,"/")   //10
calc (30,"*")  //30
calc (2,"+")   //2
calc (3,"-")   //3

function calc(a,b,c) {
    /*if (b=== undefined && c==="-") {
        b===0;}
    else if (b=== undefined && c==="+") {
        b===0;}
    else if (b=== undefined && c==="/") {
        b===1;} 
    else if (b=== undefined && c==="*") {
        b===1;} */ 
    switch (c) {
        case "*":
            return a*b;
        break;
        case "/":
            return a/b;
        break;
        case "+":
            return a+b;
        break;
        case "-":                
            return a-b;
        break;
        }
  }
  

  

