let player1Score = 0
let player2Score = 0
let player1Wins = 0
let player2Wins = 0
let player1Turn = true

const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const player1Winboard = document.getElementById("player1Winboard")
const player2Winboard = document.getElementById("player2Winboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

 rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1

    if (player1Turn) {
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        if (player1Score >= 20) {
            message.textContent = "FINAL TURN, Player 2!"
        } else {
        message.textContent = "Player 2 Turn"
        }
    } else {
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        if (player2Score >= 20) {
            decideWinner() 
        } else if (player1Score >= 20) {
            decideWinner()
        } else {
        message.textContent = "Player 1 Turn"
        }
    }
    
    function decideWinner() {
    if (player1Score > player2Score) {
        displayWinner(1);
        player1Wins += 1
        player1Winboard.textContent = player1Wins
    } else if (player2Score > player1Score) {
        displayWinner(2);
        player2Wins += 1
        player2Winboard.textContent = player2Wins
    } else {
        displayWinner(3);
    }
}
    
    function displayWinner(val) {
        if (val == 3) {
            message.textContent = "It's a draw!"
            rollBtn.style.display = "none"
            resetBtn.style.display = "block"
            } else {
                message.textContent = "Player " + val + " has won! 🥳"
                rollBtn.style.display = "none"
                resetBtn.style.display = "block"
            }
    }

player1Turn = !player1Turn
})
 
resetBtn.addEventListener("click", function() {
    player1Score = 0;
    player1Scoreboard.textContent = player1Score;
    player1Dice.textContent = "-"
    player2Score = 0;
    player2Scoreboard.textContent = player2Score;
    player2Dice.textContent = "-"
    player1Turn = true;
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
    message.textContent = "Player 1 Turn";
    rollBtn.style.display = "block";
    resetBtn.style.display = "none";
 });
