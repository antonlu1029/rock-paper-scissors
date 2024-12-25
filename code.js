function getComputerChoice(){
    let randNum = Math.floor(Math.random()*3)
    switch (randNum) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
        default:
            break;
    }
}

function getHumanChoice(){
    let input = prompt("Enter rock, paper, or scissors")
    return input
}

/*
winning conditions:
rock -> scissors
paper -> rock
scissors -> paper
else lose!
*/
function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase()
    if(((humanChoice === "rock") && (computerChoice === "scissors")) || ((humanChoice === "paper") && (computerChoice === "rock")) || ((humanChoice === "scissors") && (computerChoice === "paper"))){
        humanScore++
        alert(`You Won! Computer's move: ${computerChoice}`)
    }
    else if(humanChoice === computerChoice){
        alert("It's a tie!")
    }
    else{
        alert(`You Lost! Computer's move: ${computerChoice}`)
        computerScore++
    }
}

function playGame(){
    for(let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
}

humanScore = 0
computerScore = 0

playGame()