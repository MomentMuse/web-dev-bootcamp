// Print all numbers between -10 and 19

console.log("All numbers between -10 and 19");

var numOne = -10;

while(numOne < 20) {
    console.log(numOne);
    numOne++;
}

// Print all even numbers between 10 and 40

console.log("All even numbers between 10 and 40");

var numTwo = 10;

// Odd or even depends on base variable

while(numTwo <=40) {
    console.log(numTwo);
    numTwo+=2;
}

// This method is possible too, but it runs twice as many times

// while(numTwo <= 40) {
//     if(numTwo % 2 === 0) {
//         console.log(numTwo);
//     }
//     numTwo++;
// }

// Print all odd numbers between 300 and 333

console.log("All odd numbers between 300 and 333");

// var numThree = 301

// while(numThree <=333) {
//     console.log(numThree);
//     numThree+=2;
// }

var numThree = 300;

while(numThree <= 333) {
    if(numThree % 2 !== 0) {
        console.log(numThree);
    }
    numThree++;
}

// Print all numbers divisible by 5 AND 3 between 5 and 50

console.log("All numbers divisible by 5 AND 3 between 5 and 50");

var numFour = 5;

while(numFour <= 50) { 
    if(numFour % 5 === 0 && numFour % 3 === 0) {
        console.log(numFour);
    }
    numFour++;
}