//isEven

function isEven(num) {
    return num % 2 === 0;
}

//factorial

function factorial(num) {
    //define a result variable (will short-circuit for 0!)
    var result = 1;
    //calculate factorial and store value in result
    for(var i = 2; i <= num; i++) {
        result *= i;
    }
    //return the result variable
    return result;
}

//kebabtoSnake

// When you google for information, 
// try to keep it as general as possible. 
// Also, avoid W3Schools.

function kebabToSnake(str) {
    //replace all "-" with "_"
    var newStr = str.replace(/-/g , "_");
    //return str
    return newStr;
}