console.log("hello world"); //test to make sure script is working with html

function getComputerChoice() {
   let computerChoice;
   const randNum = Math.floor(Math.random() *3 +1); 

    if (randNum === 1) {
        computerChoice = 'rock';
    } else {
        if (randNum === 2) {
            computerChoice = 'paper';
        } else {
            computerChoice = 'scissors';
        }
    };

   return computerChoice;
}

const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener('click', () => {
    const humanSelection = 'rock';
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
});

const paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener('click', () => {
    const humanSelection = 'paper';
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
});

const scissorsBtn = document.querySelector('#scissorsBtn');
scissorsBtn.addEventListener('click', () => {
    const humanSelection = 'scissors';
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
});

function getHumanChoice() {

    let humanChoice = prompt("Which do you choose: rock, paper, or scissors?");
    //if we cancel the prompt, js throws an error due to following line of code: "Cannot read properties of null. (.toLowerCase)"
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice;
    } else { //if not rock, paper, or scissors, end.
            console.log("Invalid option. Please choose rock, paper, or scissors.");
        }

    return humanChoice; //get (valid) humanChoice
}

//step 4: declare players' score variables

//create containers for variables
//initialize to zero prior to game-start

let humanScore = 0;
let computerScore = 0;
let round = 0;

//step 5: write logic to play a single round

function playRound(humanChoice, computerChoice){
    
    if (humanChoice !== undefined){
        if (humanChoice === computerChoice)
            {
                round++;
                console.log("Round " + round);
                console.log("It's a draw! No points for you!");
            } else if(humanChoice !== computerChoice) 
                {
                    if (humanChoice == "rock" && computerChoice == "paper") 
                        {
                            round++;
                            console.log("Round " + round);
                            console.log("You lose! Paper beats rock.");
                            computerScore++;
                        } else if (humanChoice == "rock" && computerChoice == "scissors")
                            {
                                round++;
                                console.log("Round " + round);
                                console.log("You win! Rock beats scissors.");
                                humanScore++;
                            } else if (humanChoice == "paper" && computerChoice == "rock")
                                {
                                    round++;
                                    console.log("Round " + round);
                                    console.log("You win! Paper beats rock.");
                                    humanScore++;
                                } else if (humanChoice == "paper" && computerChoice == "scissors")
                                    {
                                        round++;
                                        console.log("Round " + round);
                                        console.log("You lose! Scissors beats paper.");
                                        computerScore++;
                                    } else if (humanChoice == "scissors" && computerChoice == "rock")
                                        {
                                            console.log("You lose! Rock beats scissors.");
                                            computerScore++;
                                            round++;
                                        } else if (humanChoice == "scissors" && computerChoice == "paper")
                                            {
                                                round++;
                                                console.log("Round " + round);
                                                console.log("You win! Scissors beats paper.")
                                                humanScore++;
                                            }
                }
            }
    console.log("Your score = " + humanScore);
    console.log("The computer's score = " + computerScore);

    // if (round == 5) {
    //         if (humanScore == computerScore){
    //             console.log("The game is a draw!");
    //             round = 0;
    //         } else if (humanScore > computerScore){
    //             console.log("You win the game!");
    //             round = 0;
    //         } else if (humanScore < computerScore) {
    //             console.log("The computer wins the game...");
    //             round = 0;
    //         }
    //     }
    }

// function playGame() {
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();

//     playRound(humanSelection, computerSelection);
// }

