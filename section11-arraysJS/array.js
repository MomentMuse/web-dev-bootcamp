// printReverse(): prints out elements of an array in reverse order
console.log("Try the printReverse() Function")

var nums = [1,2,3,4,5,6,7,8,9,10]

function printReverse(print) {
    for(var i = (print.length - 1); i >= 0; i--) {
    console.log(print[i]);
    }
}

// isUniform(): returns true if all elements within the array are identical
console.log("Or try the isUniform() Function!")

var uni = [3,3,3,3,3,3]
var notuni = [2,2,2,2,3]

function isUniform(arr) {
    var z = arr[0];
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] !==z) {
            return false;
        }
    }
    return true;
}

// sumArray(): returns the sum of all numbers in the array
console.log("How about the sumArray() Function?")

var price = [0,3,9,4,1,10]

function sumArray(string) {
    var sum = 0;
string.forEach(function(element) {
    sum += element;
    });
return sum;
}

// max(): return the maximum number in the array
console.log("Don't forget about the max() Function!")

function max(compare) {
    var highest = compare[0];
compare.forEach(function(element) {
    if(element > highest) {
        highest = element;
    }
});
return highest;
}