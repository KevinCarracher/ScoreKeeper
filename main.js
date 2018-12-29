var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var resetButton = document.getElementById("reset");
var numInput = document.querySelector("input[type='number']");
var playingTo = document.getElementById("playingTo");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

numInput.addEventListener("change", function(){
    playingTo.textContent = numInput.value;
    winningScore = Number(numInput.value);
    // reset();
});

p1Button.addEventListener("click", function(){
    p1ScoreUpdate();
});

p2Button.addEventListener("click", function(){
    p2ScoreUpdate();
});

resetButton.addEventListener("click", function(){
    reset();
});

function p1ScoreUpdate() {
    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore){
            p1Display.classList.add("winner");
            gameOver = true;
        }
    }
    p1Display.textContent = p1Score;
}

function p2ScoreUpdate() {
    if(!gameOver){
        p2Score++;
        if(p2Score === winningScore){
            p2Display.classList.add("winner");
            gameOver = true;
        }
    }
    p2Display.textContent = p2Score;
}

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    numInput.value = 0;
    gameOver = false;
}