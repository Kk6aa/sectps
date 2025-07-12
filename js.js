let humanScore = 0;
let computerScore = 0;

// we can get the computer choice using the Math.random method 
function getComputerChoice() {
    let computerTurn = Math.floor(Math.random() * 3) + 1;
    if (computerTurn === 1) {
        return "rock";
    }
    else if (computerTurn === 2) {
        return "paper";
    }
    else if (computerTurn === 3) {
        return "scissors" }
}

function getHumanChoice() {
    

        const humanprompt = prompt("chosse one: ").toLowerCase();
        return humanprompt;
    
}

function determineWinner(humanChoice, computerChoice) {
 
    console.log(`you chose ${humanChoice} and the computer chose ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("it's a tie!");
    }

    else if (
        (computerChoice === "paper" && humanChoice === "scissors") || 
        (computerChoice === "scissors" && humanChoice === "rock") ||
        (computerChoice === "rock" && humanChoice === "paper")
    )  {
        console.log("you win! good job habibi");
        humanScore++;
    } else {
        console.log("you lose, better luck next time habibi");
        computerScore++;
    }

}

function playGame() {

    for (let i = 0; i < 5; i++) {
        console.log(`\nRound ${i + 1} of 5`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        determineWinner(humanSelection, computerSelection);

        console.log(`current score - you ${humanScore} VS computer ${computerScore}`)
    }

    if (humanScore > computerScore) {
        console.log("You won the game!");
    }
    else if (humanScore < computerScore) {
        console.log("You lost the game!");
    }
    else {
        console.log("It's a draw!");
    }
}
playGame();

