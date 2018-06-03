var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resButton = document.querySelector("#reset");
var p1Dis = document.querySelector("#p1Dis");
var p2Dis = document.querySelector("#p2Dis");
var numInput = document.querySelector("input");
var scoreMax = document.querySelector("#scoreMax");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

// there are more advanced, DRYer ways of writing this...
// but we're not going to go into it now

p1Button.addEventListener("click", function() {
    if(!gameOver) {
        p1Score++;
        if(p1Score === winningScore) {
            p1Dis.classList.add("winner");
            gameOver = true;
        }
        p1Dis.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function() {
    if(!gameOver) {
        p2Score++;;
        if(p2Score === winningScore) {
            p2Dis.classList.add("winner");
            gameOver = true;
        }
    p2Dis.textContent = p2Score;
    }
});

resButton.addEventListener("click", function() {
    reset();
});

numInput.addEventListener("change", function() {
    scoreMax.textContent = this.value;
    winningScore = Number(this.value);
    reset();
});

function reset() {   
    p1Score = 0;
    p2Score = 0;
    p1Dis.textContent = 0;
    p2Dis.textContent = 0;
    p1Dis.classList.remove("winner");
    p2Dis.classList.remove("winner");
    gameOver = false;
}