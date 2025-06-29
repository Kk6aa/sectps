
humanScore = 0;
computerScore = 0;

// we can get the computer choice using the Math.random method 

computerTurn = Math.floor(Math.random() * 3) + 1;

function getComputerChoice(computerTurn) {

    if (computerTurn === 1) {
        computerTurn = "rock";
    }
    else if (computerTurn === 2) {
        computerTurn = "paper";
    }
    else {
        computerTurn = "scissors"
    }
    return computerTurn;
}

humanprompt = prompt("chosse one: ")
humanTurn = humanprompt.toLowerCase()

function getHumanChoice(humanTurn) {

    return humanTurn;
}

function determineWinner(getComputerChoice, getHumanChoice) {
    switch (getComputerChoice() ,getHumanChoice()) {
        case (getComputerChoice() == "rock" && getHumanChoice() == "scissors") : {
            console.log("computer wins! rock beats scissors");
        }

        case (getComputerChoice() == "paper" && getHumanChoice() == "scissors") : {
            console.log("computer wins! rock beats scissors");
        }

        case (getComputerChoice() == "scissors" && getHumanChoice() == "scissors") : {
            console.log("computer wins! rock beats scissors");
        }
    }
}

console.log(determineWinner(getComputerChoice, getHumanChoice));