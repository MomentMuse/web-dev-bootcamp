var age = Number(prompt("How old are you?"));

if(age < 0) {
    console.log("Error. Does not compute.");
}

if(age % 2 !== 0) {
    console.log("Your age is odd!");
}

// if(age < 18) {
//     console.log("Sorry, you are not old enough to enter the venue.");
// }

// else if(age < 21) {
//     console.log("You can enter, but cannot drink.");
// }

if(age == 21) {
    console.log("Happy 21st Birthday! Here's a drink on us.");
}

if(age % Math.sqrt(age) === 0) {
    console.log("Your age is a perfect square!");
}

// else {
//     console.log("Come on in. Have a drink.");
// }