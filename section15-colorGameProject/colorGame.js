var numSquares = 6;
var colors = []
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDis = document.getElementById("colorDis");
var messageDis = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

init();

function init() {
    setUpMode();
    setUpSquares();
    reset();
}

resetButton.addEventListener("click", function() {
    reset();
})

function setUpMode() {
    for(var i = 0; i < modeBtns.length; i++) {
        modeBtns[i].addEventListener("click", function() {
            modeBtns[0].classList.remove("selected");
            modeBtns[1].classList.remove("selected");
            this.classList.add("selected");
    //ternary operation: one value set to two different options
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        });
    }
}

function setUpSquares() {
    for(var i = 0; i < squares.length; i++) {
            //add click listeners to squares
            squares[i].addEventListener("click", function() {
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            if(clickedColor === pickedColor) {
            messageDis.textContent = "Correct!"
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?";
            } else {
                this.style.backgroundColor = "#232323";
                messageDis.textContent = "Try Again"
            }
        });
    }
}

function reset() {
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick new random color from array
    pickedColor = pickacolor();
    //change colorDis to match pickedColor
    colorDis.textContent = pickedColor;
    //change colors of squares on page
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.display = "block";
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    //change text back to New Colors
    resetButton.textContent = "New Colors"
    h1.style.backgroundColor = "steelblue";
    messageDis.textContent = "";
}

function changeColors(color) {
    //loop through all squares
    for(var i = 0; i < squares.length; i++) {
    //change each color to match pickedColor
    squares[i].style.backgroundColor = color;
    }
}

function pickacolor() {
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

//to generate random colors num times
function generateRandomColors(num) {
    //make an array
    var arr = []
    //repeat num times
    for(var i = 0; i < num; i++) {
    //get random color and push into array
        arr.push(randoColor())
    }
    //return that arr
    return arr;
}

function randoColor() {
    //pick a "red" from 0-255
    var r = Math.floor(Math.random() * 256)
    //pick a "green" from 0-255
    var g = Math.floor(Math.random() * 256)
    //pick a "blue" from 0-255
    var b = Math.floor(Math.random() * 256)
    //synthesize new randoColor "rgb(r, g, b)"
    return "rgb(" + r + ", " + g + ", " + b + ")";
}