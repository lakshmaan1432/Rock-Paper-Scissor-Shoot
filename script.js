function play(move) {
    document.getElementById("user-move").innerText = move;


    if (move == 'Rock') {
        document.getElementById("user-move-image").src = "https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296854_960_720.png"
    }

    if (move == 'Paper') {
        document.getElementById("user-move-image").src = "https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296855_1280.png"
    }

    if (move == 'Scissor') {
        document.getElementById("user-move-image").src = "https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296853_1280.png"
    }

    computerPlay(move)


}


function computerPlay(UserPlay) {
    let computerPlay = "Rock"
    let randomNumber = Math.random(); // this will generate a random number between 0 to one in decimals offcourse 
    if (randomNumber < 0.33) {
        document.getElementById("computer-move").innerText = "Rock"
        document.getElementById("computer-move-image").src = "https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296854_960_720.png"
    }
    else if (randomNumber < 0.66) {
        document.getElementById("computer-move").innerText = "Paper"
        document.getElementById("computer-move-image").src = "https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296855_1280.png"
        ComputerPlay = "Paper"
    }
    else if (randomNumber < 0.99) {
        document.getElementById("computer-move").innerText = "Scissor"
        document.getElementById("computer-move-image").src = "https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296853_1280.png"
        ComputerPlay = "Scissor"
    }
    checkwinner(UserPlay, ComputerPlay)
}

function checkwinner(userMove, computerMove) {

    if (userMove == computerMove) {
        document.getElementById("result").innerText = "The game is a draw !"
    }


    else if (computerMove == "Rock") {
        if (userMove == "Paper") {
            document.getElementById("result").innerText = "You won the game!"
        }
        else {
            document.getElementById("result").innerText = "The computer won the game!"

        }
    }

    else if (computerMove == "Paper") {
        if (userMove == "Scissor") {
            document.getElementById("result").innerText = "You won the game!"
        }
        else {
            document.getElementById("result").innerText = "The computer won the game!"

        }
    }

    else if (computerMove == "Scissor") {
        if (userMove == "Paper") {
            document.getElementById("result").innerText = "The computer won the game!"
        }
        else {
            document.getElementById("result").innerText = "You won the game!"

        }
    }
}

function restart() {
    document.getElementById("user-move").innerText = ""
    document.getElementById("computer-move").innerText = ""

}