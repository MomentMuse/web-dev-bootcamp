var answer = prompt("Are we there yet?")

// VERSION 1

// while(answer !=="yes" && answer !== "yeah") {
//     var answer = prompt("Are we there yet?");
// }

// alert("YAY!! WE MADE IT!")

// THE FOLLOWING CONDITIONAL WILL ONLY RUN ONCE:

// if(answer === "yes") {
//     alert("Yay! We made it!")
// }   else {
//     var answer = prompt("Are we there yet?");
// }

// VERSION 2

while(answer.indexOf("yes") === -1  && answer.indexOf("yeah") === -1 ) {
    var answer = prompt("Are we there yet?");
}

alert("YAY!! WE MADE IT!")