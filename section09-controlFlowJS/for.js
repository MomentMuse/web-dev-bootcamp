console.log("PRINT ALL NUMBERS BETWEEN -10 AND 19");

for(var i = -10; i < 20; i++) {
    console.log(i);
}

console.log("PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40");

for(var j = 10; j <= 40; j++) {
    if(i % 2 === 0) {
        console.log(j);
    }
}

console.log("PRINT ALL ODD NUMBERS BETWEEN 300 AND 333");

for(var k = 300; k <=333; k++) {
    if(k % 2 !== 0) {
        console.log(k);
    }
}

console.log("PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");

for(var l = 5; l <= 50; l++) {
    if(l % 5 === 0 && l % 3 === 0) {
        console.log(l);
    }
}