console.log("hello world");

//computer chooses random number between 1 and 3
// 1 is rock
// 2 is paper
// 3 is scissors
//computer returns choice
function getComputerChoice() {
   let computerChoice;
   const randNum = Math.floor(Math.random() *3 +1); //playing around. I realize there's no need to add 1; could just assign 0, 1, 2!

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


//ask for rock, paper, or scissors
//get human input
//check for capitalization (or lack thereof)

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
//...do I need to initialize these in some way? nope! Simply typing them in defines them.


//step 5: write logic to play a single round

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice(); these are what input later

function playRound(humanChoice, computerChoice){
    
    if (humanChoice !== undefined){
        if (humanChoice === computerChoice)
            {
                console.log("It's a draw! Do-over!");
                round++;
            } else if(humanChoice !== computerChoice) 
                {
                    if (humanChoice == "rock" && computerChoice == "paper") 
                        {
                            console.log("You lose! Paper beats rock.");
                            computerScore++;
                            round++;
                        } else if (humanChoice == "rock" && computerChoice == "scissors")
                            {
                                console.log("You win! Rock beats scissors.");
                                humanScore++;
                                round++
                            } else if (humanChoice == "paper" && computerChoice == "rock")
                                {
                                    console.log("You win! Paper beats rock.");
                                    humanScore++;
                                    round++;
                                } else if (humanChoice == "paper" && computerChoice == "scissors")
                                    {
                                        console.log("You lose! Scissors beats paper.");
                                        computerScore++;
                                        round++;
                                    } else if (humanChoice == "scissors" && computerChoice == "rock")
                                        {
                                            console.log("You lose! Rock beats scissors.");
                                            computerScore++;
                                            round++;
                                        } else if (humanChoice == "scissors" && computerChoice == "paper")
                                            {
                                                console.log("You win! Scissors beats paper.")
                                                humanScore++;
                                                round++;
                                            }
                }
            }
    console.log("Your score = " + humanScore);
    console.log("The computer's score = " + computerScore);
    console.log("Round " + round);

            //add ability to post score. 
            //Each time a round happens, post scores:
    
            //declare the winner after the last round.
            //end game
    if (round == 4) {
            if (humanScore == computerScore){
                return console.log("The game is a draw!");
            } else if (humanScore > computerScore){
                return console.log("You win the game!");
            } else if (humanScore < computerScore) {
                return console.log("The computer wins the game...");
            }
        }
    }

function playGame() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
}

//get human choice
//get computer choice
//compare choices
//declare winner
//increment winner's score by 1
